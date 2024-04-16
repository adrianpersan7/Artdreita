import React from 'react';
import FotoSobreAndrea from '../../assets/fondoSobreMi.png';

const GaleriaTatuajes = () => {
  // Obtener las dimensiones de la imagen
  const imagen = new Image();
  imagen.src = FotoSobreAndrea;
  const imagenWidth = imagen.width;
  const imagenHeight = imagen.height;

  return (
    <section className="bg-gray-600" style={{ width: imagenWidth, height: imagenHeight }}>
    tattoos
    </section>
  );
}

export default GaleriaTatuajes;