import { Link, useLocation } from 'react-router-dom'

const Card = (props) => {
  const location = useLocation()
  const {
    title,
    body,
    link,
    ruta,
    isImage,
    imagen,
    isMobile,
    setModalMoreInfo,
    estiloId,
    setTipoEstilo,
  } = props

  const style = {
    width: location.pathname !== '/webpruebas' && !isMobile ? '275px' : '',
  }

  return (
    <div className='card card-home' style={style}>
      <div className='card-body'>
        <h2
          className='card-title d-flex justify-content-center tangerine-bold'
          style={{ fontSize: '65px', color: '#165154' }}
        >
          {title}
        </h2>
        <p className='card-text tangerine-regular' style={{ fontSize: '30px' }}>
          {isImage ? body : <img src={imagen} style={{ height: '225px' }} />}
        </p>
        {link && (
          <>
            {ruta ? (
              <Link
                to={ruta}
                className='btn btn-outline-primary'
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {link}
              </Link>
            ) : (
              <button
                className='btn btn-outline-primary'
                onClick={() => {
                  setModalMoreInfo(true)
                  setTipoEstilo(estiloId)
                }}
              >
                {link}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Card
