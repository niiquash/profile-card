import Twitter from "../assets/twitter-icon.svg";
import Facebook from "../assets/facebook-icon.svg";
import Instagram from "../assets/instagram-icon.svg";
import Github from "../assets/github-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer--links" href="#">
        <img src={Twitter} alt="twitter icon" />
      </a>
      <a className="footer--links" href="#">
        <img src={Facebook} alt="facebook icon" />
      </a>
      <a className="footer--links" href="#">
        <img src={Instagram} alt="instagram icon" />
      </a>
      <a className="footer--links" href="#">
        <img src={Github} alt="github icon" />
      </a>
    </footer>
  );
};

export default Footer;
