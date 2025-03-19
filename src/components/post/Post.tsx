import React, {FC} from 'react';
import {IPost} from "../../models/IPosts";
import './Post.css'

const Post:FC<IPost> = (post) => {
  return (
    <div className='post'>
      <div className="post__header">
        <div className="header-id">{post.id}</div>
        <div className="header-title">{post.title}</div>
      </div>
      <div className="post__main-body">
        <div className="main-body-body">{post.body}</div>
        <div className="main-body-tags">{post.tags.map(tag => <span>#{tag} </span>)}</div>
      </div>
      <div className="post__footer">
        <div className="footer-reactions">
          <div>{post.reactions.likes}</div>
          <div>{post.reactions.dislikes}</div>
        </div>
        <div className="footer-views">{post.views}</div>
      </div>
    </div>
  );
};

export default Post;