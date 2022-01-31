import "./ProfessorSectionSettings.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfessorSectionSettings = () => {
  const [loading, setLoading] = useState(true);

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [sectionNumber, setSectionNumber] = useState("");
  const [roomLocation, setRoomLocation] = useState("");

  const [classStartDate, setClassStartDate] = useState("");

  const [classEndDate, setClassEndDate] = useState("");

  const [mondayChecked, setMondayChecked] = useState(false);
  const [mondayStartTime, setMondayStartTime] = useState("");
  const [mondayEndTime, setMondayEndTime] = useState("");

  const [tuesdayChecked, setTuesdayChecked] = useState(false);
  const [tuesdayStartTime, setTuesdayStartTime] = useState("");
  const [tuesdayEndTime, setTuesdayEndTime] = useState("");

  const [wednesdayChecked, setWednesdayChecked] = useState(false);
  const [wednesdayStartTime, setWednesdayStartTime] = useState("");
  const [wednesdayEndTime, setWednesdayEndTime] = useState("");

  const [thursdayChecked, setThursdayChecked] = useState(false);
  const [thursdayStartTime, setThursdayStartTime] = useState("");
  const [thrusdayEndTime, setThursdayEndTime] = useState("");

  const [fridayChecked, setFridayChecked] = useState(false);
  const [fridayStartTime, setFridayStartTime] = useState("");
  const [fridayEndTime, setFridayEndTime] = useState("");

  const [cameraVideoChecked, setCameraVideoChecked] = useState(false);
  const [projectorChecked, setProjectorChecked] = useState(false);

  const [autoPublishChecked, setAutoPublishChecked] = useState(false);

  const authToken = useSelector((state) => state.user.authToken);
  useEffect(() => {
    //fetch the init data to set the defaults of the form
    const backendURL = process.env.REACT_APP_BACKEND_URL_ROOT;
    axios
      .get(`${backendURL}/semester_course/1/`, {
        headers: {
          Authorization: `token ${authToken}`,
        },
      })
      .then((res) => {
        const courseInfo = JSON.parse(res.data)[0]; //parse data
        console.log(courseInfo);
        setCourseName(courseInfo.course_identifier);
        setCourseDescription(courseInfo.description);
        setSectionNumber(courseInfo.section_num);
        setRoomLocation(courseInfo.room);
        setClassStartDate(convertToYYYYMMDD(courseInfo.schedule_from_date));
        setClassEndDate(convertToYYYYMMDD(courseInfo.schedule_to_date));
        setDays(courseInfo.meetings);
        setCameraVideoChecked(courseInfo.camera);
        setProjectorChecked(courseInfo.projector);
        setAutoPublishChecked(courseInfo.auto_publish);
        setLoading(false);
      });
  }, []);

  const setDays = (week) => {
    let count = 0;
    week.forEach((day) => {
      if (day.day === 1) {
        //monday
        setMondayChecked(true);
        setMondayStartTime(day.from_time);
        setMondayEndTime(day.to_time);
      } else if (day.day === 2) {
        //tuesday
        setTuesdayChecked(true);
        setTuesdayStartTime(day.from_time);
        setTuesdayEndTime(day.to_time);
      } else if (day.day === 3) {
        //wednesday
        setWednesdayChecked(true);
        setWednesdayStartTime(day.from_time);
        setWednesdayEndTime(day.to_time);
      } else if (day.day === 4) {
        //thursday
        setThursdayChecked(true);
        setThursdayStartTime(day.from_time);
        setThursdayEndTime(day.to_time);
      } else if (day.day === 5) {
        //thursday
        setFridayChecked(true);
        setFridayStartTime(day.from_time);
        setFridayEndTime(day.to_time);
      }
    });
  };

  const formatMonth = (date) => {
    if (date.getMonth() < 9) {
      return "0" + Number(date.getMonth() + 1);
    } else {
      return date.getMonth() + 1;
    }
  };
  const formatDay = (date) => {
    if (date.getDate() < 10) {
      return "0" + date.getDate();
    } else {
      return date.getDate();
    }
  };
  const convertToYYYYMMDD = (unixTime) => {
    const date = new Date(unixTime);
    const formatedYear = date.getFullYear();
    const formatedMonth = formatMonth(date);
    const formatedDay = formatDay(date);
    return formatedYear + "-" + formatedMonth + "-" + formatedDay;
  };
  if (loading == false) {
    return (
      <div className="settings-component">
        <h1 className="title">Edit Course Section</h1>
        <form className="class-settings">
          <div className="basic-information-grid">
            <label className="course-name-label" htmlFor="course-name-input">
              Course Name
            </label>
            <input
              type="text"
              placeholder="PHYS 3740"
              id="course-name-input"
              name="courseName"
              onChange={(e) => setCourseName(e.target.value)}
              value={courseName}
            />

            <label
              className="course-description-label"
              htmlFor="course-description-input"
            >
              Course Description
            </label>
            <input
              type="text"
              placeholder="Intro to Quantum & Rel"
              id="course-description-input"
              name="courseDescription"
              onChange={(e) => setCourseDescription(e.target.value)}
              value={courseDescription}
            />

            <label
              className="section-number-label"
              htmlFor="section-number-input"
            >
              Section Number
            </label>
            <input
              type="text"
              placeholder="001"
              id="section-number-input"
              name="sectionNumber"
              onChange={(e) => setSectionNumber(e.target.value)}
              value={sectionNumber}
            />

            <label
              className="room-location-label"
              htmlFor="room-location-input"
            >
              Room Location
            </label>
            <select
              placeholder="JFB B-1"
              id="room-location-input"
              name="roomLocation"
              onChange={(e) => setRoomLocation(e.target.value)}
              value={roomLocation}
            ></select>

            <label className="start-date-label" htmlFor="start-date">
              Class Start Date
            </label>
            <input
              type="date"
              id="start-date"
              onChange={(e) => setClassStartDate(e.target.value)}
              value={classStartDate}
            />

            <label className="end-date-label" htmlFor="end-date">
              Class End Date
            </label>
            <input
              type="date"
              id="end-date"
              onChange={(e) => setClassEndDate(e.target.value)}
              value={classEndDate}
            />
          </div>

          {/*WEEK GRID AREA */}
          <div className="week-grid">
            {/*first row is Day, Start Time, End Time*/}

            <h2 className="day-title underline">Day</h2>
            <h2 className="start-time-title underline">Start Time</h2>
            <h2 className="end-time-title underline">End Time</h2>
            <div className="underline"></div>

            {/*Monday Inputs*/}
            <label className="monday-checkbox-label">
              <input
                id="monday-checkbox"
                name="mondayCheckbox"
                type="checkbox"
                onChange={() => setMondayChecked(!mondayChecked)}
                checked={mondayChecked}
              />
              Monday
            </label>
            <label htmlFor="monday-start-time" className="hidden-labels">
              Monday Start Time
            </label>
            <input
              type="time"
              id="monday-start-time"
              name="mondayStartTime"
              disabled={mondayChecked === false}
              onChange={(e) => setMondayStartTime(e.target.value)}
              value={mondayStartTime}
            />
            <span className="monday-to-span">To</span>
            <label htmlFor="monday-end-time" className="hidden-labels">
              Monday End Time
            </label>
            <input
              type="time"
              id="monday-end-time"
              name="mondayEndTime"
              disabled={mondayChecked === false}
              onChange={(e) => setMondayEndTime(e.target.value)}
              value={mondayEndTime}
            />

            {/*Tuesday Inputs*/}
            <label className="tuesday-checkbox-label">
              <input
                id="tuesday-checkbox"
                name="tuedayCheckbox"
                type="checkbox"
                onChange={() => setTuesdayChecked(!tuesdayChecked)}
                checked={tuesdayChecked}
              />
              Tuesday
            </label>
            <label htmlFor="tuesday-start-time" className="hidden-labels">
              Tuesday Start Time
            </label>
            <input
              type="time"
              id="tuesday-start-time"
              name="tuesdayStartTime"
              disabled={tuesdayChecked === false}
              onChange={(e) => setTuesdayStartTime(e.target.value)}
              value={tuesdayStartTime}
            />
            <span className="tuesday-to-span">To</span>
            <label htmlFor="tuesday-end-time" className="hidden-labels">
              Tuesday End Time
            </label>
            <input
              type="time"
              id="tuesday-end-time"
              name="tuesdayEndTime"
              disabled={tuesdayChecked === false}
              onChange={(e) => setTuesdayEndTime(e.target.value)}
              value={tuesdayEndTime}
            />

            {/*Wednesday Inputs*/}
            <label className="wednesday-checkbox-label">
              <input
                id="wednesday-checkbox"
                name="wednesdayCheckbox"
                type="checkbox"
                onChange={() => setWednesdayChecked(!wednesdayChecked)}
                checked={wednesdayChecked}
              />
              Wednesday
            </label>
            <label htmlFor="wednesday-start-time" className="hidden-labels">
              Wednesday Start Time
            </label>
            <input
              type="time"
              id="wednesday-start-time"
              name="wednesdayStartTime"
              disabled={wednesdayChecked === false}
              onChange={(e) => setWednesdayStartTime(e.target.value)}
              value={wednesdayStartTime}
            />
            <span className="wednesday-to-span">To</span>
            <label htmlFor="wednesday-end-time" className="hidden-labels">
              Wednesday End Time
            </label>
            <input
              type="time"
              id="wednesday-end-time"
              name="wednesdayEndTime"
              disabled={wednesdayChecked === false}
              onChange={(e) => setWednesdayEndTime(e.target.value)}
              value={wednesdayEndTime}
            />

            {/*Thrusday Inputs*/}
            <label className="thursday-checkbox-label">
              <input
                id="thursday-checkbox"
                name="thursdayCheckbox"
                type="checkbox"
                onChange={() => setThursdayChecked(!thursdayChecked)}
                checked={thursdayChecked}
              />
              Thursday
            </label>
            <label htmlFor="thursday-start-time" className="hidden-labels">
              Thursday Start Time
            </label>
            <input
              type="time"
              id="thursday-start-time"
              name="thursdayStartTime"
              disabled={thursdayChecked === false}
              onChange={(e) => setThursdayStartTime(e.target.value)}
              value={thursdayStartTime}
            />
            <span className="thursday-to-span">To</span>
            <label htmlFor="thursday-end-time" className="hidden-labels">
              Thursday End Time
            </label>
            <input
              type="time"
              id="thursday-end-time"
              name="thursdayEndTime"
              disabled={thursdayChecked === false}
              onChange={(e) => setThursdayEndTime(e.target.value)}
              value={thrusdayEndTime}
            />

            {/*Friday Inputs*/}
            <label className="friday-checkbox-label">
              <input
                id="friday-checkbox"
                name="fridayCheckbox"
                type="checkbox"
                onChange={() => setFridayChecked(!fridayChecked)}
                checked={fridayChecked}
              />
              Friday
            </label>
            <label htmlFor="friday-start-time" className="hidden-labels">
              Friday Start Time
            </label>
            <input
              type="time"
              id="friday-start-time"
              name="fridayStartTime"
              disabled={fridayChecked === false}
              onChange={(e) => setFridayStartTime(e.target.value)}
              value={fridayStartTime}
            />
            <span className="friday-to-span">To</span>
            <label htmlFor="friday-end-time" className="hidden-labels">
              Friday End Time
            </label>
            <input
              type="time"
              id="friday-end-time"
              name="fridayEndTime"
              disabled={fridayChecked === false}
              onChange={(e) => setFridayEndTime(e.target.value)}
              value={fridayEndTime}
            />
          </div>

          <div className="recording-settings">
            <div className="recording-media-types">
              <h2>Recording Media Types</h2>
              <div>
                <label className="camera-video-area">
                  <input
                    type="checkbox"
                    id="camera-video"
                    onChange={(e) => setCameraVideoChecked(!cameraVideoChecked)}
                    checked={cameraVideoChecked}
                  />
                  Camera Video
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="camera-video"
                    onChange={(e) => setProjectorChecked(!projectorChecked)}
                    checked={projectorChecked}
                  />
                  Projector
                </label>
              </div>
            </div>
            <div className="auto-publish-area">
              <label>
                <input
                  type="checkbox"
                  id="auto-publish"
                  onChange={(e) => setAutoPublishChecked(!autoPublishChecked)}
                  checked={autoPublishChecked}
                />
                Automatically publish lecture
              </label>
            </div>
          </div>
          <div className="form-button-area">
            <span>
              <button className="save-button">Save</button>
              <button className="cancel-button">Cancel</button>
            </span>
          </div>
        </form>
      </div>
    );
  } else {
    //if the page is recieving its data
    return <h1>LOADING</h1>;
  }
};

export default ProfessorSectionSettings;
