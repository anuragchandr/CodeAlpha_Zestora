import React from 'react';
import '../css/uform.css';
import axios from 'axios';

function Postupload() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = localStorage.getItem('username'); // Or wherever your auth stores it

    formData.append('username', username); // Append username to FormData

    try {
      const response = await axios.post('http://localhost:5000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert('Post uploaded successfully!');
        event.target.reset(); // Clear the form
      } else {
        alert('Failed to upload. Try again.');
      }

    } catch (err) {
      console.error('Upload error:', err);
      alert('An error occurred while uploading.');
    }
  };

  return (
    <div>
      <form className="pupload" id="postupload" onSubmit={handleSubmit}>
        <h3>Post Upload</h3>

        <label htmlFor="postDescription">Description:</label>
        <textarea id="postDescription" name="postDescription" required></textarea>

        <label htmlFor="postImage">Image:</label>
        <input type="file" id="postImage" name="postImage" accept="image/*" required />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Postupload;
