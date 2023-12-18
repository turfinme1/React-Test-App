import { Link } from "react-router-dom";

import styles from "./ProfileBar.module.css";

export default function ProfileBar (){
    return (
        <div className={styles.profileBar}>
          <Link className={styles.logout} to="/logout">Logout</Link>
        </div>
      );
}