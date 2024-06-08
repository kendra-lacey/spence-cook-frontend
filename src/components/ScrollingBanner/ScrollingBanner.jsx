
import './ScrollingBanner.css'



const ScrollingBanner = ({ message, link }) => {
  return (
    <div style={containerStyle}>
      <div style={marqueeStyle}>
        <p>
          {message} <a href={link} style={linkStyle}>Learn More</a>
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  backgroundColor: '#ffcc00',
  color: 'black',
  padding: '10px 0',
  position: 'fixed',
  width: '100%',
  top: '0',
  zIndex: '1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const marqueeStyle = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'marquee 15s linear infinite'
};

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline'
};

export default ScrollingBanner;
