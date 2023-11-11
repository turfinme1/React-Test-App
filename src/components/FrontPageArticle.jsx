import '../styles/front-page-article.css';

export default function FrontPageArticle(props){
    return (
      <div className="main-article-area">
        <article className='main-article'>
          <button>Hot</button>
          <h2>8 Best Excercises</h2>
          <p>Long time readers watch this</p>
          <p>Oct 29,2023 - by Michel Pfilberg</p>
          <button>Read more</button>
        </article>
      </div>
    );
}