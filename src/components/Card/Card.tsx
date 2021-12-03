import "./Card.css";

type CardProps = {
  value: string;
  onClick: () => void;
};

const Card = ({ value, onClick }: CardProps) => {
  return (
    <div className="container" onClick={onClick}>
      <p className="letter">{value}</p>
    </div>
  );
};

export default Card;
