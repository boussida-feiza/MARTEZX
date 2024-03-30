
import{BrowserRouter , Routes , Route} from "react-router-dom";
import  ReactDOM from "react-dom/client";

import Navbar from "./components/navBar/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Accueil from "./pages/Accueil";

export default function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={ <Navbar/>}
   >
    <Route index element={<Accueil/>} />
    <Route path="about" element={ <About/>} />
    <Route path="home" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    
  </Route>
</Routes>
</BrowserRouter>

  );

};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



