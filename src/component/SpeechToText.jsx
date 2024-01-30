import React, { useState } from 'react'
import './css/SpeechToText.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ScrollToTop from './ScrollToTop';
const SpeechToText = () => {
    const [isCopied, setCopied] = useState(false);
    const [listening, setListening] = useState(false);
    const startListening = () => {
        setListening(true)
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })

    };
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }
    const handleCopyToClipboard = () => {
        // setTextToCopy(transcript);
        setCopied(true)
            var clipboardItem = new ClipboardItem({ "text/plain": new Blob([transcript], { type: "text/plain" }) });
            navigator.clipboard.write([clipboardItem])
            setTimeout(() => {
                setCopied(false)
            }, 2000);
    };
    return (
        <>

            <div className="speech-to-text">
                <ScrollToTop />
                <h1>Speech to Text Converter</h1>
                <br />
                <p>Here you have to just speeck after the click on Start Listening. It automatically type the content you will say...</p>
                <div className="emoji-speech-to-text">
                    {listening ? <img src={require('../Image/listening.gif')} /> : <img src={require('../Image/done.gif')} />}
                </div>
                <div className="speech-to-text-main-content">
                    {transcript}
                </div>

                <div className="speech-to-text-btn-style">

                    <button onClick={handleCopyToClipboard} disabled={!transcript?true:false}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening} disabled={listening?true:false} >Start Listening</button>
                    <button onClick={() => {
                        setListening(false)
                        SpeechRecognition.stopListening()
                    }} disabled={listening?false:true} >Stop Listening</button>
                    <button onClick={resetTranscript} disabled={!transcript?true:false}>Clear Transcript</button>

                </div>

            </div>
        </>

    )
}

export default SpeechToText