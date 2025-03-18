import { routes } from '../../utils/routes'
import Card from '../utils/Card'

const Home = () => {
  return (
    <div className='d-flex justify-content-center' style={{ marginTop: '200px' }}>
      <Card
        title={`Jahleel's Store`}
        body='Bienvenido a Jahleel, su tienda en línea especializada en tacones, plataformas, zapatos y sandalias. Descubra nuestra exclusiva colección diseñada junto con calzado Danna para realzar su estilo con elegancia y comodidad'
        link='Ver Catálogos'
        ruta={routes.frontend.plataformas}
        isImage={true}
      />
    </div>
  )
}

export default Home
