import React from 'react';
import SobreMiHome from './SobreMiHome';
import GaleriaTatuajes from './GaleriaTatuajes';
import GaleriaIlustraciones from './GaleriaIlustraciones';
import MapaEstudio from './MapaEstudio';

const Home = () => {
  return (
    <div>
      <SobreMiHome />
      <GaleriaTatuajes />
      <GaleriaIlustraciones />
      <MapaEstudio />
    </div>
  );
}

export default Home;