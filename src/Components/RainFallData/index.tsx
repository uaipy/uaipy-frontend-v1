interface ContadorNumeroProps {
  numero: number;
}

export const RainFallData = ({ numero }: ContadorNumeroProps) => {
  return (
    <div className="space-y-4 rounded-md p-3 sm:p-4 md:p-6 lg:p-8">
      <h1 className="text-center text-2xl font-bold">
        Volume Instantâneo de agua: {numero} mL
      </h1>
    </div>
  );
};
