const express = require('express');
const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const cors = require('cors');  // Import CORS

const app = express();

// Enable CORS for requests from localhost:3000 (your frontend)
app.use(cors({ origin: 'http://localhost:3000' }));

// Set up file upload logic using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('pdfFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = req.file.path;
  const pythonScriptPath = path.join(__dirname, 'scripts', 'process_pdf.py');

  exec(`python "${pythonScriptPath}" "${filePath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return res.status(500).send(`Error processing PDF: ${stderr}`);
    }

    fs.readdir('uploads', (err, files) => {
      if (err) {
        return res.status(500).send('Error reading output directory.');
      }

      res.json({ message: 'File processed successfully', files });
    });
  });
});

app.listen(5000, () => {
  console.log('Backend server running at http://localhost:5000');
});
