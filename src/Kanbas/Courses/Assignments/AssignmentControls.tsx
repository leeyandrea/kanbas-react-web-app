import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <span className="d-inline-flex align-items-center">
        <FaSearch
          className="position-relative me-2"
          style={{ bottom: "1px" }}
          color="gray"
        />
        <input
          id="wd-search-assignment"
          className="form-control position-relative me-2"
          placeholder="Search..."
        />
      </span>
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger float-end me-2"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary float-end me-2"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
    </div>
  );
}
