import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPostForm} from "../../models/IPostForm";
import styles from './PostForm.module.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../validators/post.validator";
import {apiService} from "../../services/api.service";
import {AxiosResponse} from "axios";

const PostForm = () => {

  const [response, setResponse] = useState<AxiosResponse<IPostForm>>();

  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isValid
    }
  } = useForm<IPostForm>({mode: 'all', resolver: joiResolver(postValidator)});

  const customHandler = (dataFromForms: IPostForm) => {
    apiService.post.createNewPost(dataFromForms)
      .then(value => setResponse(value));
  };
  return (
    <form className={styles.PostForm} onSubmit={handleSubmit(customHandler)}>

      <label><h2 className={styles.FormTitle}>Create New Post</h2></label>

      <div className={styles.PostInputs}>
        <label>
          <input type="text" placeholder={'Title'} {...register('title')}/>
          {errors.title && <span>{errors.title.message}</span>}
        </label>
      </div>

      <div className={styles.PostInputs}>
        <label>
          <textarea placeholder={'Post content'} {...register('body')}/>
          {errors.body && <span>{errors.body.message}</span>}
        </label>
      </div>

      <div className={`${styles.PostInputs} ${styles.IdInput}`}>
        <label>
          <input type="text" placeholder={'Your id'} {...register('userId')}/>
          {errors.userId && <span>{errors.userId.message}</span>}
          {response && <span>{response.status}</span>}
          <button disabled={!isValid}>Submit</button>
        </label>
      </div>
    </form>
  );
};

export default PostForm;