import React from 'react';
import {useForm} from "react-hook-form";

type FormProps = {
  username: string;
  password: string;
  age: number;
}

const FormComponent = () => {

  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isValid,

    },
  } = useForm<FormProps>({mode:'all'});


  const customHandler = (dataFromForms: FormProps) => {
    console.log(dataFromForms);
    console.log(errors);
    console.log(isValid);
  };
  return (
    <form onSubmit={handleSubmit(customHandler)}>
      <label>
        <input type="text" placeholder={'username'} {...register('username', {
          required:{value: true, message: 'usernames is required'},
        })}/>
        {errors.username && <div>{errors.username.message}</div>}
      </label>
      <label>
        <input type="text" placeholder={'password'} {...register('password', {
          minLength: {value: 3, message: 'too short'},
          maxLength: {value: 6, message: 'too long'},
        })}/>
        {errors.password && <div>{errors.password.message}</div>}
      </label>
      <label>
        <input type="number" placeholder={'age'} {...register('age', {
          min: {value:1, message:'min value is 1'},
          max: {value:118, message:'max value is 180'}
        })}/>
        {errors.age && <div>{errors.age.message}</div>}
      </label>
      <button disabled={!isValid}>save</button>
    </form>
  );
};

export default FormComponent;