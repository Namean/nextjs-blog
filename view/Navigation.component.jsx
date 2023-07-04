
import navStyles from '../styles/Navigation.module.css'
import Link from 'next/link';
const Navigation = () => {
    return (
      <nav className={navStyles.mainNav}>
        <ul className={navStyles.navList}>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>About</li>
          <li className=''>Contact</li>
          <li><Link href='/posts/page.housing'>housing</Link></li>
        </ul>
      </nav>
    )
  }

export default Navigation;