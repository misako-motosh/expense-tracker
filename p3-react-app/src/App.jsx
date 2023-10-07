import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import IncomePage from './pages/IncomePage';
import ExpenditurePage from './pages/ExpenditurePage';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/income" element={<IncomePage />} />
          <Route path='/expenditure' element={<ExpenditurePage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
