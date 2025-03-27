import { useEffect } from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'

const ModalInfo = ({ isOpen, ...props }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Style
  const borderAndShadow = {
    borderRadius: '20px',
    borderWidth: '0px',
  }

  const modalStyleDesktop = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      zIndex: 1000,
    },
    content: {
      width: '800px',
      maxHeight: '950px',
      height: props.desktopHeight ?? '550px',
      margin: 'auto',
      ...borderAndShadow,
    },
  }

  const modalStyleTablet = {
    overlay: {
      backgroundColor: 'rgba(61, 30, 30, 0)',
      zIndex: 1000,
    },
    content: {
      width: '650px',
      maxHeight: '750px',
      height: '420px',
      margin: 'auto',
      ...borderAndShadow,
      WebkitOverflowScrolling: 'touch',
    },
  }

  const modalStyleMobile = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      zIndex: 1000,
    },
    content: {
      width: '310px',
      maxHeight: '375px',
      margin: 'auto',
      ...borderAndShadow,
    },
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        style={
          windowWidth > 1024
            ? modalStyleDesktop
            : windowWidth > 765
            ? modalStyleTablet
            : modalStyleMobile
        }
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        preventScroll={true}
      >
        {props.children ? (
          <div className='d-flex justify-content-center align-items-center'>
            {props.children}
          </div>
        ) : (
          <>
            <h1>No children</h1>
          </>
        )}
      </ReactModal>
    </>
  )
}

export default ModalInfo
