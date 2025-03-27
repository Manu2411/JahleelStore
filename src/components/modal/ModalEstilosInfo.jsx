import { IconCircleFilled } from '@tabler/icons-react'

const ModalEstilosInfo = ({ setModalIsOpen, isMobile }) => {
  const infoTitleModalStyleDesk = {
    content: {
      fontSize: '55px',
      color: '#165154',
      marginBottom: '0rem',
    },
  }

  const infoTitleModalStylePho = {
    content: {
      fontSize: '40px',
      color: '#165154',
      marginBottom: '0rem',
    },
  }

  const infoDescModalStyleDesk = {
    content: {
      fontSize: '32px',
      color: '#165154',
    },
  }

  const infoDescModalStylePho = {
    content: {
      fontSize: '27px',
      color: '#165154',
    },
  }

  return (
    <>
      <div
        className='d-flex flex-column align-items-center col-12 position-relative'
        style={{ minHeight: isMobile ? '65vh' : '60vh' }}
      >
        <h2
          className='tangerine-bold'
          style={
            isMobile ? infoTitleModalStylePho.content : infoTitleModalStyleDesk.content
          }
        >
          Información del estilo
        </h2>
        <span
          className='tangerine-regular'
          style={
            isMobile ? infoDescModalStylePho.content : infoDescModalStyleDesk.content
          }
        >
          A continuación, encontrará la información a detalle del estilo seleccinado sobre
          tallas y colores disponibles.
        </span>

        <div className='d-flex flex-direction-row col-12 gap-3 mt-3'>
          <div className='d-flex gap-1 col-12'>
            <table className='table table-bordered border border-dark-subtle'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Talla</th>
                  <th scope='col'>Colores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>3</th>
                  <td>@twitter</td>
                  <IconCircleFilled stroke={2} color='#019df4' size={40} />
                  <td></td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className='d-flex flex-direction-row justify-content-end col-12 gap-3'
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
        >
          <div className={`d-flex gap-2 ${isMobile ? '' : 'col-6'}`}>
            <button
              className='btn btn-dark mt-4 flex-grow-1'
              onClick={() => setModalIsOpen(false)}
            >
              Cancelar
            </button>
            <button className='btn btn-primary mt-4 flex-grow-1'>Asignar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalEstilosInfo
