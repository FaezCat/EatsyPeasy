import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    
    <div className="footer">
      <div>Contact Us: </div>
      <p>Faez: </p>
      <a href="https://github.com/FaezCat"><FontAwesomeIcon icon={faGithub} /></a> 
      {/* change to actual linkedin */}
      <a href="https://github.com/FaezCat"><FontAwesomeIcon icon={faLinkedin} /></a>
      <p>|</p>
      <p>Cynthia: </p>
      <a href="https://github.com/cynthiaaleung"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/cynthiaaleung"><FontAwesomeIcon icon={faLinkedin} /></a>
      <p>|</p>
      <p>Claudia: </p>
      <a href="https://github.com/fltfx"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/claudia-wong-858a2588/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>

  );
}