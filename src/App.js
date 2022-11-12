import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Background from "./pages/Background";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Start from "./pages/Start";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/" element={<Background />}>
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route index element={<Home />}>
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

