import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import LoginPagePhone from "./Components/LoginPagePhone";
import SignUpPage from "./Components/SignUpPage";
import ForgetPassword from "./Components/ForgetPassword";
import SignUpUsingPhone from "./Components/SignUpUsingPhone";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LoginPagePhone" element={<LoginPagePhone />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/SignUpUsingPhone" element={<SignUpUsingPhone />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
