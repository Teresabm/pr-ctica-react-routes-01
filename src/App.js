import HeadLine from "./components/HeadLine/HeadLine"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'

function App() {
  return (
    <header className="header">
      <Router>
      <HeadLine/>
        <Routes>
          <Route exact path ='/' element={<Home/>}/>
          <Route exact path ='/home' element={<Home/>}/>
          <Route exact path ='/services' element={<Services/>}/>  
        </Routes>
      </Router>
    </header>
  );
}

export default App;
