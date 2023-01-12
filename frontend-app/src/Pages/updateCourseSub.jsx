import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseService from "../services/CourseService";

function UpdateCourse() {
  const { cid } = useParams();
  const [coursedata, setCourseData] = useState({
    courseid: "",
    cname: "",
    cduration: "",
    cfee: "",
  });
  
  useEffect(() => {
    CourseService.getCourseById(cid).then((res) => {
      setCourseData(res.data);
      console.log(coursedata);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(coursedata);
    CourseService.updateCourse(coursedata);
    alert("Sucessfully updated a course !! ");
    window.location = "/update-course-list";
  };

  const changeHandler = (e) => {
    setCourseData((coursedata) => ({
      ...coursedata,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className = "p-3 page_bg text-black " style={{ width: "auto", height: "76.3vh"}}>
      <div>
        <div className="col-md-6 offset-md-3 all_forms">
          <h3 className="text-center fw-bold">UPDATE COURSE</h3>
          <div>
            <form>
              <div className="form-group mb-4">
                <label className="text-black">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="cname"
                  value={coursedata.cname}
                  placeholder="Enter Course Name"
                  onChange={changeHandler}
                  required

                />
              </div>
              <div className="form-group mb-4">
                <label className="text-black">Course Duration</label>
                <input
                  type="text"
                  className="form-control"
                  name="cduration"
                  value={coursedata.cduration}
                  placeholder="Enter Course Duration"
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="text-black">Course Fee</label>
                <input
                  type="type"
                  className="form-control"
                  name="cfee"
                  value={coursedata.cfee}
                  placeholder="Enter Course Fee"
                  onChange={changeHandler}
                  required
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={submitHandler}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCourse;
