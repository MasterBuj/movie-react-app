import { NavLink } from "react-router-dom"


function NotFoundPAge() {
  return (
    <div style={
      {
        "height": "100vh",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
      }}>

      <h1 style={
        {
          color: '#0099ff',
          fontSize: '10em',
          margin: '0'
        }}>404</h1>

      <h2 style={
        {
          fontSize: '3em',
          margin: '0',
          color: '#959595'
        }}>NOT FOUND</h2>
      <h3>Oops! We can&apos;t find the page you&apos;re looking for</h3>
      <NavLink style={
        {
          padding: '10px',
          fontSize: '2em',
          borderRadius: '15px',
          background: '#0099ff',
          border: 'none',
          cursor: 'pointer',
          margin: '45px',
        }} to="/">Go Back</NavLink>

    </div>
  )
}

export default NotFoundPAge