import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">📖 {props.abouttext}</Link>
            </li>
          </ul>

          {/* 🌗 Emoji-only toggle switch with equal spacing */}
          <div className={`d-flex align-items-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <span className="mx-2" style={{ fontSize: '1.4rem' }}>☀️</span>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
            </div>
            <span className="" style={{ fontSize: '1.4rem' }}>🌙</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Title Here',
  abouttext: 'About TextUtils Here'
}
