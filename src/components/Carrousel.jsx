import Banner from '../assets/img/sandalias/Banners/Banner.jpg'
import Banner1 from '../assets/img/sandalias/Banners/Banner1.jpg'

const Carrousel = () => {
  const images = [
    { src: Banner, alt: 'Sandalia 1' },
    { src: Banner1, alt: 'Sandalia 2' },
    // { src: Banner, alt: 'Sandalia 3' },
  ]

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
            {images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={img.src} className='d-block w-100' alt={img.alt} />
              </div>
            ))}
            {/* <div className='carousel-item active'>
              <img src={Sand} className='d-block' alt='Sandalia 1' />
            </div>
            <div className='carousel-item'>
              <img src={Sand1} className='d-block' alt='Sandalia 2' />
            </div>
            <div className='carousel-item'>
              <img src={Sand2} className='d-block' alt='Sandalia 3' />
            </div> */}
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
