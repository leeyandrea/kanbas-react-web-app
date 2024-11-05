import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="rounded-box px-3 py-1"> 40% of Total</span>
      <BsPlus className="fs-4" />

      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
