import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const userName = useSelector(({ userInfo: { user } }) => user.userName);
  
  return (
    <div>
      <h3>{`Olá, ${ userName }!`}</h3>
      <h3>Total: 0 BRL</h3>
    </div>
  )
}

export default Header;