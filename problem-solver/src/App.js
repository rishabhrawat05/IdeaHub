
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import PostIdea from './pages/PostIdea';
import ProfileInfo from './pages/ProfileInfo';
import BestIdeas from './pages/BestIdeas';
import Leaderboard from './pages/Leaderboard';
import ProblemDisplay from './pages/ProblemDisplay';
import MyIdeas from './pages/MyIdeas';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/bestIdeas" element={<BestIdeas/>}/>
    <Route path="/leaderboard" element={<Leaderboard/>}/>
    <Route path='/problem/:id' element={<ProblemDisplay/>}/>
    <Route path='/user' element={<PrivateRoute/>}> 
      <Route path='profile/:id' element={<ProfileInfo/>}/>
      <Route path='postIdea/:id' element={<PostIdea/>}/>
      <Route path='MyIdeas/:id' element={<MyIdeas/>}/>
    </Route>
   
  </Routes>
  </BrowserRouter>
  );
}

export default App;
