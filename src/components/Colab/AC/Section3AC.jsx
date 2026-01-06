import ancafeUno from '../../../../public/Img/C7/anacefe_uno.png'
import ancafeDos from '../../../../public/Img/C7/anacefe_dos.png'
import ancafeTres from '../../../../public/Img/C7/anacafe_tres.png'
import ancafeCuatro from '../../../../public/Img/C7/anacafe_cuatro.png'

import tazza from '../../../../public/Img/C7/tazza.png'
import tostaduria from '../../../../public/Img/C7/tostaduria.png'
import laboratorio from '../../../../public/Img/C7/laboratorio.png'
import funcafe from '../../../../public/Img/C7/funcafe.png'

const Block = ({ bg, logo, text, img, imageRatio = "1/2" }) => {
  const imgWidth =
    imageRatio === "40" ? "md:w-[40%]" : "md:w-1/2";
  const textWidth =
    imageRatio === "40" ? "md:w-[60%]" : "md:w-1/2";

  return (
    <div className="w-full min-h-[380px] flex flex-col md:flex-row mb-6">
      <div
        className={`${textWidth} w-full flex flex-col justify-center px-10 py-12 text-white ${bg}`}
      >
        <div className=' md:pl-50 '>
           <img src={logo} alt="" className="w-56 mb-6" />
            <p className="text-base md:text-lg leading-relaxed max-w-md">
             {text}
            </p>
        </div>
      </div>

      <div className={`${imgWidth} w-full`}>
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}


const Section3AC = () => {
  return (
    <section className="w-full">
      <Block
        bg="bg-[#4B61A8]"
        logo={tazza}
        img={ancafeUno}
        text="En nuestra academia de café, compartimos conocimientos de barismo, tueste y catación."
      />

      <Block
        bg="bg-[#B08A5A]"
        logo={tostaduria}
        img={ancafeDos}
        imageRatio="40"
        text="Monitoreamos cuidadosamente el sabor y aroma del café en cada proceso. A través de nuestra Tostaduría, ofrecemos un servicio integral desde la trilla hasta el empaque."
      />

      <Block
        bg="bg-[#6A6A6A]"
        logo={laboratorio}
        img={ancafeTres}
        text="Garantizamos la calidad de cada taza en nuestro laboratorio de Catación."
      />

      <Block
        bg="bg-[#5B2D83]"
        logo={funcafe}
        img={ancafeCuatro}
        imageRatio="40"
        text="A través de Funcafé, contribuimos al desarrollo social con servicios enfocados en salud, educación y seguridad alimentaria."
      />
    </section>
  )
}

export default Section3AC
