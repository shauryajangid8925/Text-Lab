import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text converted to uppercase! 🔠", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Text converted to lowercase! 🔡", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert(" Text cleared! 🧹", "success");
  };

  const handleCopy = () => {
    var textElement = document.getElementById("MyBox");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Text copied to clipboard! 📋", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed! 🚫", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // New function to toggle speak/stop
  const handleSpeakToggle = () => {
    if (!isSpeaking) {
      if (text.trim().length === 0) {
        props.showAlert("Please enter some text to read", "warning");
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        setIsSpeaking(false); // Reset button state when speech ends
      };
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className={`form-control ${props.mode === 'dark' ? 'dark-placeholder' : ''}`}
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'brown' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="MyBox"
            rows="8"
            placeholder="Enter Text Here"
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          🔠 Convert to uppercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          🔡 Convert to lowercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          🚫 Remove extra spaces
        </button>

        {/* Speak / Stop Button */}
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSpeakToggle}>
          {isSpeaking ? '⏹️ Stop' : '🔊 Read aloud'}
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          📋 Copy to clipboard
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          🧹 Clear
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>📊 Text Summary</h2>
        <p>Total words = {text.split(/\s+/).filter((element) => element.length !== 0).length}</p>
        <p>Total characters = {text.length}</p>
        <p>Estimated Reading Time = {0.008 * text.split(" ").filter((e) => e.length !== 0).length} Minutes 🕒</p>

        <h2>🔍 Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
