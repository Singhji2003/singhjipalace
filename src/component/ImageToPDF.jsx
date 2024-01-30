import React, { useRef, useState } from 'react'
import './css/ImageToPDF.css'
import { Document, Page, Image, pdf, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
const styles = StyleSheet.create({
    image: {
        padding: 15,
        marginTop: 20
    }
})
const ImageToPDF = () => {

    const [progress, setprogress] = useState();
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
            }
            reader.onerror = (error) => {
                console.log("Error ehile handling", error)
            }
            reader.readAsDataURL(file)
        }

    }
    const pdfDownload = (images) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            if (currentProgress > 100) {
                clearInterval(interval);
                generatePDF(images);
                setprogress(0);
            }
            else {
                setprogress(currentProgress)
            }
        }, 300);
    }
    const generatePDF = async (images) => {
        try {
            const doc = (
                <Document>
                    {images.map((img, index) => (
                        <Page key={index}>
                            <Image style={styles.image} src={img} />
                        </Page>
                    ))
                    }
                </Document>
            )
            const asPDF = pdf();
            asPDF.updateContainer(doc)
            const pdfBlob = await asPDF.toBlob();
            saveAs(pdfBlob, 'converted pdf')
        }
        catch (error) {
            console.log("error", error)
        }
    }
    return (
        <>
            <div className="image-to-pdf-container">
                <div className="image-to-pdf-heading">
                    <h1>Image to PDF Convertor</h1>
                </div>

                <div className="image-to-pdf-card">
                    <input type="file" multiple ref={fileInputRef} />
                    <button onClick={convertToPDF} className='image-to-pdf-button-convert'>Convert to Pdf</button>
                    <div style={{ width: '100%', height: '20px', border: '1px solid #ccc', marginTop: 50, marginBottom: 30 }}>
                        <div className="image-to-pdf-progress" style={{
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor: '#1A7E90',
                            transition: 'width 0.3s ease-in-out'
                        }}>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ImageToPDF