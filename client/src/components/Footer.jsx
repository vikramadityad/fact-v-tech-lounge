import "../styles/Footer.css";
import facebook from "../images/icons/facebookIcon.png";
import twitter from "../images/icons/twitterIcon.png";

const AboutFooter = () => {
  return (
    <footer className="about_footer">
      <h4>GIVE US A CALL FOR TICKETS (506) 666-8324</h4>
      <h4>OR ORDER THROUGH OUR MENU</h4>
      <h5> 789 ReactStreet, DevCity, T3C H7V</h5>
      <p>HOURS</p>
      <div>
        <p>SUN-WED 11am-12am</p>
        <p>THURS-SAT 11am-2am</p>
      </div>
      <div>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
    </footer>
  );
};

export default AboutFooter;
