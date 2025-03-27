import { useEffect, useState } from 'react'
import Card from '../components/utils/Card'
import Carrousel from '../components/Carrousel'
import { bannerImages, estiloImages } from '../utils/zapatosImages'
import Loader from '../components/Loader'
import ModalInfo from '../components/modal/ModalInfo'
import ModalEstilosInfo from '../components/modal/ModalEstilosInfo'

const ZapatosPage = ({ isMobile }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [modalMoreInfo, setModalMoreInfo] = useState(false)
  const [tipoEstilo, setTipoEstilo] = useState()

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
                    setModalMoreInfo={setModalMoreInfo}
                    estiloId={estilo.id}
                    setTipoEstilo={setTipoEstilo}
                  />
                ))}
            </div>
          </div>
        </>
      )}

      <ModalInfo
        isOpen={modalMoreInfo}
        setModalMoreInfo={setModalMoreInfo}
        desktopWidth={'595px'}
        desktopHeight={'450px'}
        tabletHeight={'375px'}
        mobileHeight={'350px'}
        closeButton={true}
      >
        <ModalEstilosInfo
          setModalIsOpen={setModalMoreInfo}
          tipoEstilo={tipoEstilo}
          isMobile={isMobile}
        />
      </ModalInfo>
    </>
  )
}

export default ZapatosPage
