import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import User from "../user/User";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Pagination, Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import './Users.css'

type UsersProps = {
  users: IUser[];
};

const Users:FC<UsersProps> = ({users}) => {

  return (
    <div className="users-list">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
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
              <User user={user}/>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default Users;