import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const deleteBlock = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon
          icon={faX}
          className="text-red-300 hover:cursor-pointer hover:text-red-400"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default deleteBlock;
