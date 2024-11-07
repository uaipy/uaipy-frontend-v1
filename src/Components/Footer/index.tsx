export const Footer = () => {
  return (
    <footer className="bg-purple-500 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="text-center md:text-left">
            <a href="mailto:''">Contato</a>
          </div>
          <div className="text-center md:text-left">
            <p>Direitos reservados UAI.py</p>
          </div>
          <div className="text-center md:text-left">
            <a href="https://github.com/uaipy" target="_blank" rel="noreferrer">
              Nosso GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
