import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import StudentDashboard from './student/components/StudentDashboard';
import TeacherDashboard from './teacher/components/TeacherDashboard';
import AdminDashboard from './admin/AdminDashboard';
import './App.css';
import TeacherClass from './teacher/modules/classes/TeacherClass';
import TeacherOverview from './teacher/modules/dashboard/TeacherOverview';
import TeacherQuiz from './teacher/modules/quizzes/TeacherQuiz';
import TeacherAnalytics from './teacher/modules/analytics/TeacherAnalytics';
import StudentClasses from './student/modules/classes/StudentClasses';
import StudentTask from './student/modules/task/StudentTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* default redirect */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* PROTECTED ROUTES */}

        {/* STUDENT ROUTES */}
        <Route path="/student" element={<StudentDashboard />} >
          <Route index element={<StudentClasses />} />
          <Route path='todo' element={<StudentTask />} />
        </Route>

        {/* TEACHER ROUTES */}
        <Route path="/teacher" element={<TeacherDashboard />}>
          <Route index element={<TeacherOverview />} />
          <Route path="classes" element={<TeacherClass />} />
          <Route path="quizzes" element={<TeacherQuiz />} />
          <Route path='analytics' element={<TeacherAnalytics />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
