import React from 'react'

const Section1C7 = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover  z-10 flex justify-center items-center' style={{ backgroundImage: "url('/Img/C7/fondo_celeste.jpeg')" }}>
       <div className='w-1/2 flex flex-col items-center p-10 gap-5 text-center
       '>
          <img src='/Img/C7/animal_morado.png' alt='Animal Morado'></img>
          <img src="/public/Img/C7/guatemalan_cofees.png" alt="guatemalan_cofees" />
          <p className='text-amber-50 text-xl pt-5' >Engloba ocho regiones productoras con identidades diferenciadas, ligadas a su territorio. Conocer las bases de cada región es clave para comprender la diversidad de los cafés de Guatemala.</p>
       </div>
    </div>
  )
}

export default Section1C7