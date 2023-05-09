import './rest-card.css';

export default function RestCard({ rest }: any) {
  return (
    <div className="rest-card">
      <img src={rest.image} alt="" />
      <h2>{rest.name}</h2>
    </div>
  );
}
