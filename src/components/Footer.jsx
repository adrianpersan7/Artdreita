import React from 'react';
import Logo from '../assets/logoAndrea.png';
import InstagramLogo from '../assets/instagram.png';
import TikTokLogo from '../assets/tiktok.png';

const Footer = () => {
  return (
    <footer className="footer bg-gray-500 bg-opacity-40 text-white py-4 px-8 flex justify-between">
      <div className="flex flex-col">
        <div className="flex">
          <img src={InstagramLogo} alt="Instagram" className="h-6 mr-4 transition-transform duration-700 transform hover:scale-150" />
          <img src={TikTokLogo} alt="TikTok" className="h-6 transition-transform duration-700 transform hover:scale-150" />
        </div>
        <div className="mt-2">
          <p>artdreita@gmail.com</p>
          <p>+34 999 999 999</p>
          <p>C. de la Providència, 10, local1, Gracia, 08024 Barcelona, España</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-16 transition-transform duration-700 transform hover:scale-150" />
      </div>
    </footer>
  );
}

export default Footer;