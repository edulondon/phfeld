import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import Product from "./screens/product/Product";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import About from "./screens/about/About";
import Contact from "./screens/contact/ContactScreen";
import GalleryScreen from "./screens/gallery/GalleryScreen";
import Products from "./components/Products";
import Cart from "./pages/Cart";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="App">
      <div className="gradient__bg">
        <Header/>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />;
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={GalleryScreen} />
        <Route path="/cart">
          <Cart />
        </Route>
        <Footer />
      </div>
      </div> 
    </Router>
  );
}

export default App;
