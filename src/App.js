import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import Details from './components/Details/Details';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/:details' element={<Details />} />

    </Routes>
  );
}

export default App;
