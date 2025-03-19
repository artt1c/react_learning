import React, {FC, useEffect, useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Pagination, Navigation, Mousewheel, FreeMode } from 'swiper/modules';

import './Users.css'

import {getAllUsers} from "../../services/api.servise";
import {IUser} from "../../models/IUsers";
import User from "../user/User";


type IUsersProps = {
  userPosts: (user:IUser) => void
};

const Users:FC<IUsersProps> = ({userPosts}) => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getAllUsers()
      .then(json => setUsers(json));
  }, []);


  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      mousewheel={true}
      freeMode={true}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[FreeMode, Pagination, Navigation, Mousewheel]}
      className="userSwiper"
    >
      {
        users.map(user =>
          <SwiperSlide key={user.id} className="userSwiperSlide">
            <User user={user} userPosts={userPosts}/>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default Users;