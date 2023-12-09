import { Route, Routes } from "react-router-dom";

import HeaderMenu from "./components/header/HeaderMenu";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import ExerciseGuides from "./components/exercise-guides/ExerciseGuides";
import About from "./components/about/About";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";
import AuthContext from "./contexts/authContext";
import Login from "./components/login/Login";

import "./App.css";

function App() {
  return (
    <AuthContext.Provider value={{}}>
      <HeaderMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/exercise-guides" element={<ExerciseGuides />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
