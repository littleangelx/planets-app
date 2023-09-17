import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Planet from "./planets/Planet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/planet/earth/overview" replace={true} />}
        >
          <Route
            path="/planet/:planetName/:screenName"
            index
            element={<Planet />}
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
