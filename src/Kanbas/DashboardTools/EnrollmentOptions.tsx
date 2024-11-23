import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector, useDispatch } from "react-redux";
import * as enrollmentsClient from "./client";
import { useEffect, useState } from "react";
import { addEnrollment, removeEnrollment } from "./reducer";

export default function Enrollments({}: {
  // addNewCourse: () => void;
  // deleteCourse: (course: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const courses = db.courses;
  // const [enrollments, setEnrollments] = useState(db.enrollments);

  const checkEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.course === courseId && enrollment.user === currentUser._id
    );
  };
  const [enrolled, setEnrolled] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const status = courses.reduce((acc, course) => {
      acc[course._id] = checkEnrolled(course._id);
      return acc;
    }, {} as { [key: string]: boolean });
    setEnrolled(status);
  }, [courses, enrollments]);

  const getEId = (courseId: string) => {
    const enrollment = enrollments.find(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );
    return enrollment?._id;
  };

  const handleEnroll = async (courseId: string) => {
    try {
      const response = await enrollmentsClient.enrollInCourse(
        currentUser._id,
        courseId
      );
      dispatch(addEnrollment(response));
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    const enrollmentId = getEId(courseId);
    if (!enrollmentId) return;

    try {
      await enrollmentsClient.unenrollFromCourse(enrollmentId);
      dispatch(removeEnrollment(enrollmentId));
    } catch (error) {
      console.error("Unenrollment failed:", error);
    }
  };

  return (
    <div id="wd-enrollment">
      <div id="wd-enrollment-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="wd-enrollment-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt={course.name}
                />
                <div className="card-body">
                  <h5 className="wd-enrollment-course-title card-title">
                    {course.name}{" "}
                  </h5>
                  <p
                    className="wd-enrollment-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}{" "}
                  </p>

                  {checkEnrolled(course._id) ? (
                    <button
                      onClick={() => handleUnenroll(course._id)}
                      className="btn btn-danger"
                    >
                      {" "}
                      Unenroll{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEnroll(course._id)}
                      className="btn btn-primary"
                    >
                      {" "}
                      Enroll{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
