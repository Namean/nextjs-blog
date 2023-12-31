
import navStyles from '../styles/Navigation.module.css'
import Link from 'next/link';
const Navigation = () => {
    return (
      <nav className={navStyles.mainNav}>
        <ul className={navStyles.navList}>
          <li className='nav-item'><Link href='/'>Home</Link></li>
          <li className='nav-item'>About</li>
          <li><Link href='/posts/job'>job</Link></li>
          <li><Link href='/posts/page.housing'>housing</Link></li>
          <li><Link href='/posts/courses'>courses</Link></li>
        </ul>
      </nav>
    )
  }

export default Navigation;