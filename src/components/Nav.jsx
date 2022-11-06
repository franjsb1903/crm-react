import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ children, to }) => {
  const { pathname } = useLocation()

  return (
    <Link
      className={`${
        pathname === to ? 'text-blue-300' : 'text-white'
      } text-2xl block mt-2 hover:text-blue-300`}
      to={to}
    >
      {children}
    </Link>
  )
}

const Nav = () => (
  <nav className="mt-10">
    <NavLink to="/">Clientes</NavLink>
    <NavLink to="/clients/new">Nuevo cliente</NavLink>
  </nav>
)

export default Nav
