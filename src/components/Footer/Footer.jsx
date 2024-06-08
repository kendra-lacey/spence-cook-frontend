
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
      </div>
      <div id='footer-socials'>
        <h2>Social Media</h2>
        <div id='socialsLink-container'>
          <a className='socials-a' href="https://www.facebook.com/profile.php?id=100089221360368">
            <img className='socialsLink' src="./facebookImg.svg" alt="" />
          </a>
          <a className='socials-a' href="https://www.instagram.com/spencecook_sings/">
            <img className='socialsLink' src="./instagramImg.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;