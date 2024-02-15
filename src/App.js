import React, { useEffect, useState } from 'react'
import HomePage from './component/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './component/Services';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/About';
import ScrollToTop from './component/ScrollToTop';
import Contact from './component/Contact';
import ComingSoon from './component/ComingSoon';
import WordsSolution from './component/WordsSolution';
import TextToSpeech from './component/TextToSpeech';
import SpeechToText from './component/SpeechToText';
import ImageResizer from './component/ImageResizer';
import ImageToPDF from './component/ImageToPDF';
import RemoveBgFromImage from './component/RemoveBgFromImage';
import WebBuilder from './component/WebBuilder';
import Alert from './component/Alert';
import WebContacting from './component/WebContacting';
import TypingTest from './component/TypingTest';
const App = () => {
  const [commingSoon, setCommingSoon] = useState(false)
  const [alert, setAlert] = useState('')
  const showAlert = (message, success) => {
    setAlert({
      message: message,
      success: success
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    // Attach the event listener when the component mounts
    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        {commingSoon && <ComingSoon commingSoon={setCommingSoon} />}
        <ScrollToTop />

        <Navbar commingSoon={setCommingSoon} />
        <Routes>
          <Route index element={<HomePage commingSoon={setCommingSoon} showAlert={showAlert} />} />
          <Route exact path="/services" element={<Services commingSoon={setCommingSoon} />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/contact" element={<Contact showAlert={showAlert} />} />
          <Route path="/words-solution" element={<WordsSolution />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/image-resizer" element={<ImageResizer />} />
          <Route path="/speech-to-text" element={<SpeechToText />} />
          <Route path="/images-to-pdf" element={<ImageToPDF />} />
          <Route path="/remove-bg-from-image" element={<RemoveBgFromImage />} />
          <Route path="/web-builder" element={<WebBuilder />} />
          <Route path="/typing-test" element={<TypingTest />} />
          <Route path="/web-builder/web-contacting-form" element={<WebContacting showAlert={showAlert} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;