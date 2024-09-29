const express = require('express');
const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const layout = require('./components/layout'); // Importer le layout

const app = express();

app.use('/components', express.static(path.join(__dirname, 'components')));


// Set up Multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// File filter to only allow PDF files
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext === '.pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDFs are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

// Serve the form and allow file upload
app.get('/', (req, res) => {
  const formContent = `
    <h2>Upload a PDF</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="pdfFile" accept=".pdf" required>
      <button type="submit">Upload PDF</button>
    </form>
  `;
  
  // Utiliser le layout pour envelopper le contenu du formulaire
  res.send(layout(formContent));
});

// Handle the PDF upload and process it
app.post('/upload', upload.single('pdfFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = req.file.path; // Path to the uploaded PDF file
  const outputFolder = 'uploads';
  const pythonScriptPath = path.join(__dirname, 'scripts', 'process_pdf.py'); // Chemin absolu vers process_pdf.py dans le dossier scripts

  // Run the Python script to process the PDF
  exec(`python "${pythonScriptPath}" "${filePath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      console.error(`Python STDERR: ${stderr}`); // Afficher les erreurs renvoyées par Python
      return res.status(500).send(`Error processing PDF: ${stderr}`);
    }

    console.log(`Python STDOUT: ${stdout}`); // Afficher la sortie du script Python pour vérifier ce qui se passe

    // Return a link to the output folder
    fs.readdir(outputFolder, (err, files) => {
      if (err) {
        return res.status(500).send('Error reading output directory.');
      }

      let outputFilesHtml = files
        .map(file => `<a href="/uploads/${file}" download>${file}</a>`)
        .join('<br>');

      const resultContent = `
        <h2>Processed PDF Pages</h2>
        <p>${outputFilesHtml}</p>
        <a href="/">Upload another PDF</a>
      `;

      // Utiliser le layout pour envelopper le contenu du résultat
      res.send(layout(resultContent));
    });
  });
});


// Serve the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
