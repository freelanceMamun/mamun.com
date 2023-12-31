import React from 'react';
import '../../scss/Footer/footer.scss';
import { Link } from 'react-router-dom';
import { UseContent } from '../../context/Context';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const footer = ({ styleClass }) => {
  const { navToggle, setNavToggle } = UseContent();
  const showNavbar = () => {
    setNavToggle(!navToggle);
  };

  return (
    <>
      <footer className={`Footer-section`} style={styleClass} id="">
        <div className="">
          <div className="row Footer-row">
            <div className="col-lg-2 col-6">
              <div className="contact-footer">
                <h4>Page</h4>
                <ul>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="">Skill</Link>
                  </li>
                  <li>
                    <Link onClick={showNavbar} to={'/blog'}></Link>Blog
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="contact-footer">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link onClick={showNavbar} to={'/about'}>
                      About
                    </Link>
                  </li>
                  <li>Team</li>
                  <li>
                    <Link onClick={showNavbar} to={'/project'}>
                      Porfolio
                    </Link>
                  </li>
                  <li>HIRING</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-footer">
                <h4>Contact</h4>
                <ul className="">
                  <li>Contact us</li>
                  <li>Office Location</li>
                  <li>Alexa@gmail.com</li>
                  <li>mamunkhan16345@gamil.com</li>
                  <li>+8801788303782</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="contact-footer">
                <h4>Contact</h4>
                <p>Get some offers, news, or update features of application</p>
                <div className="EmailBox">
                  <div className="input-group mb-3 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email.."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <Link
                      href="#"
                      className="input-group-text"
                      style={{ textDecoration: 'none' }}
                      id="basic-addon1"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="Social-icon">
                <div className="row">
                  <div className="col-lg-3 col-3">
                    <div className="Socail-media">
                      <div className="Social-box facebook">
                        <Link href="#">
                          <FaTwitter></FaTwitter>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3">
                    <div className="Socail-media">
                      <div className="Social-box facebook">
                        <a href="https://github.com/freelanceMamun">
                          <FaGithub></FaGithub>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3">
                    <div className="Socail-media">
                      <div className="Social-box facebook">
                        <a href="https://www.facebook.com/mamun16345">
                          {/* <i className="fa-brands fa-google"></i> */}
                          <FaFacebook></FaFacebook>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3">
                    <div className="Socail-media">
                      <div className="Social-box facebook">
                        <a href="https://www.linkedin.com/in/muhammad-mamun-5010b3265/">
                          {/* <i className="fa-brands fa-linkedin"></i> */}
                          <FaLinkedin></FaLinkedin>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Copyright-section mt-5">
            <div className="row">
              <p className="col-md-6">Copyright All rights reserved</p>
              <ul className="col-md-6 d-flex justify-content-around">
                <li className="fs-6">Terms of Use</li>
                <li className="fs-6">Privacy Policy</li>
                <li className="fs-6">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
