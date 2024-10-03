export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <br />
          <input id="wd-name" type="text" className="form-control" value="A1" />
        </div>
        <div>
          <textarea
            id="wd-description"
            className="form-control mb-4 d-flex flex-row"
          >
            The assignment is available online Submit a link to the landing page
            of your Web application running on Netlify. The landing page should
            include the following: Your full name and section Links to each of
            the lab assignments Link to the Kanbas application should include a
            link to navigate back to the landing page.
          </textarea>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex text-nowrap flex-row mb-3">
            <label htmlFor="wd-points" className="form-label me-3 w-25">
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value="100"
            />
          </div>

          <div className="d-flex text-nowrap flex-row mb-3">
            <label htmlFor="wd-group" className="form-label me-3 w-25">
              Assignment Group
            </label>
            <select id="wd-group" className="form-select">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
          <div className="d-flex text-nowrap flex-row mb-3">
            <label
              htmlFor="wd-display-grade-as"
              className="form-label me-3 w-25"
            >
              Display Grade as
            </label>
            <select id="wd-display-grade-as" className="form-select">
              <option value="submission">Percentage</option>
            </select>
          </div>
        </div>

        <div className="d-flex text-nowrap flex-row mb-3">
          <label htmlFor="wd-submission" className="form-label me-3 w-25">
            Submission Type
          </label>
          <div className="rounded-box mb-3 p-3 w-100">
            <label htmlFor="wd-submission-type" className="form-label me-3">
              Submission Type
            </label>
            <select id="wd-submission-type" className="form-select">
              <option value="submission-type">Online</option>
            </select>
            <label
              htmlFor="wd-online-entry-options"
              className="form-label mt-3"
            >
              <b>Online Entry Options</b>
            </label>
            <div className="mt-2">
              <div className="form-check">
                <input
                  className="wd-text-entry form-check-input"
                  type="checkbox"
                  id="text-entry"
                />
                <label
                  className="wd-text-entry form-check-label"
                  htmlFor="text-entry"
                >
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  className="wd-website-url form-check-input"
                  type="checkbox"
                  id="website-url"
                  checked
                />
                <label
                  className="wd-website-url form-check-label"
                  htmlFor="website-url"
                >
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  className="wd-media-recordings form-check-input"
                  type="checkbox"
                  id="media-recordings"
                />
                <label className="form-check-label" htmlFor="media-recordings">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  className="wd-student-annotation form-check-input"
                  type="checkbox"
                  id="student-annotation"
                />
                <label
                  className="wd-student-annotation form-check-label"
                  htmlFor="student-annotation"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  className="wd-file-upload form-check-input"
                  type="checkbox"
                  id="file-uploads"
                />
                <label
                  className="wd-file-upload form-check-label"
                  htmlFor="file-uploads"
                >
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex text-nowrap flex-row mb-3">
          <label htmlFor="wd-assign-to" className="form-label me-3 w-25">
            Assign to
          </label>
          <div className="rounded-box mb-3 p-3 w-100">
            <label className="wd-assign-to text-nowrap form-label">
              <b>Assign to</b>
            </label>
            <input
              type="text"
              className="wd-assign-to form-control"
              value="Everyone"
            />
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="due-date" className="wd-due-date form-label">
                  <b>Due</b>
                </label>
                <input
                  type="datetime-local"
                  className="wd-due-date form-control"
                  id="due-date"
                  value="2024-05-13T23:59"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label
                  htmlFor="available-from"
                  className="wd-available-from form-label"
                >
                  <b>Available from</b>
                </label>
                <input
                  type="datetime-local"
                  className="wd-available-from form-control"
                  id="available-from"
                  value="2024-05-06T12:00"
                />
              </div>
              <div className="col">
                <label
                  htmlFor="until"
                  className="wd-available-until form-label"
                >
                  <b>Until</b>
                </label>
                <input
                  type="datetime-local"
                  className="wd-available-until form-control"
                  id="until"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">
            Cancel
          </button>
          <button type="submit" className="btn btn-danger">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
