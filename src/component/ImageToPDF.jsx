import React, { useRef, useState } from 'react'
import './css/ImageToPDF.css'
import { Document, Page, Image, pdf, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import ScrollToTop from './ScrollToTop';
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        height: '100%',
        width: '100%',
      },
      image: {
        padding: 15,
        marginTop: 20,
        maxWidth: '50%', // Two images per page if they are small
        width: '100%',
        height: 'auto',
      },
})
const ImageToPDF = () => {
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef(null);
  
    const convertToPDF = async () => {
      const files = fileInputRef.current.files;
      const images = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          images.push(event.target.result);
          if (images.length === files.length) {
            pdfDownload(images);
            fileInputRef.current.value = '';
          }
        };
        reader.onerror = (error) => {
          console.log("Error while handling", error);
        };
        reader.readAsDataURL(file);
      }
    };
    const pdfDownload = (images) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            if (currentProgress > 100) {
                clearInterval(interval);
                generatePDF(images);
                setProgress(0);
            }
            else {
                setProgress(currentProgress)
            }
        }, 300);
    }
    const generatePDF = async (images) => {
        try {
            const doc = (
              <Document>
                <Page style={styles.page}>
                  {images.map((img, index) => (
                    <Image key={index} src={img} style={styles.image} />
                  ))}
                </Page>
              </Document>
            );
      
            const asPDF = pdf();
            asPDF.updateContainer(doc);
            const pdfBlob = await asPDF.toBlob();
            saveAs(pdfBlob, 'converted.pdf');
          } catch (error) {
            console.log("error", error);
          }
    }
    return (
        <>
      <ScrollToTop />
      <div className="image-to-pdf-container">
        <div className="image-to-pdf-heading">
          <h1>Image to PDF Converter</h1>
          <p>Choose photos, and we'll create a page for each image in a downloadable PDF.</p>
        </div>

        <div className="image-to-pdf-card">
          <input type="file" multiple ref={fileInputRef} />
          <button onClick={convertToPDF} className='image-to-pdf-button-convert'>Convert to PDF</button>
          <div style={{ width: '100%', height: '20px', border: '1px solid #ccc', marginTop: 50, marginBottom: 30 }}>
            <div className="image-to-pdf-progress" style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#1A7E90',
              transition: 'width 0.3s ease-in-out',
            }}>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default ImageToPDF