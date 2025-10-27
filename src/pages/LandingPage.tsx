import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { PiMedal } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import FirtsRunnerUp from "../assets/1stRunnerUp.svg";
import SecondRunnerUp from "../assets/2ndRunnerUp.svg";
import Anchor from "../assets/anchor.svg";
import AppStore from "../assets/AppStore.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import Logo from "../assets/pitchiton.svg";
import Tamilnadu from "../assets/tamilnadu.svg";
import TitleWinner from "../assets/TitleWinner.svg";
import VijayIcon from "../assets/vijayIcon.svg";
import WhyParticipate1 from "../assets/WhyParticipate1.svg";
import WhyParticipate2 from "../assets/WhyParticipate2.svg";
import WhyParticipate3 from "../assets/WhyParticipate3.svg";
import WhyParticipate4 from "../assets/WhyParticipate4.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ============== Section 1 ==================== */}
      <div className="section1">
        <div className="container">
          <div className="row">
            <img
              src={VijayIcon}
              alt="Vijay Icon"
              className="img-fluid vijay-icon"
            />
            <div className="col-12 col-lg-6 section-1-left">
              <img
                src={Logo}
                alt="PitchItOn Logo"
                className="pitchiton-logo img-fluid"
                data-aos="flip-down"
              />
              <p className="search-text" data-aos="fade-up-right">
                இது விஞ்ஞானிகளுக்கான ஒரு தேடல்
              </p>
              <button
                className="apply-btn"
                data-aos="fade-up-right"
                onClick={() => navigate('/application-form')}
              >
                Apply Now <FaArrowRight />
              </button>
              <p className="download-link">
                <RxDownload /> Download Application
              </p>
            </div>
            <div className="col-lg-6 anchor-section">
              <img
                src={Anchor}
                data-aos="zoom-in"
                className="img-fluid anchor-image"
                alt="anchor-img"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* ============== Section 2 ==================== */}
        <div className="section text-center">
          <h1 className="text-center fw-bold" data-aos="zoom-in">
            Watch Our Innovation <br /> Hunt Journey
          </h1>
          <div className="row mt-5 mb-5">
            <div className="col-md-6 mb-3" data-aos="fade-up-right">
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8Bzo32odAhs?si=tQnVr5_DxOPvQnHK"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 mb-3" data-aos="fade-up-right">
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/v54qY_4CBTA"
                  title="உங்கள் கண்டுபிடிப்புகளுக்கு உயிர் கொடுங்கள், நீங்களும் ஆகலாம் கலாம்."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <button
            className="apply-btn"
            data-aos="fade-right"
            onClick={() =>
              window.open(
                "https://www.youtube.com/shorts/XcE_LCRl0BM",
                "_blank"
              )
            }
          >
            See Innovations Unfold on YouTube <FaArrowRight />
          </button>
        </div>
        {/* ============== Section 3 ==================== */}
        <div className="section">
          <div className="row mt-5 mb-5">
            <div
              className="col-md-6 mb-3 d-flex flex-column justify-content-center"
              data-aos="fade-up-right"
            >
              <h1 className="fw-bold mb-3">
                The Innovation Hunt Across Tamilnadu
              </h1>
              <p className="invotation-desc">
                Pitch It On is a groundbreaking innovation movement traveling
                across Tamil Nadu - from cities to villages - to discover the
                most extraordinary inventions. Whether you’re a village tinkerer
                or a city engineer, this is your chance to showcase breakthrough
                ideas.
              </p>
              <button
                className="apply-btn download-form-btn"
                onClick={() => navigate('/application-form')}
              >
                Download Application Form <RxDownload />
              </button>
            </div>
            <div className="col-md-6 mb-3 text-center" data-aos="fade-up-right">
              <img src={Tamilnadu} alt="Tamilnadu" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* ============== Section 4 ==================== */}
        <div className="section text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-3 " data-aos="fade-up-right">
              <img
                src={FirtsRunnerUp}
                alt="1st Runner Up"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6" data-aos="zoom-in">
              <img src={TitleWinner} alt="Title Winner" className="img-fluid" />
            </div>

            <div className="col-12 col-md-3" data-aos="fade-up-right">
              <img
                src={SecondRunnerUp}
                alt="2nd Runner Up"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* ============== Section 5 ==================== */}
        <div className="section  text-center">
          <h1 className="fw-bold mb-5" data-aos="zoom-in">
            Our Sponsors
          </h1>
          <div
            className="d-flex flex-row justify-content-center flex-wrap w-100"
            data-aos="zoom-in"
          >
            <div className="sponsor"></div>
            <div className="sponsor"></div>
            <div className="sponsor"></div>
            <div className="sponsor"></div>
            <div className="sponsor"></div>
            <div className="sponsor"></div>
          </div>
          <button
            className="apply-btn mt-5"
            data-aos="zoom-in"
            onClick={() => (window.location.href = "tel:+919840194790")}
          >
            Become a Sponsor <PiMedal />
          </button>
        </div>
        {/* ============== Section 6 ==================== */}
        {/* <div className="section">
          <div className="dropbox-container w-100">
            <div className="row">
              <div
                className="col-12 col-md-6 m-auto p-5"
                data-aos="fade-up-right"
              >
                <h1 className="fw-bold mb-3">Dropbox Locations</h1>
                <p className="invotation-desc">
                  Got a big idea? Share it now! <br /> Submit through our
                  Dropbox across Tamil Nadu and watch your talent take center
                  stage on TV. 🌟🔥
                </p>
                <button className="apply-btn download-form-btn">
                  View Dropbox Locations <RxDownload />
                </button>
              </div>
              <div
                className="col-12 col-md-6 text-center p-5"
                data-aos="fade-up-right"
              >
                <img src={DropBox} alt="2nd Runner Up" className="img-fluid" />
              </div>
            </div>
          </div>
        </div> */}
        {/* ============== Section 7 ==================== */}
        <div className="section">
          <h1 className="fw-bold mb-5 text-center" data-aos="zoom-in">
            Why Participate?
          </h1>
          <div className="row" data-aos="zoom-in">
            <div className="col-6 col-md-3">
              <img
                src={WhyParticipate1}
                alt="Why Participate 1"
                className="img-fluid"
              />
              <h2 className="fw-bold mt-3 mb-3">
                Untapped innovation from villages & towns
              </h2>
              <p className="fs-5">
                Across India's heartland lies a wealth of creative, practical
                ideas waiting to be discovered. This Innovation Hunt brings
                those hidden gems into the spotlight.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src={WhyParticipate2}
                alt="Why Participate 2"
                className="img-fluid"
              />
              <h2 className="fw-bold mt-3 mb-3">
                Support for inventors lacking exposure
              </h2>
              <p className="fs-5">
                Across India's heartland lies a wealth of creative, practical
                ideas waiting to be discovered. This Innovation Hunt brings
                those hidden gems into the spotlight.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src={WhyParticipate3}
                alt="Why Participate 3"
                className="img-fluid"
              />
              <h2 className="fw-bold mt-3 mb-3">
                Access to a nationwide commercialization
              </h2>
              <p className="fs-5">
                Across India's heartland lies a wealth of creative, practical
                ideas waiting to be discovered. This Innovation Hunt brings
                those hidden gems into the spotlight.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src={WhyParticipate4}
                alt="Why Participate 4"
                className="img-fluid"
              />
              <h2 className="fw-bold mt-3 mb-3">
                Potential to impact India’s innovation market
              </h2>
              <p className="fs-5">
                Across India's heartland lies a wealth of creative, practical
                ideas waiting to be discovered. This Innovation Hunt brings
                those hidden gems into the spotlight.
              </p>
            </div>
          </div>
        </div>
        <div className="section row contact-details-container">
          <div className="col-12 col-lg-6 text-center p-2">
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid logo-img"
              data-aos="flip-down"
            />
            <p className="search-text" data-aos="zoom-in">
              இது விஞ்ஞானிகளுக்கான ஒரு தேடல்
            </p>
            <h1 className="fw-bold text-yellow" data-aos="zoom-in">
              Participate Today
            </h1>
            <h1 className="fw-bold mb-1" data-aos="zoom-in">
              +91 9842045601
            </h1>
            <h1 className="fw-bold" data-aos="zoom-in">
              +91 9840194790
            </h1>
          </div>
        </div>
      </div>
      {/* ============== Footer ==================== */}
      <div className="footer ">
        <div className="container">
          <div className="row p-5">
            <div className="col-12 col-md-3 text-center">
              <img
                src={Logo}
                alt="Tamilnadu"
                className="img-fluid"
                width="70%"
                data-aos="flip-down"
              />
            </div>
            <div className="col-12 col-md-6 text-center m-auto">
              <button
                className="apply-btn download-form-btn mb-3"
                data-aos="zoom-in"
                onClick={() => navigate('/application-form')}
              >
                Download Application <RxDownload />
              </button>
              <button
                className="apply-btn mb-3"
                data-aos="zoom-in"
                onClick={() => (window.location.href = "tel:+919840194790")}
              >
                Become a Sponsor <PiMedal />
              </button>
              <div className="d-flex justify-content-center" data-aos="zoom-in">
                <img src={AppStore} alt="App Store" className="img-fluid" />
                <img src={GooglePlay} alt="Google Play" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-3 mt-auto" data-aos="flip-down">
              <p className="m-0 fw-bold">Contact</p>
              <p>
                16, MMTC Colony
                <br />
                2nd Main Road, Nanganallur
                <br />
                Chennai, Tamilnadu. India
              </p>
              <div className="social-media-icons">
                <a
                  href="https://www.facebook.com/pitchiton/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/pitchiton/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon" />
                </a>
                <a
                  href="https://x.com/pitchiton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pitchiton/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between pt-3 pb-3">
            <div className="d-flex">
              <p className="fw-bold">Non-Disclosure Agreement</p>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p className="fw-bold">Privacy Policy</p>
            </div>
            <div className="d-flex">
              <p>
                Designed by <b>PixcelTree</b>
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p>© Copyright Pitch it On. 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
