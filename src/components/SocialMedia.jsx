import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://github.com/hamidbeyli005' target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href='https://www.facebook.com/profile.php?id=100009228789570' target="_blank" rel="noreferrer">
      <FaFacebookF />
    </a>
    <a href='https://www.instagram.com/hamid.beyli/' target="_blank" rel="noreferrer">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;