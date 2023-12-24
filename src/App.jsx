import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
import Editcategorie from "./components/categories/Editcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listcategories from "./components/categories/Listcategories";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import 'bootstrap/dist/css/bootstrap.min.css';

import Viewarticle from "./components/articles/Viewarticle";
import Listscategorie from "./components/scategories/Listscategorie";
import Menu from "./components/Menu";
const App=() =>{
return (
      <div>
    
<Router>
  <Menu/>
<Routes>
<Route path="/articles" exact element={<Listarticles/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" exact element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/scategories" exact element={<Listscategorie/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>


</Routes>
</Router>
</div>
      );
}
export default App;
