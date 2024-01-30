const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createReadStream } = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/convertToPdf', upload.array('images'), (req, res) => {
  const images = req.files.map(file => file.buffer);

  // Convert images to PDF using html2pdf.js or any other library

  // For simplicity, save the PDF to a file
  const pdfPath = path.join(__dirname, 'output.pdf');
  createReadStream(pdfPath).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
