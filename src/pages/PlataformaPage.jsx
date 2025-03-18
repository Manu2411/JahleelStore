import Carrousel from '../components/Carrousel'
import Card from '../components/utils/Card'

const CatalogoPage = () => {
  return (
    <>
      <Carrousel />
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
