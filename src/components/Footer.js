import "./FooterStyles.css"

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="top">
                <div className="trippy">
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div className="footer-logo">

                    <a href="/">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
             <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
                </div>

                <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
                </div>

                <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
                <a href="/">Versions</a>
                </div>

                <div>
                <h4>Others</h4>
                <a href="/">License</a>
                <a href="/">Terms Of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Visiions</a>
                </div>   



            </div>


            





        </div>
      
    </div>
  )
}

export default Footer;
