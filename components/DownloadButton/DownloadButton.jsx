import "./DownloadButton.css"
import React from 'react'

function DownloadButton({source, children}) {
  
  return (
    <div className="app-download-button-container">
      <div className="app-download-button-icon-container">
        {children}
      </div>
      <div className="app-download-button-details-container">
        <h4>Download on the</h4>
        <h3>{source}</h3>
      </div>
    </div>
  )
}

export default DownloadButton