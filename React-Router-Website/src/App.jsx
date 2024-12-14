import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { ClickerPage } from "./pages/ClickerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="clicker" element={<ClickerPage />} />
    </Routes>
  );
}

export default App;
