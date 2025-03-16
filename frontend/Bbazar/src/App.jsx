import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import Login from './Components/login';
import Signup from './Components/signup';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}




export default App
