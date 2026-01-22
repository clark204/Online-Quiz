import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './modules/auth/Login';
import SignUp from './modules/auth/SignUp';
import StudentDashboard from './modules/student/StudentDashboard';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import AdminDashboard from './modules/admin/AdminDashboard';
import './App.css';
import TeacherClass from './components/teacher/contents/TeacherClass';
import TeacherOverview from './components/teacher/contents/TeacherOverview';

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
