import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext()

   const displaySubmenu=(e)=>{
    const page=e.target.textContent;
    const tempBtn=e.target.getBoundingClientRect();
    const center=(tempBtn.left+tempBtn.right)/2
    const bottom=tempBtn.bottom
        openSubmenu(page,{center,bottom})
    }

    const closeSubmenuHandle=(e)=>{
        if(!e.target.classList.contains('link-btn') ){
            closeSubmenu()
        }
    }
  return (
    <nav className='navbar' onMouseOver={closeSubmenuHandle}>
      <div className="nav-center">
        <div className="nav-header">
            <img className='nav-logo' src={logo} alt="logo" />
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars/>
            </button>
        </div>
        <ul className="nav-links">
          <li  onMouseOver={displaySubmenu} >
            <button className='link-btn btn'>products</button>
          </li>
          <li onMouseOver={displaySubmenu}>
            <button className='link-btn btn'  >developers</button>
          </li>
          <li onMouseOver={displaySubmenu}>
            <button className='link-btn btn'  >company</button>
          </li>
        </ul>
        <button className='btn sign-in'>
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar