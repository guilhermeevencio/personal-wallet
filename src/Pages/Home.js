import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userInfo';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isButtonDisabled, setIsDisabled] = useState(true);

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({userName, userPassword}));
    history('/wallet');
  }

  const handleChange = ({ target }) => {
    switch (target.id) {
      case 'user_input':
        setUserName(target.value);
        break;
      case 'password_input':
        (target.value.length > 5) ? setIsDisabled(false) : setIsDisabled(true)
        setUserPassword(target.value);
        break;
    
      default:
        break;
    }
  }

  return (
    <div id="home_container">
      <h1 id="home_title">MyWallet</h1>
      <form>
        <input
          type="text"
          id="user_input"
          placeholder="Usuário"
          onChange={ handleChange }
        />
        <input
          type="password"
          id="password_input"
          placeholder="Senha"
          onChange={ handleChange }
        />

        <button
          type="submit"
          onClick={ handleSubmit }
          disabled={ isButtonDisabled }
        >
          Entrar
        </button>
      </form>

    </div>
  )
}

export default Home;