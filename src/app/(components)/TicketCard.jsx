import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock></DeleteBlock>
      <PriorityDisplay></PriorityDisplay>
      <ProgressDisplay></ProgressDisplay>
    </div>
  );
};

export default TicketCard;
