import React from 'react';
import {useForm} from "react-hook-form";

type FormProps = {
  username: string;
  password: string;
  age: number;
}

const FormComponent = () => {

  const {handleSubmit, register} = useForm<FormProps>();


  const customHandler = (dataFromForms: FormProps) => {
    console.log(dataFromForms);
  };
  return (
    <form onSubmit={handleSubmit(customHandler)}>
      <input type="text" placeholder={'username'} {...register('username')}/>
      <input type="text" placeholder={'password'} {...register('password')}/>
      <input type="number" placeholder={'age'} {...register('age')}/>
      <button>save</button>
    </form>
  );
};

export default FormComponent;