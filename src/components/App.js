import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App(){
   const {name, image, about, posts } = blogData;

   return (
    <div className='App'>
      <Header name={name} />
      <section>
      </section>
      <About image={image} about={about} />
      <section>
      </section>
      <ArticleList posts={posts} />
    </div>
   );

}

export default App;