import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Classes from "./pages/Classes";
import CourseDetails from "./pages/CourseDetails";
import Trainers from "./pages/Trainers";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
