import Button from 'Components/Button';
import { RainFallData } from 'Components/RainFallData';
import { WheaterData } from 'Components/WeatherData';

export function Main() {
  return (
    <div className="space-y-4">
      <WheaterData />
      <RainFallData numero={129381} />
      <div className="space-y-4 p-3 sm:p-4 md:p-6 lg:p-20">
        <h1 className="text-center text-2xl font-bold">
          Conheça mais sobre o projeto
        </h1>
        <Button>Botão</Button>
      </div>
    </div>
  );
}
