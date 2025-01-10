import { Link } from "@tanstack/react-router";
import Counter from "../components/Counter";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <Link to="/about">Go to About Page</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}); 