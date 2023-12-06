import styles from './Home.module.css'

export default function Home(props){
    return (
      <div className={styles.frontPageArticleArea}>
        <article className={styles.mainArticle}>
          <button>Hot</button>
          <h2>8 Best Excercises</h2>
          <p>Long time readers watch this</p>
          <p>Oct 29,2023 - by Michel Pfilberg</p>
          <button>Read more</button>
        </article>
      </div>
    );
}