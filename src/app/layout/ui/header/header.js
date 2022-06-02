import { Link } from 'react-router-dom';

export default function Header({ onSwitchTheme }) {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="row justify-content-center">
          <div className="col-auto">
            <Link to="/">Home</Link>
          </div>
          <div className="col-auto">
            <Link to="projects">Projects</Link>
          </div>
          <div className="col-auto">
            <Link to="tooling">Tooling</Link>
          </div>
          <div className="col-auto">
            <Link to="programming">Programming Languages</Link>
          </div>
          <div className="col-auto">
            <Link to="languages">Languages</Link>
          </div>
          <div className="col-auto">
            <Link to="certifications">Certifications</Link>
          </div>
          <div className="col-auto">
            <Link to="contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 end-0">
        <button className="m-3" onClick={onSwitchTheme}>
          Theming
        </button>
      </div>
    </>
  );
}
