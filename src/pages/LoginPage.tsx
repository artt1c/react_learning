import React from 'react';
import {apiServices} from "../services/api.services";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/userValidator";

type FormProps = {
  username: string;
  password: string;
}

const LoginPage = () => {

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<FormProps>({mode: 'all', resolver:joiResolver(userValidator)});

  const customHandler = (dataFromForm:FormProps) => {
    apiServices.user.login({...dataFromForm, expiresInMins: 1}).then();
    reset();
  }

  // useEffect(() => {
  //   apiServices.user.login({
  //     username: 'emilys',
  //     password: 'emilyspass',
  //     expiresInMins: 1
  //   }).then(user => {
  //     console.log('Welcome ' + user.username + '!');
  //   })
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(customHandler)}>
        <div>
          <label>
            Username<br/>
            <input type="text" placeholder={'username'} {...register('username')}/>
          </label>
            {errors.username && errors.username.message}
        </div>
        <div>
          <label>
            Password<br/>
            <input type="text" placeholder={'password'} {...register('password')}/>
          </label>
            {errors.password && errors.password.message}
        </div>
        <button type='submit' disabled={!isValid} >Login</button>
      </form>
      <button onClick={() => {localStorage.removeItem('user')}}>Logout</button>
    </div>
  );
};

export default LoginPage;