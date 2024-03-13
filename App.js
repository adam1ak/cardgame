import './CssReset.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardComponent from './CardComponent'
import CardAdd from './CardAdd'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<CardComponent/>}/>
          <Route path='/add-card' element={<CardAdd/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;