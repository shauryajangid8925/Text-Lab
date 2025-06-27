export default function About(props) {

  let myStyle = {
    color : props.mode==='dark'?'white':'black',
    backgroundColor : props.mode==='dark'?'purple':'white'
  }

  return (
    <div className="container" style={myStyle}> 
      <h1 className="my-3">📖 About Text Lab</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>📌 Purpose</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Text Lab is a simple yet powerful tool designed to help you clean, transform, and analyze your text quickly and efficiently. 🧠✍️
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>⚙️ Key Features</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              - 🔠 Convert text to Uppercase or lowercase.<br />
              - 🧹 Remove extra spaces and clean messy text.<br />
              - 📊 Count words and characters in real time.<br />
              - 📋 Copy text with one click.<br />
              - ❌ Clear text area instantly.<br />
              - ⏱️ Tells you how long it will take to read the text.<br />
              - 🌓 Toggle between dark and light mode as per your preference.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>💡 Usage</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Whether you're a 🧑‍🎓 student polishing an assignment, a 🧑‍💻 developer cleaning docs, or a ✍️ blogger formatting content — this app brings flexibility and precision to your fingertips.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong>🚀 Concepts Used</strong> 
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Built using ⚛️ React.js, the app is fast, responsive, and optimized for both desktop and mobile devices.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
