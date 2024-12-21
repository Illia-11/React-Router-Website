import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { ClickerPage } from "./pages/ClickerPage";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="clicker" element={<ClickerPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
