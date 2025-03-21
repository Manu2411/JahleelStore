import { useEffect, useRef, useState } from 'react'

const Carrousel = ({ images }) => {
  const [entrada, setEntrada] = useState(true)
  const nextButtonRef = useRef(null)

  useEffect(() => {
    if (entrada && nextButtonRef.current) {
      nextButtonRef.current.click() // Simula el clic en el botón
      setEntrada(false) // Para evitar que se vuelva a ejecutar
    }
  }, [entrada])

  return (
    <>
      <div
        className='d-flex justify-content-center'
        style={{ backgroundColor: '#212529', borderRadius: '10px' }}
      >
        <div
          id='carouselExampleAutoplaying'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            {images &&
              images.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img src={img.src} className='d-block w-100' alt={img.alt} />
                </div>
              ))}
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleAutoplaying'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            ref={nextButtonRef}
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleAutoplaying'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Carrousel
