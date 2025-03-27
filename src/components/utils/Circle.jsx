const Circle = ({ color, isMobile }) => {
  const styleCircle = {
    width: isMobile ? '15px' : '20px',
    height: isMobile ? '15px' : '20px',
    backgroundColor: color,
    borderRadius: '50%',
  }

  return <div style={styleCircle}></div>
}

export default Circle
