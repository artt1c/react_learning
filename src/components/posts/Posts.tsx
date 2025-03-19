import React, {FC} from 'react';
import {IPost} from "../../models/IPosts";
import Post from "../post/Post";
import './Posts.css'

type IProps = {
  posts: IPost[];
}

const Posts:FC<IProps> = ({posts}) => {
  return (
    <div className="posts">
      <h3 className="posts-title">User Id: <b>{posts[0].userId}</b></h3>
      {
        posts.map(({id, title, body, tags, userId, views, reactions}) => (
          <Post
            key={id}
            id={id}
            title={title}
            body={body}
            tags={tags}
            reactions={reactions}
            views={views}
            userId={userId}
          />)
        )
      }
    </div>
  );
};

export default Posts;