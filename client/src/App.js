import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route to="/login" element={<Login />} />
          <Route to="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
