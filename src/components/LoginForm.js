import React from 'react';
import {useState, useRef} from 'react';
import { createUser } from '../services/firebaseMethods';
import classes from './LoginForm.module.css';

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    setEmail(enteredEmail);
    setPassword(enteredPassword);

    createUser(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.inputContainer}>
        <label htmlFor="email">Correo: </label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="password" id="password">Contraseña: </label>
        <input type="password" name="pass" id="pass" ref={passwordInputRef}/>
      </div>
      <button>Registrarse</button>
    </form>
  );
};

export default LoginForm;