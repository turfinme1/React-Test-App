import { Link } from 'react-router-dom';
import styles from './SiteTitle.module.css'

export default function SiteTitle () {
    return (<Link className={styles.siteTitle} to="/">BRO SPLIT</Link>);
}