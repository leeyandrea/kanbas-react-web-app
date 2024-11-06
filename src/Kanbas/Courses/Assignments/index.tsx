import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import DeleteAssignmentDialog from "./DeleteAssignment";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments">
      {isFaculty && <AssignmentControls />}
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            ASSIGNMENTS
            {isFaculty && <AssignmentControlButtons />}
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item d-flex align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="me-2 fs-3 text-success" />
                    <div className="d-flex flex-column ms-3">
                      <a
                        className="wd-assignment-link fw-bold"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <div className="wd-assignment-details mt-1">
                        <div className="wd-assignment-list-item mb-0 pe-5">
                          <span className="text-danger">Multiple Modules </span>
                          |<b> Not available until</b> {assignment.available} |
                          <b> Due </b>
                          {assignment.due} |{" "}
                          <span>{assignment.points} pts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isFaculty && (
                    <AssignmentLessonControlButtons
                      assignmentId={assignment._id}
                    />
                  )}
                </li>
              ))}
          </ul>
        </li>
      </ul>
      <DeleteAssignmentDialog />
    </div>
  );
}
