import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { teacherColumns, horseColumns, studentColumns } from './datatablesource';
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New';
import Edit from './pages/edit/Edit'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<List columns={teacherColumns} />} />
          <Route path="/teachers/:id" element={<Single />} />
          <Route path="/teachers/new" element={<New />} />
          <Route path="/teachers/edit/:id" element={<Edit />} />
          <Route path="/horses" element={<List columns={horseColumns} />} />
          <Route path="/horses/:id" element={<Single />} />
          <Route path="/horses/new" element={<New />} />
          <Route path="/horses/edit/:id" element={<Edit />} />
          <Route path="/students" element={<List columns={studentColumns} />} />
          <Route path="/students/:id" element={<Single />} />
          <Route path="/students/new" element={<New />} />
          <Route path="/students/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
