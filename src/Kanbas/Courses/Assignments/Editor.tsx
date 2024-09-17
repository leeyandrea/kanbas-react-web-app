export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
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
        <tr>
            <td align="justify" valign="top">
                <div>
                    <label>Online Entry Options:</label><br/>

                    <input type="checkbox" name="check-entry" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="check-entry" id="wd-website-url"/>
                    <label htmlFor="wd-website-url	">Website URL</label><br/>

                    <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="check-entry" id="wd-student-annotationy"/>
                    <label htmlFor="wd-student-annotation">Student Annotations</label>

                    <input type="checkbox" name="check-entry" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </div>

            </td> 
        </tr>
      </table>
    </div>
);}

