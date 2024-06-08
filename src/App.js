import logo from './logo.svg';
import './App.css';
import AddGame from './components/AddGame';
import DeleteGame from './components/DeleteGame';
import SearchGame from './components/SearchGame';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<AddGame/>}/>
      <Route path='/DeleteGame' element={<DeleteGame/>}/>
      <Route path='/SearchGame' element={<SearchGame/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>  
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
