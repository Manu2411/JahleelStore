import { useEffect, useState } from 'react'
import Card from '../components/utils/Card'
import Carrousel from '../components/Carrousel'
import { bannerImages, estiloImages } from '../utils/zapatillasImages'
import Loader from '../components/Loader'

const ZapatillasPage = ({ isMobile }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Retrasando el seteo de la variable setIsLoading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Carrousel images={bannerImages} />
          <div className='container text-center mt-2 mb-3'>
            <div className='row row-cols-3 row-cols-md-3 g-4'>
              {estiloImages &&
                estiloImages.map((estilo, index) => (
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
      )}
    </>
  )
}

export default ZapatillasPage
