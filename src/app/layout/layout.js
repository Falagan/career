import i18next from 'i18next';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemesConfig } from '../../assets/themes/themes.config';
import './layout.css';
import Header from './ui/header/header';

export default function Layout() {
  const [theme, setTheme] = useState(ThemesConfig.themes.Light);

  function switchTheme() {
    theme === ThemesConfig.themes.Light ? setTheme(ThemesConfig.themes.Dark) : setTheme(ThemesConfig.themes.Light);
  }

  function switchLang(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div id="layout" className={theme}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12">
            <Header onSwitchTheme={switchTheme} onSwitchLang={switchLang} />
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
