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
          <Route path="/login" element={!user && <Login />} />
            <Route path="/" element={user && <Home />} />
            <Route path="/teachers" element={user && <List columns={teacherColumns} />} />
            <Route path="/teachers/:id" element={user && <Single />} />
            <Route path="/teachers/new" element={user && <New />} />
            <Route path="/teachers/edit/:id" element={user && <Edit />} />
            <Route path="/horses" element={user && <List columns={horseColumns} />} />
            <Route path="/horses/:id" element={user && <Single />} />
            <Route path="/horses/new" element={user && <New />} />
            <Route path="/horses/edit/:id" element={user && <Edit />} />
            <Route path="/students" element={user && <List columns={studentColumns} />} />
            <Route path="/students/:id" element={user && <Single />} />
            <Route path="/students/new" element={user && <New />} />
            <Route path="/students/edit/:id" element={user && <Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
