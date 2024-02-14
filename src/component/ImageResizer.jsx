import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import './css/ImageResizer.css';

const ImageResizer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [imageHeight, setImageHeight] = useState()
  const [imageWidth, setImageWidth] = useState()
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0])
    // handleImage(selectedImage);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0])
  };

  const handleImage = (file) => {
    if (file) {
      Resizer.imageFileResizer(
        file,
        imageWidth, // maxWidth
        imageHeight, // maxHeight
        'JPEG', // compressFormat
        100, // quality
        0, // rotation
        (uri) => {
          setResizedImage(uri);
        },
        'base64' // outputType
      );
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = resizedImage;
    downloadLink.download = 'resized_image.jpg';
    downloadLink.click();
  };

  return (
    <div
      className="image-resizer-container"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1>Image Resizer</h1>
      <p>In this palace you have to just choose the image and sleect the required height and width we will resize thr image with out loose the quality  and will make it downloadable.</p>
      <div className="input-image-container">
        <label htmlFor="input-image"><a>Choose Image</a> Or Just Drag and Drop Image</label>
        <input type="file" name="input-image" id="input-image" onChange={handleImageChange} accept="image/*" />
      </div >
  <div className="image-review-container">
    <div className="original-image-review">
      <div className="image-review-box">
        {selectedImage && (
          <div>
            <h3>Original Image</h3>
            <img src={selectedImage} alt="Original" className="image" />
          </div>
        )}
      </div>
      <div className="settingResolution" style={{ display: selectedImage ? 'flex' : 'none' }}>
        <form >
          <div className="inputs-resolutions">
            <div className="resolution-input">
              <label htmlFor="width">Width</label>
              <input type="number" max={1000} min={50} value={imageWidth} name="width" id="width" onChange={(e) => setImageWidth(e.target.value)} />
            </div>
            <div className="resolution-input">
              <label htmlFor="height">Height</label>
              <input type="number" max={1000} min={50} value={imageHeight} name="height" id="height" onChange={(e) => setImageHeight(e.target.value)} />
            </div>
          </div>
          <div className="apply-resolution">
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              handleImage(image);
            }} >Apply</button>
          </div>
        </form>
      </div>

    </div>
    <div className="resized-image-review">
      {resizedImage && (
        <div>
          <h3>Resized Image</h3>
          <img src={resizedImage} alt="Resized" className="image" />
          <button className="download-btn" onClick={handleDownload}>
            Download Resized Image
          </button>
        </div>
      )}
    </div>
  </div>
    </div >
  );
};

export default ImageResizer;
