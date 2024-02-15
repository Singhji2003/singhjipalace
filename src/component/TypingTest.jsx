import React, { useState } from 'react';
import './css/TypingTest.css';

const TypingTest = () => {
    const [clientText, setCleintText] = useState('');
    const [start, setStart] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const defaultText = [
        'The future belongs to those who believe in the beauty of their dreams.',
        `In the end, it's not the years in your life that count. It's the life in your years.`,
        'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        'The only limit to our realization of tomorrow will be our doubts of today.',
        `In the end, it's not the years in your life that count. It's the life in your years.`,
        'Happiness is not something ready made. It comes from your own actions.',
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        'Success is not how high you have climbed, but how you make a positive difference to the world.',
        'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
        'The only way to achieve the impossible is to believe it is possible.'
    ];

    const calculateTypingSpeed = (time_taken) => {
        let totalWords = clientText.trim();
        let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

        if (actualWords !== 0) {
            let typingSpeed = (actualWords / time_taken) * 60;
            typingSpeed = Math.round(typingSpeed);
            let accuracy = ((correctWords / actualWords) * 100).toFixed(2);
            document.getElementById('score-board').innerHTML = `Your typing speed is ${typingSpeed} words per minute. Accuracy: ${accuracy}%`;
        } else {
            document.getElementById('score-board').innerHTML = `Your typing speed is 0 words per minute. Accuracy: 0%`;
        }
    }

    const endTypingTest = () => {
        document.getElementById('test-button').innerText = "Start";
        let date = new Date();
        calculateTypingSpeed((date.getTime() - startTime) / 1000);
        document.getElementById('show-text').innerHTML = "";
        setCleintText('');
    }

    const startTyping = () => {
        let randomNumber = Math.floor(Math.random() * defaultText.length);
        document.getElementById('show-text').innerHTML = defaultText[randomNumber];
        setCorrectWords(0);
        let date = new Date();
        setStartTime(date.getTime());
        document.getElementById('test-button').innerText = "Done";
    }

    const testStatus = () => {
        switch (document.getElementById('test-button').innerText.toLowerCase()) {
            case "start":
                setStart(true);
                startTyping();
                break;

            case "done":
                setStart(false);
                endTypingTest();
                break;
        }
    }

    const handleTyping = (e) => {
        const { value } = e.target;
        const typedWords = value.split(' ');
        const currentWord = typedWords[typedWords.length - 1];
        const currentText = document.getElementById('show-text').innerText;
        const actualWords = currentText.split(' ');
        if (actualWords[typedWords.length - 1] === currentWord) {
            setCorrectWords(typedWords.length);
        }
        setCleintText(value);
    }

    return (
        <>
            <div className='typing-test'>
                <div className="typing-test-heading">
                    <h1>Singh Typing Test</h1>
                </div>
                <div className="given-text" id='show-text'></div>
                <div className="typing-test-area">
                    <textarea
                        name="typable-area"
                        value={clientText}
                        onChange={handleTyping}
                        id="typable-area"
                        cols="80"
                        rows="6"
                        disabled={!start}
                    ></textarea>
                </div>
                <div className="typing-test-btn">
                    <button id='test-button' onClick={testStatus}>Start</button>
                </div>
                <div id="score-board"></div>
            </div>
        </>
    );
}

export default TypingTest;
