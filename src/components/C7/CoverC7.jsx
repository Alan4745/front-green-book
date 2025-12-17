import React, { useState } from 'react'
import PageSkeleton from '../Global/PageSkeleton';
import LanguageSelector from '../Global/LanguageSelector';
import MainMenu from '../Global/MainMenu';

const CoverC7 = () => {
  const [cerrarCartel, setCerrarCartel] = useState(true);

  return (
    <PageSkeleton
            assets={[
                "/Img/C6/ImgC6.png",
                "/Img/Global/Numbers/06.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#fff"
            graceMs={2000}
            variant="cover"
        >
          <div className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10">
            <video
              autoPlay
              loop
              playsInline
              muted
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }}
            >
              <source src="/Videos/ancafe.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
              </video>
            {cerrarCartel && 
              <div className='bg-[#ffffffcc] h-44 text-black p-10 w-1/2 flex flex-col items-start gap-5 absolute bottom-0 left-0  z-20'>
                <p className=' ' >Anacafé ha posicionado la marca Guatemalan Coffees, para promover el café de nuestro país, el cual es reconocido y valorado por los mercados más exigentes alrededor del mundo.</p>
                <button className='font-bold underline text-gray-500 cursor-pointer'>LEER MAS</button>
                <button className="cursor-pointer absolute top-2 right-2 h-10 w-10 rounded-full bg-white/50 hover:bg-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white grid place-items-center"
                   onClick={() => setCerrarCartel(false)} >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                   >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            }
          </div>
        
          {/* HACERLO FUNCIONAL */}
           <div className="absolute bottom-[5vh] right-6 z-50">
              <LanguageSelector alignment='right' />
           </div>
          <div className="absolute top-[2vh] right-0 z-50">
              <MainMenu />
          </div>
        </PageSkeleton>
  )
}

export default CoverC7