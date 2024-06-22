import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Feel the new taste" />
      <h1 className="app__header-h1">It's not just Dining, It's an Experience</h1>
      <p className="p__opensans" style={{ margin: '2rem 0',color:"",fontSize:"16px",fontStyle:"" }}>Savor the Taste, Indulge in the Experience: Welcome to Culinary Delights! A taste of Refreshment</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;