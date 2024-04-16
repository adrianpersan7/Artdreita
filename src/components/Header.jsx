import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoAndrea.png';
import UserLogo from '../assets/user.png';
import Carrito from '../assets/carrito.png';

const Header = ({ isInicioDeSesion }) => {
  const headerClassName = isInicioDeSesion ? "header header-inicio-sesion" : "header";

  return (
    <header className={headerClassName}>
      {isInicioDeSesion ? null : <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>}
      <div className="flex justify-between items-center p-8 relative z-10">
        <Link to="/">
          <div className="transition-transform duration-700 transform hover:scale-150">
            <img src={Logo} alt="Personaje" className="h-20" />
          </div>
        </Link>
        <h1 className="text-2xl text-white"></h1>
        <div className="flex items-center">
          <img src={Carrito} alt="Carrito" className="h-10 transition-transform duration-700 transform hover:scale-150 mr-2" />
          <Link to="../InicioDeSesion">
            <img src={UserLogo} alt="User" className="h-10 transition-transform duration-700 transform hover:scale-150 mr-2" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;