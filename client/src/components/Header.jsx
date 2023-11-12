import styles from './Header.module.css'
import LoginBar from './LoginBar';
import NavBar from './NavBar';
import SiteTitle from './SiteTitle';


export default function Header(props) {
  return (
    <header className={styles.header}>
      <NavBar/>
      <SiteTitle/>
      <LoginBar/>
    </header>
  );
}
