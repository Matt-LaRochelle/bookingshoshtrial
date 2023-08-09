import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { teacherColumns, horseColumns, studentColumns } from './datatablesource';
import List from './pages/list/List'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<List columns={teacherColumns} />} />
          <Route path="/horses" element={<List columns={horseColumns} />} />
          <Route path="/students" element={<List columns={studentColumns} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
