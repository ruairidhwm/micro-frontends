import React, { lazy, Suspense } from "react";

const WidgetApp = lazy(() => import("./components/WidgetApp"));

const App = () => {
  return (
    <div>
      <h1>This is the container component</h1>
      <hr />
      <Suspense fallback="Loading Widget App">
        <WidgetApp />
      </Suspense>
    </div>
  );
};

export { App };
