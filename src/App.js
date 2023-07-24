import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import LoginForm from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
