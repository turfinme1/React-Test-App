import styles from './LoginBar.module.css';

export default function LoginBar(props){
    return (
      <div className={styles.loginBar}>
        <ul className={styles.buttons}>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a href="#">Become a Member</a>
          </li>
        </ul>
      </div>  
    );
}
