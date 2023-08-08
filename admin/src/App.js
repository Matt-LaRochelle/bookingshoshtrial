import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { teacherColumns } from './datatablesource';
import List from './pages/list/List'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<List columns={teacherColumns} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
