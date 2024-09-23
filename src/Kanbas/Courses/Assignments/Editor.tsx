export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignments">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="submission">Percentage</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="submission-type">Online</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td></td>
          <td align="justify" valign="top">
            <label>Online Entry Options:</label>
            <br />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" name="check-entry" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
              </div>
              <div>
                <input type="checkbox" name="check-entry" id="wd-website-url" />
                <label htmlFor="wd-website-url	">Website URL</label>
                <br />
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check-entry"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check-entry"
                  id="wd-student-annotationy"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotations
                </label>
              </div>
              <div>
                <input type="checkbox" name="check-entry" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </td>
        </tr>
        <br></br>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-text-fields-last-name">Assign to:</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="right" valign="top">
            <input
              type="text"
              id="wd-assign-to"
              placeholder="x"
              value="Everyone"
              title="Assign to"
            />
          </td>
        </tr>
        <br></br>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date	"> Due: </label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="date" id="wd-text-fields-due" value="05/13/2024" />
          </td>
        </tr>
        <br></br>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from"> Available from: </label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until"> Until: </label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="date" id="wd-available-from" value="05/06/2024" />
          </td>
          <td align="left" valign="top">
            <input type="date" id="wd-available-until" value="05/20/2024" />
          </td>
        </tr>
      </table>
      <hr />
      <table align="right">
        <tr>
          <td align="right">
            <button id="wd-cancel">Cancel</button>
          </td>
          <td align="right">
            <button id="wd-save">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
