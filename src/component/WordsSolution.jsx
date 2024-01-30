import React, { useState } from 'react'
import './css/WordsSolution.css'
import ScroolToTop from './ScrollToTop'
const WordsSolution = () => {
    const [words, setWords] = useState('');
    const onChange = (e) => {
        setWords(e.target.value)
    }

    //To clear the textarea
    const clearBox = () => {
        setWords('')
    }

    //To copy the all text
    const copyText = () => {
        var clipboardItem = new ClipboardItem({ "text/plain": new Blob([words], { type: "text/plain" }) });
        navigator.clipboard.write([clipboardItem])
    }

    // Convert to all upper case
    const convertToUpperCase = () => {
        const newWord = words.toUpperCase();
        setWords(newWord);
    }

    // Convert to All lower case
    const convertToLowerCase = () => {
        const newWord = words.toLowerCase();
        setWords(newWord);
    }

    const removeExtraSpaces = () => {
        const newWord = words.replace(/\s+/g, ' ');
        setWords(newWord)
    }
    const convertToTitleCase = () => {
        function toTitleCase(sentence) {
            return sentence.replace(/\b\w/g, function (match) {
                return match.toUpperCase();
            });
        }
        const newWord = toTitleCase(words);
        setWords(newWord)
    }

    const format = () => {
        const sentences = words.split('.');

        // Capitalize the first letter of each sentence
        const formattedSentences = sentences.map((sentence) => {
            const trimmedSentence = sentence.trim();
            return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
        });

        // Join the sentences back together with periods and spaces
        const formattedParagraph = formattedSentences.join('. ');
        setWords(formattedParagraph)
    }
    return (
        <>
            <ScroolToTop />
            <div className="words-solution">
                <div className="words-solution-heading">
                    <h1>Words Solution</h1>
                </div>
                <div className="word-soltion-content">
                    <div className="text-area-for-words">
                        <textarea name="words" id="words" cols="80" rows="10" placeholder='Enter your Text Here...' value={words} onChange={onChange}></textarea>
                        <div className="text-area-options">
                            <button onClick={copyText}><i className="fa-solid fa-copy"></i>Copy</button>
                            <button onClick={clearBox}><i className="fa-solid fa-xmark"></i>Clear</button>
                            <p>Words Count: {words.length>0?(words.match(/\b\w+\b/g).length):0} Char Counts: {words.length}</p>
                        </div>
                    </div>
                    <div className="options-for-text">
                        <button onClick={convertToUpperCase}>Convert to UpperCase</button>
                        <button onClick={convertToLowerCase}>Convert to LowerCase</button>
                        <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                        <button onClick={format}>Format</button>
                        <button onClick={convertToTitleCase}>Convert to title Case</button>
                    </div>
                </div>
                <div className="preview-section">
                    <h1>Preview</h1>
                    <p>{words}</p>
                </div>
            </div>
        </>
    )
}

export default WordsSolution