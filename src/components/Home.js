import React, { useState, useEffect } from 'react';
import img1 from '../asserts/motionarteffect-img1.png';
import img2 from '../asserts/motionarteffect-img2.png';
import img3 from '../asserts/motionarteffect-img3.png';
import img4 from '../asserts/motionarteffect-img4.png';
import img5 from '../asserts/motionarteffect-img5.png';
import img10 from '../asserts/motionarteffect-img10.png';
import img7 from '../asserts/motionarteffect-img7.png';
import img6 from '../asserts/motionarteffect-img6.png';
import img9 from '../asserts/motionarteffect-img9.png';
import img8 from '../asserts/motionarteffect-img8.png';
import motionart from '../asserts/MotionArtEffect-logo.png';
import img11 from '../asserts/motionarteffect-img11.png';

const Home = () => {
  const [cursorStyle, setCursorStyle] = useState({
    left:0,
    top: 0,
    backgroundColor: '#000'
  });

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleMouseMove = (e) => {
    setCursorStyle({
      left: e.clientX,
      top: e.clientY,
      backgroundColor: getRandomColor()
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='motionart'>
        <img src={motionart} alt="Motion Art Effect Logo" />
        <button>Purchase Now</button>
      </div>
      <div className='website'>
        <div className='transform'>Transform</div>
        <span>Your Website</span>
      </div>
      <div className='intro'>
        <div className='trans'>With Motion</div>
        <span>Art Effect</span>
      </div>
      <div className='heading-cls'>
        <h1>Attract Your Visitors Attention With Colorful
          <span>Motion Art Effect</span>
        </h1>
      </div>
      <div className='head_desc'>
        <p>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.&nbsp;</p>
      </div>
      <div className='trust'>
        <p>Trusted by thousands of users around the world</p>
      </div>
      <div className='stars'>
        <div className='first_start'>
          <img src={img2} alt="Star 1" />
          <div className='star_img'>
            <img src={img4} alt="Star Rating" />
            <p>4.5 Score, 9 Reviews</p>
          </div>
        </div>
        <div className='first_start'>
          <img src={img1} alt="Star 2" />
          <div className='star_img'>
            <img src={img4} alt="Star Rating" />
            <p>4.5 Score, 9 Reviews</p>
          </div>
        </div>
        <div className='first_start'>
          <img src={img3} alt="Star 3" />
          <div className='star_img'>
            <img src={img4} alt="Star Rating" />
            <p>4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>
      <div className='magic'>
        <div className='charm'>
          <h2>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
          <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
          <button className='btn'>
            Purchase From Envato <span> &rarr; </span>
          </button>
        </div>
        <div className='magicstick'>
          <img src={img5} alt='magicstick' />
        </div>
      </div>
      <div className='section'>
        <h2>Apply On Any Section Or Enable For Whole Page</h2>
      </div>
      <div className='cardcontainer'>
        <div className='cards'>
          <div className='innercard'>
            <h2>Apply On Section</h2>
            <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
            <div className='innerImgCard'>
              <img src={img11} alt='sectionImg' />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='innercard'>
            <h2>Apply On Page</h2>
            <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
            <div className='innerImgCard'>
              <img src={img10} alt='sectionImg' />
            </div>
          </div>
        </div>
      </div>
      <div className='browsers'>
        <h2>Supported by All Popular Browsers</h2>
        <div className='para'>
          <p>Rest assured, Motion Art is designed to be compatible with all major web browsers</p>
        </div>
        <div className='image'>
          <img src={img8} alt='referenceImg' />
        </div>
      </div>
      <div className='plugin'>
        <h2>An All-Round Plugin With Powerful Features</h2>
      </div>
      <div className='plugpara'>
        <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
      </div>
      <div className='flex_box'>
        <div className='flex_container'>
          <div className='symbol'>
            <div className='symbolImg'>
              <img src={img9} alt='Light_weight' />
            </div>
            <h2>Light Weight</h2>
            <p>Motion Art for Elementor is designed to be lightweight.</p>
          </div>
        </div>
        <div className='flex_container'>
          <div className='symbol'>
            <div className='symbolImg'>
              <img src={img6} alt='Light_weight' />
            </div>
            <h2>100% Responsive</h2>
            <p>Create a consistent visual experience across all devices.</p>
          </div>
        </div>
        <div className='flex_container'>
          <div className='symbol'>
            <div className='symbolImg'>
              <img src={img7} alt='Light_weight' />
            </div>
            <h2>User Friendly Interface</h2>
            <p>Ensure a smooth experience for both applicants and administrators.</p>
          </div>
        </div>
      </div>
      <footer>
        <div className='footer'>
          <div className='copy'>
            <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
            <div>
              <a href='https://qodematrix.com/docs/motion-art-for-elementor/'><button>Documentation </button></a>
              <a href='https://support.qodematrix.com/login'><button>Support </button></a>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="cursor-effect"
        style={{
          left: cursorStyle.left,
          top: cursorStyle.top,
          backgroundColor: cursorStyle.backgroundColor,
        }}
      />
      <style jsx>{`
        .cursor-effect {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: background-color 0.1s ease, left 0.05s ease, top 0.05s ease;
        }
      `}</style>
    </>
  );
};

export default Home;
