import React from 'react'

require("../componentcss/homePage.css")
const Home = () => {

  return (
    <>
      <div className="container-home">
        <div className="home">
          <div className="home-heading">
            <h2>Welcome</h2>
          </div>
          <div className="home-paragraph">
            <h1>We Are The Mern Developer</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home