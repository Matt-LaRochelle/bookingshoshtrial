import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
