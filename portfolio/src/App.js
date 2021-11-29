import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Project from './Components/Pages/Project';


function App() {
  return (
    <>
      <Router>
        <NavMenu/>
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/project"><Project/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
