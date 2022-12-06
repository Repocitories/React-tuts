import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import UseState from "./component/Inc-Dec/UseState";
import UseEffect from "./component/Inc/UseEffect";
import Resturant from "./component/Resturant-app/Resturant";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inc-dec" element={<UseState />} />
          <Route path="/Inc" element={<UseEffect />} />
          <Route path="/Resturant" element={<Resturant />} />
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
