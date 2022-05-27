import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
