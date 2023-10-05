import './HeroStyles.css';


const Hero = () => {
  return (
    <>
    <div className="hero">
    <img className="back-img" src="12.jpg" alt="backimg"/>
      
    </div>

    <div className="hero-text">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination</p>
         <button className='hero-btn'>Travel Plan</button>
    </div>

    </>
  )
}

export default Hero;
