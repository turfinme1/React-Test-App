import '../styles/header.css';
import Loginbar from './Loginbar';
import Navbar from './Navbar';

export default function Header(props) {
  return (
    <header>
      <Navbar/>
        <div className="site-title">BROSPLIT</div>
      <Loginbar/>
    </header>
  );
}
