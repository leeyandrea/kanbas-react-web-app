import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <img src="/images/reactjs.webp" width="100%" height={160} />
                <div>
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/Typography.png" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      ARTD 3350 Typography 2
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Type 2
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/algorithms.jpg" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 3000 Algorithms & Data
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Algorithms
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/dpseminar.png" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      ARTD 1002 Seminar for Design Perpectives
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Design
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/algoRecitation.jpg" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 3001 Recitation for CS 3000
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Recitation
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/webdev.jpg" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 4550 Web Development
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Web Dev
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/dp.jpg" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      ARTD 1001 Design Perspectives
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Design
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/productDesign.jpg" width="100%" height={160} />
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      GE 4892 Engineering Product Design and Prototyping
                      Challenge Project
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Project
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
