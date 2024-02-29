import { LinksDat } from './LinkDat'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {

    const User = false;

  return (
    <header>
        <div className="line__1">
            <div className="logo">
                <a href='#'>V</a>
            </div>
            <div className="User">
                {User? (<Link to='/profile'>Osip M</Link>) : (<Link className='auth-btn' to="/auth">Авторизация</Link>)}
                
            </div>
        </div>
        <div className="line__2">
            <nav>
                {LinksDat.map((item) => (
                    <Link key={item.path} to={item.path}>{item.title}</Link>
                ))}
            </nav>
        </div>
    </header>
  )
}

export default Header
