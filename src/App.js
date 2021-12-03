import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DrawerComponent from "./components/DrawerComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Example from "./pages/Example";
import Team from "./pages/Team";
import TodoList from "./pages/TodoList";



function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Aboutpage" element={<About />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          <Route exact path="/FAQs" element={<FAQs />}></Route>
          <Route exact path="/Example" element={<Example />}></Route>
          <Route exact path="/Team" element={<Team />}></Route>
          <Route exact path="/Todolist" element={<TodoList />}></Route>
          <Route exact path="/Drawer" element={<DrawerComponent />}></Route>

        </Routes>
      </Router>
      

  );
}

export default App;
