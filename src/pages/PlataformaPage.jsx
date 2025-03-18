import Carrousel from '../components/Carrousel'
import Card from '../components/utils/Card'
import Banner from '../assets/img/sandalias/Banners/Banner.jpg'
import Banner1 from '../assets/img/sandalias/Banners/Banner1.jpg'
import Banner2 from '../assets/img/sandalias/Banners/Banner2.jpg'

const CatalogoPage = () => {
  const bannerImages = [
    { src: Banner, alt: 'Sandalia 1' },
    { src: Banner1, alt: 'Sandalia 2' },
    { src: Banner2, alt: 'Sandalia 3' },
  ]

  return (
    <>
      <Carrousel images={bannerImages} />
      <div className='container text-center'>
        <div className='row row-cols-2'>
          <Card title={`Plataforma`} />
          <Card title={`Plataforma`} />
          <Card title={`Plataforma`} />
          <Card title={`Plataforma`} />
        </div>
      </div>
    </>
  )
}

export default CatalogoPage
