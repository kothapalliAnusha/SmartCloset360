const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');
const bcrypt = require('bcrypt');

const multer = require('multer');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public')); 



app.use(cors());
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  next();
});


app.use(bodyParser.json());

// Connect to MongoDB (change the URL to your MongoDB server)
//mongoose.connect('mongodb+srv://anusha:Harekrishna123@cluster0.y77lfk7.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://anusha:Harekrishna123@cluster0.y77lfk7.mongodb.net/Warddrobe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connection successful');
});
// Create a user model
const User = mongoose.model('User', {
  username: String,
  password: String,
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('dress-image'), (req, res) => {
  console.log("Received a dress upload request");
  
  // Check if the file was uploaded
  if (!req.file) {
    console.log("No file received");
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }
  
  console.log("File received:", req.file);

  // Construct the image URL based on your server's URL and the file path
  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  console.log("I am Image",imageUrl);
  // Respond with success and the image URL
  res.json({ success: true, message: 'Image uploaded successfully', imageFilename: req.file.filename });

});





app.post('/login', async (req, res) => {
  console.log("I am login page");
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).exec();

    if (!user) {
      res.status(401).json({ success: false, message: 'Login failed' });
      return;
    }

    
    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (passwordsMatch) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Login failed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});




app.post('/register', async (req, res) => {
  console.log("I am register");
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  try {
    const existingUser = await User.findOne({ username }).exec();

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();

    res.json({ success: true, message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
