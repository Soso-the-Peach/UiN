import { NavLink } from 'react-router-dom'

export default function Navi() {
  // Stiling ved aktiv navigasjon
  const linkStyle = ({ isActive }) => ({
    borderBottom: isActive ? '5px solid #b679f7' : '0px solid #e50914',
  })

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
