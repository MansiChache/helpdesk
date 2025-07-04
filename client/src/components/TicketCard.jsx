const TicketCard = ({ title, count, bgColor }) => {
  return (
    <div
      className="relative w-full h-44 rounded-xl border-b-4 border-r-4 border-gray-400 font-sanchez text-black "
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xl text-black text-center px-2 break-words text-wrap w-[90%]">
        {title}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-7xl text-customDarkBlue">
        {count}
      </div>
    </div>
  );
};

export default TicketCard;
