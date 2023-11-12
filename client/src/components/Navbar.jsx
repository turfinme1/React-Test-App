import styles from './NavBar.module.css'

export default function NavBar(props){
    return (
      <div className={styles.navBar}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Cattegories</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}