import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemesConfig } from '../../assets/themes/themes.config';

export default function Layout() {
  const [theme, setTheme] = useState(ThemesConfig.themes.Light);

  function switchTheme() {
    theme === ThemesConfig.themes.Light ? setTheme(ThemesConfig.themes.Dark) : setTheme(ThemesConfig.themes.Light);
    document.getElementById('layout').className = theme;
  }

  return (
    <div id="layout" className={ThemesConfig.default}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12">
            <button onClick={switchTheme}>Theme</button>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
