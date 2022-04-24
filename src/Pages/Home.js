import React from 'react';
// import { useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div id="home_container">
      <h1 id="home_title">MyWallet</h1>
      <input
        type="email"
        id="email_input"
        placeholder="Email"
      />
      <input
        type="password"
        id="password_input"
        placeholder="Senha"
      />
    </div>
  )
}

export default Home;