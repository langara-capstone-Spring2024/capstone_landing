import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Test from "./page/Test";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
