import React from 'react';
import FotoSobreAndrea from '../../assets/fondoSobreMi.png';

const SobreMiHome = () => {
  return (
    <section className='flex bg-gray-600'>
      <img src={FotoSobreAndrea} className="flex-1 h-auto object-cover" alt="Foto sobre Andrea" />
      <div className="flex absolute right-20 top-1/2">
        <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 rounded-3xl">Sobre Mi</button>
      </div>
    </section>
  );
}

export default SobreMiHome;