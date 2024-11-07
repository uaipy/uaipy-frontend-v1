import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export type messageType = {
  messageReadDate: string;
  data: {
    temperatura: number;
    umidade: number;
    chuvaAcumulada: number;
    chuvaInstantanea: number;
  };
};

export type datasetType = {
  label: string;
  number: number;
  borderColor: string;
  backgroundColor: string;
};

function WheaterGraph(message: messageType[], dataset: datasetType[]) {
  const wheaterData: number[] = [];
  switch (dataset[0].label) {
    case 'Temperatura':
      message.forEach(element => wheaterData.push(element.data.temperatura));
      break;
    case 'Umidade':
      message.forEach(element => wheaterData.push(element.data.umidade));
      break;
    case 'Pluviosidade':
      message.forEach(element => wheaterData.push(element.data.chuvaAcumulada));
      break;
    default:
      break;
  }
  let index = 0;

  const labels: string[] = [];
  message.forEach(element =>
    labels.push(new Date(element.messageReadDate).toLocaleTimeString()),
  );
  return {
    labels,
    datasets: dataset.map(element => ({
      label: element.label,
      data: labels.map(() => {
        const response = wheaterData[index];
        index = index + 1;
        return response;
      }),
      borderColor: element.borderColor,
      backgroundColor: element.backgroundColor,
    })),
  };
}

export function GraphData({
  message,
  dataset,
}: {
  message: messageType[];
  dataset: datasetType[];
}) {
  const data = WheaterGraph(message, dataset);
  return (
    <div className="size-full rounded-md bg-white p-3">
      <div className="relative h-64 w-full sm:h-96">
        <Line data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}
