import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import { Home } from "./pages/home/index"
import { Login } from "./pages/login/index";
import { Feed } from "./pages/feed/index";
import { Form } from "./pages/form/index";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/form" element={<Form />}/>
    </Routes>
   </Router>
  );
}

export default App;
