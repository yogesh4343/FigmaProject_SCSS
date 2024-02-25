import React from 'react'

const Footer = () => {
  return (
    <div className="footerCover">
    <div className="mainFooter">

      <div className="leftFooter">
        <div className="leftFooterHeading">Categories</div>
        <p className="footerPoints">Web Builder</p>
        <p className="footerPoints">Hosting</p>
        <p className="footerPoints">Data Center</p>
        <p className="footerPoints">Robotic-Automation</p>
      </div>

      <div className="middleFooter">
      <div className="leftFooterHeading">Contact</div>
      <p className="footerPoints">Contact</p>
      <p className="footerPoints">Privacy Policy</p>
      <p className="footerPoints">Terms Of Service</p>
      <p className="footerPoints">Categories</p>
      <p className="footerPoints">About</p>
      </div>
      
        <div className="rightFooter">
            <select >
                <option value="">United State</option>
            </select>
        </div>
    </div>
    </div>
  )
}

export default Footer
