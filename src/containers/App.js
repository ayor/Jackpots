import React, { Suspense } from 'react';
import Spinner from '../components/Spinner/Spinner';
const Layout = React.lazy(() => import('./Layout')); // Lazy-loaded

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Layout />
    </Suspense>
  );
}

export default App;
