import { Link, useNavigate } from "react-router-dom"
import { links } from "../constants"
import {Logo} from '../assets'

const Navbar = () => {

  const navigate = useNavigate()


  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4 border-bottom">
        <div className="col-md-3  mb-md-0">
          <Link to='/'>
            <img src={Logo} alt="Logo" width={'120px'} height={'90px'}/>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto  justify-content-center mb-md-0">
          {links.map(link => (
            <Link to={`${link.link}`} className="nav-link text-dark">{link.linkname}</Link>
          ))}
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2" onClick={() => navigate(`/login`)}>Login</button>
          <button type="button" className="btn btn-primary" onClick={() => navigate(`/register`)}>Register</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar