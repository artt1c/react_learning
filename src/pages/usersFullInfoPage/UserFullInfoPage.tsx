import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser";
import Post from "../../components/post/Post";
import styles from './UserFullPage.module.css'
import {useStore} from "../../Store";

const UserFullInfoPage = () => {

  const {state: {data}} = useLocation();

  const [user, setUser] = useState<IUser | null>(null);

  const {postSlice: {singleUserPosts, loadSingleUserPosts}} = useStore();

  useEffect(() => {
    if (data) {
      setUser(data);
      loadSingleUserPosts(data.id)
    }
  }, [data,])

  return (
    <div className={styles.user}>
      <h3>{user?.id} - {user?.name}</h3>
      <div>{user?.username}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
      <div>{user?.phone}</div>
      <hr/>
      <p>Address</p>
      <div>{user?.address.street} - {user?.address.suite} - {user?.address.city} - {user?.address.zipcode}</div>
      <div>GEO: {user?.address.geo.lat}, {user?.address.geo.lng}</div>
      <hr/>
      <p>Company</p>
      <div>{user?.company.name}</div>
      <div>{user?.company.catchPhrase}</div>
      <div>{user?.company.bs}</div>
      <hr/>
      <h3>USER POSTS</h3>
      <ul className={styles.postList}>
        {singleUserPosts.map(post => (<Post post={post} key={post.id}/>))}
      </ul>
    </div>
  );
};

export default UserFullInfoPage;