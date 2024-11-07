import { Main } from './Screens/main';
import { AboutUs } from 'Components/Presentation/AboutUs';
import { Footer } from 'Components/Footer';

function App() {
  return (
    <div className="bg-slate-200">
      <AboutUs />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
