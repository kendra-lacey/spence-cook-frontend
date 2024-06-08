
// styling:
import './ScrollingBanner.css'


const ScrollingBanner = ({ message, link }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <span>        
            <svg width="2000" height="100">
          <path id="curve" d="M10 60 Q 300 45 600 60 T 1100 60 T 1600 60" fill="transparent" />
          <text>
            <textPath href="#curve" style={textStyle}>
              {message.split(' ').map((word, i) => (
                <tspan key={i} dx={i === 0 ? 0 : 20}>{word}</tspan> // Adjust dx value for spacing
              ))} <a href={link} style={linkStyle}>Learn More</a>
            </textPath>
          </text>
        </svg></span>
          <span>        
            <svg width="2000" height="100">
          <path id="curve" d="M10 60 Q 300 45 600 60 T 1100 60 T 1600 60" fill="transparent" />
          <text>
            <textPath href="#curve" style={textStyle}>
              {message.split(' ').map((word, i) => (
                <tspan key={i} dx={i === 0 ? 0 : 20}>{word}</tspan> // Adjust dx value for spacing
              ))} <a href={link} style={linkStyle}>Learn More</a>
            </textPath>
          </text>
        </svg></span>
        </div>
      </div>
    </div>
  );
};


const textStyle = {
  fontSize: '24px',
  fill: 'black',
  letterSpacing: '2px' 
};

const linkStyle = {
  fill: '#2E9D29',
  textDecoration: 'underline'
};

export default ScrollingBanner;

