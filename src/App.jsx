import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Level from './components/Level'
import QuizArea from './components/QuizArea'
import Banner from './components/Banner'
import Result from './components/result'

function App() {
  return (
    <BrowserRouter>
        <Banner/>
        <Routes>
          <Route path='/' element={<Level/>}/>
          <Route path='/quiz/:level' element={<QuizArea/>}/>
          <Route path='/quiz/result' element={<Result/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
