import { useEffect } from 'react'
import Card from '../components/utils/Card'
import Carrousel from '../components/Carrousel'
import { bannerImages } from '../utils/zapatosImages'

const ZapatosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Carrousel images={bannerImages} />
      <div className='container text-center mt-2 mb-3'>
        <div className='row row-cols-3 row-cols-md-3 g-4'>
          <Card title={`Zapatos`} />
        </div>
      </div>
    </>
  )
}

export default ZapatosPage
