import bodyImg from "../images/Hero-1.png";
import imageOne from "../images/Hero-3.png";
import imageTwo from "../images/farrah.jpg";
import imageThree from "../images/Hero-2.png";
import imageFour from "../images/ctrl_alt_del.jpg";
import imageFive from "../images/aviad.jpg";
import imageSix from "../images/vikram.jpg";
import imageSeven from "../images/chris.jpg";
import imageEight from "../images/terrence.jpg";
import "../styles/About.css";

const imgArray = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
];

const About = () => {
  return (
    <div>
      <section className="about_header">
        <div>
          <h2>ABOUT US</h2>
        </div>
      </section>
      <section className="about_body">
        <div className="about_all">
          <div className="about_content">
            <img src={bodyImg} alt="image of club" />
            <div className="about_right_content">
              <h3>Welcome to Fact-V-Tech-Lounge.</h3>

              <p>
                Fact-V-Tech Lounge is the embodiment of a vision that unites
                technology and fine dining in one extraordinary space. Our
                mission is to inspire innovation, foster meaningful connections,
                and serve culinary excellence, making it a unique hub for tech
                enthusiasts and gastronomes alike. We offer a gourmet menu
                crafted by expert chefs, a diverse community of tech enthusiasts
                who value both innovation and camaraderie, tech-centric events
                to keep you updated on the latest industry trends, and a modern
                and tech-forward environment designed to stimulate creativity
                and conversation. Experience a place where technology meets
                flavor, and the future unfolds over remarkable dishes and drinks
                at Fact-V-Tech Lounge.
              </p>
            </div>
          </div>
          <div className="about_img_section">
            <div className="about_sm_img">
              {imgArray.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
