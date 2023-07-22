import React from 'react';
import "./blog.css";
import { Article } from '../../components';
import {blog1, blog2, blog3, blog4, blog5} from './imports.js';
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-title'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article blogCover={blog1} date='Sep 26, 2021' headline='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>

        <div className='gpt3__blog-container_groupB'>
          <Article blogCover={blog2} date='Sep 26, 2021' headline='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article blogCover={blog3} date='Sep 26, 2021' headline='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article blogCover={blog4} date='Sep 26, 2021' headline='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article blogCover={blog5} date='Sep 26, 2021' headline='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        
      </div>
    </div>
  )
}

export default Blog
