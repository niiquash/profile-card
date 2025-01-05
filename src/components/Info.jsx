import Email from "../assets/email-icon.svg";
import LinkedIn from "../assets/linkedin-icon.svg";
import Photo from "../assets/latoya-stone-portrait.jpg";

const Info = () => {
  return (
    <main className="info">
      <img src={Photo} alt="Latoya Stone" className="info--photo" />
      <h1 className="info--name">Latoya Stone</h1>
      <h2 className="info--position">Frontend Developer</h2>
      <a
        href="https://linkedin.com/in/ammon-quarshie"
        className="info--website"
      >
        <p className="info--website__text">latoyastone.website</p>
      </a>

      <div className="info--connect">
        <a href="mailto:aquarsh66@gmail.com" className="info--connect__email">
          <img src={Email} alt="Email" className="info--connect__email__icon" />
          <span>Email</span>
        </a>
        <a
          href="https://linkedin.com/in/ammon-quarshie"
          className="info--connect__linkedin"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="info--connect__linkedin__icon"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </main>
  );
};

export default Info;
