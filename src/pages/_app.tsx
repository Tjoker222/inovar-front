import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import DefaultLayout from "../components/Layouts/DefaultLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
