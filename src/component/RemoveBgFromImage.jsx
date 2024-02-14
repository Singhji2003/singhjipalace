import React, { useState } from 'react'
import './css/RemoveBgFromImage.css'
import axios from 'axios';
import Loader from './Loader';
const RemoveBgFromImage = () => {
  const [Image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [finalUrl, setFinalUrl] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const handleImageChange = (e) => {
    let image = e.target.files[0]; // it will return only the first selected file
    setSelectedImage(image || null);
    setImage(URL.createObjectURL(e.target.files[0]))
  };
  const handleFileUpload = async () => {
    setIsUpload(true);
    const formData = new FormData();
    formData.append("image_file", selectedImage);
    formData.append("size", "auto");

    const api_key = "MDx62uPJvekoUWyb3dsZgaXM";


    // send to the server
    try {
      const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
        headers: {
          "X-Api-Key": api_key,
        },
        responseType: 'blob', // Specify the response type as blob
      });

      const url = URL.createObjectURL(response.data);
      setFinalUrl(url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUpload(false);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImage(event.target.files[0] || null);
    setImage(URL.createObjectURL(event.target.files[0]))
  };
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = finalUrl;
    downloadLink.download = 'bg-remove.jpg';
    downloadLink.click();
  };
  return (
    <div
      className="image-resizer-container"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {isUpload && <Loader />}
      <h1>Remove BackGround From Image</h1>
      <p>In this palace you have to just choose the Image and we will remove the whole BackGround and will make it downloadable.</p>
      <div className="input-image-container">
        <label htmlFor="input-image"><a>Choose Image</a> Or Just Drag and Drop Image</label>
        <input type="file" name="input-image" id="input-image" onChange={handleImageChange} accept="image/*" />
      </div>
      <div className="image-review-container image-review-container-for-bgremover">
        <div className="original-image-review">
          <div className="image-review-box">
            {Image && (
              <div>
                <h3>Original Image</h3>
                <img src={Image} alt="Original" className="original-image-withBG" />
              </div>
            )}
          </div>
          <div className="settingResolution button-remove-bg" style={{ display: Image ? 'flex' : 'none' }}>
            <form >
              <div className="remove-bg">
                <button type='submit' onClick={(e) => {
                  e.preventDefault();
                  handleFileUpload();
                }} >Apply</button>
              </div>
            </form>
          </div>

        </div>
        <div className="resized-image-review">
          {finalUrl && (
            <div>
              <h3>New Image Without BackGrund</h3>
              <img src={finalUrl} alt="Resized" className="original-image-withBG" />
              <button className="download-btn" onClick={handleDownload} >

                Download New Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RemoveBgFromImage