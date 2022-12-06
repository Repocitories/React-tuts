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
          <Route path="/React-tuts/" element={<Home />} />
          <Route path="/React-tuts/Inc-dec" element={<UseState />} />
          <Route path="/React-tuts/Inc" element={<UseEffect />} />
          <Route path="/React-tuts/Resturant" element={<Resturant />} />
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
