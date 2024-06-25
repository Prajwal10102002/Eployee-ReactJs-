
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Employee from './components/employee';
import Create from './components/Create';
import EditEmployee from './components/EditEmployee';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } >

          <Route path='' element={<Home />}></Route>
          <Route path='/employee' element={<Employee></Employee>}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/employeeedit/:id' element={<EditEmployee />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route >

      </Routes>
    </BrowserRouter>
  );
}

export default App;
