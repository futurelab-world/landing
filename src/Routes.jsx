import { Routes, Route  } from "react-router-dom"
import { AuthProvider } from "./AuthProvider";
import App from './App'

function RoutesContainer() {
//   if (window.location.host.split(".")[0] === "app") {
//     return (
//       <Routes>
//      </Routes>
//     )
//   }

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
    </AuthProvider>

    );

}

export default RoutesContainer;
