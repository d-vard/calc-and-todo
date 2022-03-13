import './App.css';
import {Route, Routes} from "react-router-dom";
import PageCalc from "./Pages/page-calc";
import PageTodo from "./Pages/page-todo";
import Page404 from "./Pages/404";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App_main">
        <header>
            <ul className="header_list">
                <li><a href="/calc">Calc</a></li>
                <li><a href="/todo">ToDo</a></li>
            </ul>
        </header>
      <Routes>
        <Route path='/calc' element={<PageCalc/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<PageTodo/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
