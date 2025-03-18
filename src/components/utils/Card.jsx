import { Link } from 'react-router-dom'

const Card = (props) => {
  const { title, body, link, ruta } = props

  return (
    <div className='card card-home'>
      <div className='card-body'>
        <h2
          className='card-title d-flex justify-content-center tangerine-bold'
          style={{ fontSize: '65px', color: '#165154' }}
        >
          {title}
        </h2>
        <p className='card-text tangerine-regular' style={{ fontSize: '30px' }}>
          {body}
        </p>
        {link && (
          <Link
            to={ruta}
            className='btn btn-outline-primary'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {link}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Card
