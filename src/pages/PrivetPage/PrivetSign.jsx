import React, { useState } from 'react';
import '../../scss/contact/contact.scss';
import { UseContent } from '../../context/Context';
import Shape from '../../asset/image/My Shape1.png';
import { MdEmail, MdOutlineSort } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.6,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const style2 = {
  maxWidth: '80%',
  marginLeft: 'auto',
};
const PrivetSign = () => {
  const [email, setEmail] = useState('');
  const [password, setPrssword] = useState('');
  const [error, setError] = useState(null);
  const { navToggle, setNavToggle, signup } = UseContent();

  const navigate = useNavigate();

  const OnSubmitSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password);
      navigate('/login');
    } catch (error) {
      toast.warning(error.message + '🤯', {
        theme: 'dark',
      });
    }
    console.log(error);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      style={style2}
      className="ContactInforamation"
    >
      <motion.span
        variants={item}
        className="navToggleBtn"
        onClick={() => setNavToggle(!navToggle)}
      >
        <MdOutlineSort></MdOutlineSort>
      </motion.span>
      <div className="container">
        <div className="row">
          <div className=" col-xl-6 col-lg-12 col-12 d-flex InfoSide">
            <motion.div variants={item} className="infoContent">
              <h1>
                Let's chat. <br></br> Tell me about your project.
              </h1>
              <p className="text1">🤝 Let's create My account 🤝</p>
              <div className="emai">
                <span className="icons">
                  <MdEmail></MdEmail>
                </span>
                <p>
                  <span>Mail me at</span>
                  <span>mamunkhan@gamil.com</span>
                </p>
              </div>
              <img src={Shape} alt="shape" className="shape"></img>
            </motion.div>
          </div>
          <div className="col-xl-6 col-lg-12 col-12">
            <motion.div variants={item} className="contactForm relative">
              <h3>Sign In🚀</h3>
              <form onSubmit={OnSubmitSignIn} className="form">
                <div className="inputbox mb-4">
                  <input
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email*"
                    required
                  ></input>
                </div>
                <div className="inputbox mb-4">
                  <input
                    type="password"
                    required
                    placeholder="Enter your password*"
                    onChange={(e) => setPrssword(e.target.value)}
                  ></input>
                </div>

                <button type="submit">Sign In</button>
              </form>
              <button
                onClick={() => navigate('/login')}
                className="ms-4 signinBtn"
              >
                Login In
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivetSign;
