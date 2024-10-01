import { useState } from 'react';  // Import React's useState hook to manage component state.

export default function Upload() {
  // Define a state variable to hold the selected file. Initially, it's set to null.
  const [selectedFile, setSelectedFile] = useState(null);

  // Define a state variable to hold the message that will be displayed after the file is uploaded.
  const [message, setMessage] = useState('');

  // Handle file selection when the user chooses a file from the file input field.
  const handleFileChange = (event) => {
    // Set the selected file to the first file chosen by the user.
    setSelectedFile(event.target.files[0]);
  };

  // Handle form submission when the user clicks the "Upload PDF" button.
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior (page reload).
    
    // Create a new FormData object to hold the selected file.
    const formData = new FormData();
    // Append the selected PDF file to the FormData object with the key 'pdfFile'.
    formData.append('pdfFile', selectedFile);

    // Send the selected file to the backend using a POST request to the API endpoint.
    const response = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',  // The HTTP method used to send the data.
      body: formData,  // Send the FormData object as the body of the request.
    });

    // Parse the response data from the server as JSON.
    const data = await response.json();
    // Update the message state with the message returned from the server.
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Upload a PDF</h1>
      {/* Form for file upload; when submitted, the handleSubmit function is called */}
      <form onSubmit={handleSubmit}>
        {/* File input field; when a file is selected, the handleFileChange function is called */}
        <input type="file" onChange={handleFileChange} accept=".pdf" required />
        {/* Submit button to trigger the file upload */}
        <button type="submit">Upload PDF</button>
      </form>
      {/* Display the message returned from the server after the file is uploaded */}
      {message && <p>{message}</p>}
    </div>
  );
}
