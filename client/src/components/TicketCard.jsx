const TicketCard = ({ title, count, bgColor }) => {
  return (
    <div
      className="w-full h-24 rounded-md text-center shadow-md text-black font-semibold flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-sm">{title}</div>
      <div className="text-3xl font-bold">{count}</div>
    </div>
  );
};

export default TicketCard;