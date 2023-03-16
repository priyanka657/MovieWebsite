import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './Error';
import SingleMovie from './SingleMovie';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
  );
}

export default App;
