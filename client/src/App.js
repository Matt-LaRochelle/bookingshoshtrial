import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
