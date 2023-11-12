import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import FrontPageArticle from './components/FrontPageArticle'
import ExerciseScroller from './components/ExerciseScroller'
import ControlledFormRefactored from './components/ControlledFormRefactored'


function App() {

  return (
    <>
      <Header />
      <FrontPageArticle/>
      {/* <ExerciseScroller/> */}

      {/* <ControlledFormRefactored  formRef ={formRef}/> */}

  
    </>
  );
}

export default App
