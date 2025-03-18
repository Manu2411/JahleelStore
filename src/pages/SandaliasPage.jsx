import Carrousel from '../components/Carrousel'
import Card from '../components/utils/Card'

const SandaliasPage = () => {
  return (
    <>
      <Carrousel />
      <div className='container text-center'>
        <div className='row row-cols-2'>
          <Card title={`Sandalias`} />
        </div>
      </div>
    </>
  )
}

export default SandaliasPage
