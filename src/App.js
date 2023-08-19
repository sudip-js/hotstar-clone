import React from "react";
// import DisneyPlusHotstar from "./components/DisneyPlusHotstar";
import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  return (
    <div className="app bg-background_color text-text_color min-h-screen">
      {/* <DisneyPlusHotstar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
