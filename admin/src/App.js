import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { teacherColumns, horseColumns, studentColumns } from './datatablesource';
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New';
import Edit from './pages/edit/Edit'
import Login from './pages/login/Login'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react'

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/teachers" element={user ? <List columns={teacherColumns} /> : <Navigate to="/login" />} />
            <Route path="/teachers/:id" element={user ? <Single /> : <Navigate to="/login" />} />
            <Route path="/teachers/new" element={user ? <New /> : <Navigate to="/login" />} />
            <Route path="/teachers/edit/:id" element={user ? <Edit /> : <Navigate to="/login" />} />
            <Route path="/horses" element={user ? <List columns={horseColumns} /> : <Navigate to="/login" />} />
            <Route path="/horses/:id" element={user ? <Single /> : <Navigate to="/login" />} />
            <Route path="/horses/new" element={user ? <New /> : <Navigate to="/login" />} />
            <Route path="/horses/edit/:id" element={user ? <Edit /> : <Navigate to="/login" />} />
            <Route path="/students" element={user ? <List columns={studentColumns} /> : <Navigate to="/login" />} />
            <Route path="/students/:id" element={user ? <Single /> : <Navigate to="/login" />} />
            <Route path="/students/new" element={user ? <New /> : <Navigate to="/login" />} />
            <Route path="/students/edit/:id" element={user ? <Edit /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
