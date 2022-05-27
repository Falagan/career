import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('../layout/layout'));
const Projects = lazy(() => import('../components/projects/projects'));
const Tooling = lazy(() => import('../components/tooling/tooling'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="projects" element={<Projects />} />
            <Route path="tooling" element={<Tooling />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
