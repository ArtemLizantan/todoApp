import Header from "./components/header/Header";
import TodoPage from "./pages/TodoPage/TodoPage";
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
