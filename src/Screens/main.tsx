import { useNavigate } from 'react-router-dom';
import Button from 'Components/Button';
// import { RainFallData } from 'Components/RainFallData';
import { WheaterData } from 'Components/WeatherData';

export function Main() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/sobre-nos');
  };

  return (
    <div className="space-y-4">
      <WheaterData />
      {/* <RainFallData numero={129381} /> */}
      <div className="space-y-4 p-3 sm:p-4 md:p-6 lg:p-20">
        <h1 className="text-center text-2xl font-bold">
          Conheça mais sobre o projeto
        </h1>
        <Button onClick={handleNavigate}>Conheça+</Button>
      </div>
    </div>
  );
}
