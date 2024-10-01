const express = require('express');  // Import the Express library for creating the server.
const multer = require('multer');    // Import Multer for handling file uploads.
const path = require('path');        // Import Path to handle and manipulate file paths.
const { exec } = require('child_process'); // Import exec to execute shell commands.
const fs = require('fs');            // Import the File System module to work with files.
const cors = require('cors');        // Import CORS to allow cross-origin requests.

const app = express();  // Initialize the Express application.

// Enable CORS to allow requests from the frontend running on http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Configure Multer for handling file uploads
// Define where the uploaded files will be stored and how they will be named
const storage = multer.diskStorage({
  // Set the destination for the uploaded files to be stored in the 'uploads' folder
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Store files in the 'uploads/' directory.
  },
  // Configure the filename for uploaded files by appending the current timestamp
  filename: function (req, file, cb) {
    // The filename will be the original fieldname followed by the current timestamp
    // and the file extension (e.g., 'pdfFile-1634256749267.pdf').
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize Multer with the specified storage configuration for handling file uploads
const upload = multer({ storage: storage });

// Define the API route for handling PDF file uploads
app.post('/api/upload', upload.single('pdfFile'), (req, res) => {
  // Check if a file was uploaded; if not, return a 400 Bad Request response
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Get the path of the uploaded file
  const filePath = req.file.path;
  // Define the path to the Python script that will process the PDF
  const pythonScriptPath = path.join(__dirname, 'scripts', 'process_pdf.py');

  // Execute the Python script with the uploaded file as an argument
  exec(`python "${pythonScriptPath}" "${filePath}"`, (error, stdout, stderr) => {
    // If there's an error running the script, log the error and return a 500 error response
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return res.status(500).send(`Error processing PDF: ${stderr}`);
    }

    // After the Python script is executed, read the 'uploads' directory to list files
    fs.readdir('uploads', (err, files) => {
      // If there's an error reading the directory, return a 500 error response
      if (err) {
        return res.status(500).send('Error reading output directory.');
      }

      // Return a JSON response with a success message and the list of files in the 'uploads' folder
      res.json({ message: 'File processed successfully', files });
    });
  });
});

// Start the Express server on port 5000 and log a message when the server is running
app.listen(5000, () => {
  console.log('Backend server running at http://localhost:5000');
});
