import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>HomePage</div>
      <Link to="/users">To User page</Link>
      <button onClick={() => alert('clicked!')}>click me</button>
    </div>
  )
}

export default Home;