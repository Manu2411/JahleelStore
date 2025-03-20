import { useEffect, useState } from 'react'
import Carrousel from '../components/Carrousel'
import Card from '../components/utils/Card'
import { bannerImages, estiloImages } from '../utils/plataformaImages'

const CatalogoPage = ({ isMobile }) => {
  useEffect(() => {
    window.scrollTo(0, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Carrousel images={bannerImages} />
      <div className='container text-center mt-2 mb-3'>
        <div className='row row-cols-3 row-cols-md-3 g-4'>
          {estiloImages.map((estilo, index) => (
            <Card
              key={index}
              title={`Estilo ${index + 1}`}
              imagen={estilo.src}
              isMobile={isMobile}
              link='Más información'
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default CatalogoPage
