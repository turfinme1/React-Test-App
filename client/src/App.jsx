import './App.css'
import ExerciseScroller from './components/ExerciseScroller'
import ControlledFormRefactored from './components/ControlledFormRefactored'
import {Route, Router,Routes} from 'react-router-dom'
import HeaderMenu from './components/header/HeaderMenu'
import Home from './components/home/Home'
import Blog from './components/blog/Blog'
import ExerciseGuides from './components/exercise-guides/ExerciseGuides'
import About from './components/about/About'

function App() {

  return (
    <>
      <HeaderMenu/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/exercise-guides' element={<ExerciseGuides/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      {/* <ExerciseScroller/> */}

      {/* <ControlledFormRefactored  formRef ={formRef}/> */}

  
    </> 
  );
}

export default App
