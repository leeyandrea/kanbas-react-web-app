import React from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client";

const DeleteAssignmentDialog = () => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const modal = document.getElementById("wd-delete-assignment-dialog");
    const assignmentId = modal?.getAttribute("data-assignment-id");
    if (assignmentId) {
      try {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      } catch (error) {
        console.error("Failed to delete assignment:", error);
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="wd-delete-assignment-dialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Delete Assignment</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to remove this assignment?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAssignmentDialog;
