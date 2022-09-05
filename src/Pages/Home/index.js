import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/userInfo';

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
    <div
      id="home_container"
      className="m-8 p-8 bg-neutral-100 rounded-xl h-4/5 md:w-3/6 mx-auto drop-shadow-xl flex flex-col justify-center items-center"
    >
      <h1 id="home_title" className="text-5xl font-black text-cyan-700 mb-16">My Wallet</h1>
      <form className="w-4/6 flex flex-col">
        <input
          type="text"
          id="user_input"
          placeholder="Usuário"
          onChange={ handleChange }
          className="my-4 w-full rounded-md p-2 border-none drop-shadow-md text-center"
        />
        <input
          className="my-4 w-full rounded-md p-2 border-none drop-shadow-md text-center"
          type="password"
          id="password_input"
          placeholder="Senha"
          onChange={ handleChange }
        />

        <button
          className="disabled:opacity-75 disabled:cursor-not-allowed rounded-md p-2 mt-16 drop-shadow-lg text-center w-36 mx-auto bg-cyan-700 text-slate-50 text-xl font-semibold"
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