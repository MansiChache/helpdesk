const TicketCard = ({ title, count, bgColor }) => {
  return (
    <div
      className="relative w-full h-44 rounded-xl border-b-4 border-r-4 border-gray-400 font-sanchez text-black "
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xl text-center w-max">
        {title}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-7xl ">
        {count}
      </div>
    </div>
  );
};

export default TicketCard;
