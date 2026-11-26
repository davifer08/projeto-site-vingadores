import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SagaInfinito from './pages/SagaInfinito';
import Home from './pages/Home';
import Rodape from './components/Rodape';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sagaInfinito" element={<SagaInfinito />}></Route>
      </Routes>

      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default App;
