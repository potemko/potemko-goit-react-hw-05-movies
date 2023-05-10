import { NavLink, Outlet } from 'react-router-dom'
import css from './Style.module.css'

export const Layout = () => {
    return (
      <div>
        <header>
          <div className={css.container}>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink className={css.link} to="/">
                  Home
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink className={css.link} to="/movies">
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <main>
            <Outlet />
        </main>
      </div>
    );
}