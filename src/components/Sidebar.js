import {useGlobalContext} from '../context'
import sublinks from '../data'
import {FaTimes} from 'react-icons/fa'

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar,closeSubmenu}=useGlobalContext()

  return (
    <aside className={`sidebar-wraper ${isSidebarOpen?'show-sidebar':''}`} onMouseOver={closeSubmenu}>
        <div className="sidebar">
          <button onClick={closeSidebar} className='close-sidebar-btn'>
            <FaTimes/>
          </button>
          <div className="sidebar-links">
            {sublinks.map((item,index)=>{
                const {links,page}=item;
                return <article key={index}>
                  <h4 className='sublink-pages'>{page}</h4>
                  <article className="sidebar-sublinks">
                    {links.map((link,index)=>{
                      const{label,icon,url}=link;
                      return<a  key={index} href={url}>
                      
                        {icon}{label}
                      
                      </a>
                    })}
                  </article>
                </article>
            })}
          </div>
        </div>
    </aside>
  )
}

export default Sidebar