import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import AddCat from './components/AddCat';
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import AddProd from './components/AddProd';
import Animepage from './components/Animepage';
import Card from './components/card';
import InsideAnime from './components/InsideAnime';
function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <AddType></AddType> */}
      {/* <AddProd></AddProd> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/anime' element={<Animepage></Animepage>}></Route>
          <Route path='/crd' element={<Card></Card>}></Route>
          <Route path='/inside/:id' element={<InsideAnime></InsideAnime>}></Route>
          {/* <Route path='/add' element={<AddProd></AddProd>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

