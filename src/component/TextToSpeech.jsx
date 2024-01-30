import React, { useState, useEffect } from 'react';
import './css/TextToSpeech.css';
import ScrollToTop from './ScrollToTop';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [loadingVoices, setLoadingVoices] = useState(true);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const fetchVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      setLoadingVoices(false);

      // Set the default voice
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = fetchVoices;
    } else {
      fetchVoices();
    }
  }, []);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    synth.speak(utterance);
  };

  const handleVoiceChange = (e) => {
    const selectedVoiceName = e.target.value;
    const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    setSelectedVoice(selectedVoice);
  };

  return (
    <div className="text-to-speech-app-container">
      <ScrollToTop/>
      <h1>Text to Speech</h1>
      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleInputChange}
      />
      <div className="voice-container">
        <label>Select Voice:</label>
        {loadingVoices ? (
          <span>Loading voices...</span>
        ) : (
          <select onChange={handleVoiceChange}>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="button-container">
        <button onClick={handleSpeak} disabled={!text}>
          Speak
        </button>
        <button disabled>Download Speech</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
