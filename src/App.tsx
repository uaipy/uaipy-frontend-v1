import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Screens/main';
import { AboutUs } from './Components/Presentation/AboutUs';
import { Footer } from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
