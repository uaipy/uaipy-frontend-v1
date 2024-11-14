import React, { useEffect, useState } from 'react';
import { GraphData } from 'Components/GraphData';
import Card from '../Card';

interface WeatherData {
  hum: number;
  pluviosidade: number;
  temp: number;
}

interface Message {
  id: number;
  deviceId: number;
  isSyncedRemotely: boolean;
  messageReadDate: string;
  data: {
    temperatura: number;
    umidade: number;
    chuvaAcumulada: number;
    chuvaInstantanea: number;
  };
}

interface Dataset {
  label: string;
  number: number;
  borderColor: string;
  backgroundColor: string;
}

export function WheaterData() {
  const [message, setMessage] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/e52a3617-0b02-4c04-b6eb-82c74b15502e',
        );
        console.log(response);
        const data: {
          id: number;
          deviceId: number;
          data: WeatherData;
          isSyncedRemotely: boolean;
          messageReadDate: string;
        }[] = await response.json();

        const formattedData: Message[] = data.map(item => ({
          id: item.id,
          deviceId: item.deviceId,
          isSyncedRemotely: item.isSyncedRemotely,
          messageReadDate: item.messageReadDate,
          data: {
            temperatura: item.data.temp,
            umidade: item.data.hum,
            chuvaAcumulada: item.data.pluviosidade,
            chuvaInstantanea: 0,
          },
        }));
        setMessage(formattedData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const datasetPluviosidade: Dataset[] = [
    {
      label: 'Pluviosidade',
      number: message.length ? message[0].data.chuvaAcumulada : 0,
      borderColor: '#00FF00',
      backgroundColor: '#00FF00',
    },
  ];

  const datasetUmidade: Dataset[] = [
    {
      label: 'Umidade',
      number: message.length ? message[0].data.umidade : 0,
      borderColor: '#0000FF',
      backgroundColor: '#0000FF',
    },
  ];

  const datasetTemperatura: Dataset[] = [
    {
      label: 'Temperatura',
      number: message.length ? message[0].data.temperatura : 0,
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
    <div className="space-y-4 rounded-md p-3 sm:p-4 md:p-6 lg:p-8">
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
