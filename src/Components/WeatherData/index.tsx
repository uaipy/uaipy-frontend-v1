import { GraphData } from 'Components/GraphData';
import Card from '../Card';

export function WheaterData() {
  const message = [
    {
      messageReadDate: '2021-09-01T00:00:00.000Z',
      data: {
        temperatura: 25,
        umidade: 50,
        chuvaAcumulada: 10,
        chuvaInstantanea: 0,
      },
    },
    {
      messageReadDate: '2021-09-01T00:01:00.000Z',
      data: {
        temperatura: 25,
        umidade: 50,
        chuvaAcumulada: 10,
        chuvaInstantanea: 0,
      },
    },
    {
      messageReadDate: '2021-09-01T00:02:00.000Z',
      data: {
        temperatura: 25,
        umidade: 50,
        chuvaAcumulada: 10,
        chuvaInstantanea: 0,
      },
    },
    {
      messageReadDate: '2021-09-01T00:03:00.000Z',
      data: {
        temperatura: 25,
        umidade: 50,
        chuvaAcumulada: 10,
        chuvaInstantanea: 0,
      },
    },
    {
      messageReadDate: '2021-09-01T00:04:00.000Z',
      data: {
        temperatura: 25,
        umidade: 50,
        chuvaAcumulada: 10,
        chuvaInstantanea: 0,
      },
    },
  ];

  const datasetPluviosidade = [
    {
      label: 'Pluviosidade',
      number: 10,
      borderColor: '#00FF00',
      backgroundColor: '#00FF00',
    },
  ];

  const datasetUmidade = [
    {
      label: 'Umidade',
      number: 50,
      borderColor: '#0000FF',
      backgroundColor: '#0000FF',
    },
  ];

  const datasetTemperatura = [
    {
      label: 'Temperatura',
      number: 25,
      borderColor: '#FF0000',
      backgroundColor: '#FF0000',
    },
  ];

  const datasets = [
    { label: 'Temperatura', dataset: datasetTemperatura },
    { label: 'Umidade', dataset: datasetUmidade },
    { label: 'Pluviosidade', dataset: datasetPluviosidade },
  ];

  return (
    <div className="space-y-4 rounded-md  p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 md:col-span-3">
          <h1 className="text-center text-2xl font-bold">
            Dados Meteorológicos
          </h1>
        </div>
        {datasets.map((data, i) => (
          <Card key={i}>
            <Card.Header>
              <Card.Header.Title title={data.label} />
            </Card.Header>
            <Card.Body>
              <div className="size-full rounded-md bg-white p-3">
                <GraphData message={message} dataset={data.dataset} />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
