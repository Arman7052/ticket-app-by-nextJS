import TicketCard from "./(components)/TicketCard";

const dashboard = () => {
  return (
    <div className="p-5">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
      </div>
    </div>
  );
};

export default dashboard;
