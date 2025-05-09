interface MapCardProps {
  map: {
    name: string;
    image: string;
    layout: string;
  };
}

const MapCard: React.FC<MapCardProps> = ({ map }) => {
  return (
    <div id={map.name}>
      <h3 className="text-2xl font-bold">{map.name}</h3>
      <img src={`/maps/${map.image}`} width="400" />
      <img src={`/maps/${map.layout}`} width="400" />
    </div>
  );
};

export default MapCard;
