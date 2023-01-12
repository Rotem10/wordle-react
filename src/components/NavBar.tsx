import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function NavBar(): JSX.Element {
  const userName = useSelector((state) => state.user.userName);

  return (
    <nav className='navbar navbar-expand-lg navbar-light border-bottom border-2 d-flex justify-content-between'>
      <ul className='navbar-nav links'>
        <li className='nav-item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link '
            }>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/app'
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link '
            }>
            Wordle
          </NavLink>
        </li>
      </ul>
      <ul className='navbar-nav buttons'>
        <li>
          <button
            type='button'
            className='btn btn-light'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdropHelp'
            data-bs-dismiss='modal'>
            Help
          </button>
        </li>
        <li>
          <button
            type='button'
            className='btn btn-light'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdropUser'
            data-bs-dismiss='modal'>
            {userName ? 'Sign Out' : 'Sign In'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
