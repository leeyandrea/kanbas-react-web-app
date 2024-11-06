import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

interface AssignmentLessonControlButtonsProps {
  assignmentId: string;
}

const AssignmentLessonControlButtons: React.FC<
  AssignmentLessonControlButtonsProps
> = ({ assignmentId }) => {
  return (
    <div className="float-end ms-auto">
      <GreenCheckmark />
      <FaTrash
        className="text-danger me-2 mb-1 cursor-pointer"
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment-dialog"
        onClick={() => {
          const modal = document.getElementById("wd-delete-assignment-dialog");
          if (modal) {
            modal.setAttribute("data-assignment-id", assignmentId);
          }
        }}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export default AssignmentLessonControlButtons;
