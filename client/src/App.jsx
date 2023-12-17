import { Route, Routes } from "react-router-dom";

import HeaderMenu from "./components/header/HeaderMenu";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Article from "./components/article/Article";
import ExerciseGuides from "./components/exercise-guides/ExerciseGuides";
import About from "./components/about/About";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Footer from "./components/footer/Footer";

import "./App.css";
import AddCommentForm from "./components/article/add-comment-form/AddCommentForm";

function App() {
  return (
    <>
      <HeaderMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:articleId" element={<Article />} />
        <Route path="/exercise-guides" element={<ExerciseGuides />} />

        <Route path="/profile" element={<AddCommentForm />} />

        {/* <Route path="/create-article" element={<CreateArticle />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
