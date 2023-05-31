import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                YegnaGebeya
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home    
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            My Cart    
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to="/Men's" className='nav-links' onClick={closeMobileMenu}>
                            Men's    
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to="/Women's" className='nav-links' onClick={closeMobileMenu}>
                            Women's    
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/Phones & Laptops' className='nav-links' onClick={closeMobileMenu}>
                            Phones & Laptops    
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/Home Appliances' className='nav-links' onClick={closeMobileMenu}>
                            Home Appliances    
                        </Link> 
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Return Home</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar