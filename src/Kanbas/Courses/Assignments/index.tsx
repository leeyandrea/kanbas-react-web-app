import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item d-flex align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <GrNotes className="me-2 fs-3 text-success" />
                <div className="d-flex flex-column ms-3">
                  <a
                    className="wd-assignment-link fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1
                  </a>
                  <div className="wd-assignment-details mt-1">
                    <div className="wd-assignment-list-item mb-0 pe-5">
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not avaliable until</b> May 6 at 12:00am |
                      <br />
                      <b>Due</b> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item d-flex align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <GrNotes className="me-2 fs-3 text-success" />
                <div className="d-flex flex-column ms-3">
                  <a
                    className="wd-assignment-link fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A2
                  </a>
                  <div className="wd-assignment-details mt-1">
                    <div className="wd-assignment-list-item mb-0 pe-5">
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not avaliable until</b> May 13 at 12:00am |
                      <br />
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item d-flex align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <GrNotes className="me-2 fs-3 text-success" />
                <div className="d-flex flex-column ms-3">
                  <a
                    className="wd-assignment-link fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A3
                  </a>
                  <div className="wd-assignment-details mt-1">
                    <div className="wd-assignment-list-item mb-0 pe-5">
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not avaliable until</b> May 20 at 12:00am |
                      <br />
                      <b>Due</b> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
