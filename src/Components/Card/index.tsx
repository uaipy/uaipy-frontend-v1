import CardHeader from './Header/CardHeader';
import CardBody from './CardBody';

const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="overflow-hidden bg-white p-6 sm:rounded-lg">{children}</div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
