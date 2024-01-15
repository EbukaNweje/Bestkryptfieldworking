import React from 'react'
import "./ScameStyle.css"
import { RiAlertFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Scame = () => {
  return (
    <div className='ScameBody'>
        <div className='ScameWrapper'>
            <RiAlertFill className='Al'/>
            <span className='Top'>The site ahead contains malware</span>
            <p className='Text'>Attackers currenty on <b>bestkryptfield.org</b> might attempt to install  <br />
             dangerous programs on your computer that steal or delete your information
                 (for example, fake payment method, passwords, photos, messages). 
                 <span className='Learn'><Link to="https://support.google.com/chrome/answer/99020?visit_id=638395214883046500-4050229814&p=cpn_safe_browsing&hl=en&rd=1" style={{textDecoration: "none", color:"rgb(221, 221, 221)"}}>Learn more</Link></span> </p>

                 <div className='LastDiv'>
                    <Link to="https://testsafebrowsing.appspot.com/s/phishing.html" style={{textDecoration: "none"}}>
                    <div className='Btn'>Details</div>
                    </Link>
                    <Link to="https://www.google.com/" style={{textDecoration: "none"}}>
                    <div className='Btn2'>Back to safety</div>
                    </Link>
                 </div>
        </div>
    </div>
  )
}

export default Scame