
// styling:
import './Footer.css'


const Footer = () => {
  return ( 
    <div id='footer'>
      <div id='footer-contact'>
        <h2>Contact</h2>
        <p>
          <a href="mailto:SPENCE@SPENCESINGS.com">SPENCE@SPENCESINGS.com</a>
        </p>
        {/* <p>
          <a href="tel:+10001112222"> +1 (000) 111-2222 </a>
        </p> */}
      </div>
      <div id='footer-socials'>
        <h2>Social Media</h2>
      </div>
    </div>
  );
}

export default Footer;