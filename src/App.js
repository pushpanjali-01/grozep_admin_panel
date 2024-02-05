import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import LoginPage from "./pages/login/LoginPage";
import SigninPage from "./pages/signin/SigninPage";
import OtpVerificationPage from "./pages/otpverification/OtpVerificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={<SigninPage />} // Use Outlet for nested routes
        >
        </Route> */}
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
