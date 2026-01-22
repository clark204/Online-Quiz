import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import StudentDashboard from './student/StudentDashboard';
import TeacherDashboard from './teacher/components/TeacherDashboard';
import AdminDashboard from './admin/AdminDashboard';
import './App.css';
import TeacherClass from './teacher/modules/classes/TeacherClass';
import TeacherOverview from './teacher/modules/dashboard/TeacherOverview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* default redirect */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* PROTECTED ROUTES */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />}>
          <Route index element={<TeacherOverview />} />
          <Route path="classes" element={<TeacherClass />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
