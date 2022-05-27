import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { Projects } from '../components/projects/projects';
import { Tooling } from '../components/tooling/tooling';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects" element={<Projects />} />
          <Route path="tooling" element={<Tooling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
