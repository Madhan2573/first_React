import React from 'react';
import "./article.css";
const Article = ({blogCover, date, headline}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-cover'>
        <img src={blogCover} alt='blogCover'/>
      </div>

      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h1>{headline}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
