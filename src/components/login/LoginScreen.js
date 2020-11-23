import React from 'react'

export const LoginScreen = ({ history }) => {

  // history is a prop from react-router-dom , also location and match.
  const handleLogin = () => {
    console.log('logged!');
    // Hay una diferencia entre el push y el replace, replace reemplaza la historia del navegador 
    // history.push('/');
    history.replace('/');
  } 

  return (
    <div className="container mb-5">
      <h1>Login Screen</h1>
      <hr/>

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Log in
      </button>
    </div>
  )
}
  