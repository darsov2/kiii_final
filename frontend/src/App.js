import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import PlanYourTrip from "./Pages/PlanYourTrip";
import DiscoverCity from "./Pages/DiscoverCity";
import DiscoverSight from "./Pages/DiscoverSight";
import TopAttractions from "./Pages/TopAttractions";
import LoginPage from "./Pages/LogInPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPassword from "./Pages/ForgotPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./AuthContext";
import EditProfilePage from "./Pages/EditProfilePage";
import ConfirmAccount from "./Pages/ComfirmAccount";

function App() {
    return (
        <div className="App">
            {/*<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />*/}
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/about"} element={<AboutUs/>}/>
                        <Route path={"/discover/:cityId"} element={<DiscoverCity/>}/>
                        <Route path={"/discoverSight/:sightId"} element={<DiscoverSight/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                        <Route path={"/register"} element={<RegisterPage/>}/>
                        <Route path={"/profile"} element={<EditProfilePage/>}/>
                        <Route path={"/forgot"} element={<ForgotPassword/>}/>
                        <Route path={"/plan"} element={<PlanYourTrip/>}/>
                        <Route path={"/itineraries/:planId"} element={<TopAttractions/>}/>
                        <Route path={"/confirm"} element={<ConfirmAccount/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            {/*<HomePage/>*/}
            {/* <AboutUs/> */}
            {/* <PlanYourTrip/>*/}
            {/* <DiscoverCity/>*/}
            {/*<TopAttractions/>*/}
            {/*<RegisterPage/>*/}
            {/*<LoginPage/>*/}
            {/*  <ForgotPassword/>*/}
        </div>
    );
}

export default App;
