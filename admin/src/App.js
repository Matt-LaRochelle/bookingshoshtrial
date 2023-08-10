import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { teacherColumns, horseColumns, studentColumns } from './datatablesource';
import List from './pages/list/List'
import Single from './pages/single/Single'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<List columns={teacherColumns} />} />
          <Route path="/teachers/:id" element={<Single />} />
          <Route path="/horses" element={<List columns={horseColumns} />} />
          <Route path="/horses/:id" element={<Single />} />
          <Route path="/students" element={<List columns={studentColumns} />} />
          <Route path="/students/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
