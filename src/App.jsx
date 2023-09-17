import { BrowserRouter, Routes, Route } from "react-router-dom";

import Planet from "./planets/Planet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planet/:planetName/:screenName" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
