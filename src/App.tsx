import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import { app } from "./firebase";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <>
      <h1>NazgulMX</h1>
      <FirebaseAppProvider firebaseApp={app}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>Im the roooooot!</>} />
            <Route path="/test" element={<>Im the tessssst!</>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </FirebaseAppProvider>
    </>
  );
}

export default App;
