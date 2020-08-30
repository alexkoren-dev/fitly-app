import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import {
  CLink,
  CRow,
  CCol,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import Select from "react-select"
import CounterInput from "react-counter-input"
import { DatePicker, Slider } from "antd"
import moment from "moment"
import { Formik } from "formik"

import WorkoutActions from "services/workouts"

import CLoader from "components/CLoader"

import object from "yup/lib/object"
import string from "yup/lib/string"
import array from "yup/lib/array"
import number from "yup/lib/number"

import "./style.scss"

import IndoorBike from "assets/img/IndoorBike.svg"
import Elliptical from "assets/img/Elliptical.svg"
import IndoorRun from "assets/img/IndoorRun.svg"
import IndoorWalk from "assets/img/IndoorWalk.svg"
import HIITWorkout from "assets/img/HIITWorkout.svg"
import Core from "assets/img/core.svg"
import Cross from "assets/img/cross.svg"
import Pilate from "assets/img/pilate.svg"
import Kick from "assets/img/kick.svg"
import Yoga from "assets/img/yoga.svg"
import Dance from "assets/img/dance.svg"
import JumpingRope from "assets/img/jumping-rope.svg"
import Weight from "assets/img/weight.svg"

const Yup = {
  object,
  string,
  array,
  number,
  ref: () => {},
}

const validationSchema = Yup.object().shape({
  totalUserLimit: Yup.number(),
  duration: Yup.number().required("Please select duration"),
  timezone: Yup.string().required("Please select timezone"),
  perUserCharge: Yup.number(),
  scheduledTime: Yup.number().required("Host time is required"),
  requirement: Yup.string(),
  typeDetails: Yup.string().required("Please select workout"),
})

const WORKOUT_TYPES = {
  "Indoor Bike": IndoorBike,
  Elliptical: Elliptical,
  "Indoor Run": IndoorRun,
  "Indoor Walk": IndoorWalk,
  "Jump Rope": JumpingRope,
  "HIIT Workout": HIITWorkout,
  Dance: Dance,
  Boxing: Kick,
  "Weight Training": Weight,
  "Core Training": Core,
  "Cross Training": Cross,
  Yoga: Yoga,
  Pilates: Pilate,
}

const TIME_OPTIONS = [
  { label: "30 min", value: 30 },
  { label: "60 min", value: 60 },
  { label: "90 min", value: 90 },
]

const TIMEZONES = [
  { label: "Central Daylight Time Chicago (GMT-5)", value: "CDT" },
  { label: "Mountain Daylight Time Denver(GMT-6)", value: "MDT" },
  { label: "Mountain Standard Time Phoenix (GMT-7)", value: "MST" },
  { label: "Pacific Daylight Time Los Angeles (GMT-7)", value: "PDT" },
  { label: "Alaska Daylight Time Anchorage (GMT-8)", value: "ADT" },
  { label: "Hawaii-Aleutian Standard Time Honolulu(GMT-10)", value: "HAST" },
]

const CHARGE_MARKS = {
  10: "$10",
  15: "$15",
  20: "$20",
  25: "$25",
  30: "$30",
  35: "$35",
  40: "$40",
  45: "$45",
  50: "$50",
  55: "$55",
  60: "$60",
}

const WorkoutItem = ({ selected, onSelect, icon, title }) => (
  <div
    className={`workout-item mx-2 p-3 mb-3 text-center ${selected && "active"}`}
    onClick={() => onSelect(title)}
  >
    <img src={icon} width="80" />
    <p className="mb-0 mt-2">{title}</p>
  </div>
)

const WorkoutPage = (props) => {
  const dispatch = useDispatch()
  const workoutId = props.match.params.id

  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [selectedWorkout, setWorkout] = useState(null)

  const [initialValues, setInitialValues] = useState({
    totalUserLimit: "1",
    duration: "",
    timezone: "",
    perUserCharge: 10,
    scheduledTime: parseInt(moment(new Date()).format("x")),
    requirement: "",
    typeDetails: "",
  })

  useEffect(() => {
    // setLoading(true)
    // getUserProfile()

    if (workoutId) {
      setLoading(true)
      dispatch(WorkoutActions.getWorkoutById(workoutId))
        .then((res) => {
          const workout = res

          setInitialValues(workout)
          setLoading(false)
          setWorkout(workout.typeDetails)
        })
        .catch((err) => {
          setLoading(false)
        })
    }
  }, [])

  const handleSubmit = (values) => {
    setSaving(true)
    dispatch(
      WorkoutActions.createOrSaveWorkout(
        {
          ...values,
          totalUserLimit: parseInt(values.totalUserLimit),
          duration: parseInt(values.duration),
          perUserCharge: parseInt(values.perUserCharge),
          scheduledTime: parseInt(values.scheduledTime),
        },
        workoutId
      )
    )
      .then((res) => {
        setSaving(false)
        toast.success(
          `Workout is ${workoutId ? "updated" : "created"} successfully!`,
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        )
        props.history.push("/user/profile")
      })
      .catch((err) => {
        toast.error("Something went wrong. Please try again!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        setSaving(false)
      })
  }

  const disabledDate = (current) => {
    return current && current <= moment().endOf("day")
  }

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 500 }}
      >
        <CLoader color="#5063EE" width="50" height="50" type="TailSpin" />
      </div>
    )

  return (
    <div className="workout-page p-4">
      <CRow>
        <CCol xs="12">
          <div className="bg-primary border-radius p-3 text-center mb-4">
            <h2 className="text-white mb-1">
              <b>Let’s change lives</b>
            </h2>
            <p className="mb-0">Let’s change lives , Let’s change lives </p>
          </div>
        </CCol>
        <CCol xs={12} className="px-5">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <CForm onSubmit={handleSubmit} className="profile-form mx-auto">
                <CLabel className="text-primary mb-3 px-2">
                  <b>How do you wanna burn it. (Select one):</b>
                </CLabel>
                <CFormGroup className="mb-3">
                  <div className="d-flex flex-wrap ">
                    {Object.keys(WORKOUT_TYPES).map((key) => (
                      <WorkoutItem
                        key={key}
                        title={key}
                        icon={WORKOUT_TYPES[key]}
                        selected={selectedWorkout === key}
                        onSelect={(val) => {
                          setWorkout(val)
                          handleChange("typeDetails")(val)
                        }}
                      />
                    ))}
                  </div>
                  {errors.typeDetails && touched.typeDetails && (
                    <div className="invalid-feedback">{errors.typeDetails}</div>
                  )}
                </CFormGroup>

                <CFormGroup row>
                  <CCol lg={4} className="mb-3">
                    <CLabel className="text-primary">
                      <b>What would user need? </b>
                    </CLabel>
                    <CInput
                      style={{ height: 38 }}
                      id="requirement"
                      name="requirement"
                      placeholder="For example A yoga mat"
                      value={values.requirement}
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol lg={4} className="mb-3 counter-input">
                    <CLabel className="text-primary">
                      <b>How many people you wanna in this sessions</b>
                    </CLabel>
                    <CounterInput
                      min={1}
                      max={10}
                      count={parseInt(values.totalUserLimit)}
                      inputStyle={{
                        minWidth: 80,
                        height: 37,
                        border: "none",
                        backgroundColor: "white",
                      }}
                      wrapperStyle={{
                        border: "1px solid #d8dbe0",
                        borderRadius: 3,
                        height: 38,
                        width: "fit-content",
                      }}
                      btnStyle={{
                        backgroundColor: "#5063EE",
                        color: "white",
                        borderRadius: 3,
                        padding: "8px 12px",
                      }}
                      onCountChange={(count) =>
                        handleChange("totalUserLimit")(count.toString())
                      }
                    />
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <CLabel className="text-primary">
                      <b>How much each participant should pay?</b>
                    </CLabel>
                    <Slider
                      marks={CHARGE_MARKS}
                      max={60}
                      min={10}
                      defaultValue={values.perUserCharge}
                      onChange={(val) =>
                        handleChange("perUserCharge")(val.toString())
                      }
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol lg={4} className="mb-3">
                    <CLabel className="text-primary">
                      <b>When do you wanna host? </b>
                    </CLabel>
                    <DatePicker
                      className="w-100"
                      style={{ height: 38 }}
                      format="YYYY-MM-DD HH:mm:ss"
                      disabledDate={disabledDate}
                      defaultValue={moment(new Date(values.scheduledTime))}
                      onChange={(date) => {
                        handleChange("scheduledTime")(date.format("x"))
                      }}
                      showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                    />
                    {errors.scheduledTime && touched.scheduledTime && (
                      <div className="invalid-feedback">{errors.scheduledTime}</div>
                    )}
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <CLabel className="text-primary">
                      <b>Your Timezone?</b>
                    </CLabel>
                    <Select
                      id="timezone"
                      placeholder=""
                      options={TIMEZONES}
                      classNamePrefix={"react-select"}
                      isSearchable={false}
                      defaultValue={
                        TIMEZONES.filter((tz) => tz.value === values.timezone)[0]
                      }
                      onChange={(val) => {
                        handleChange("timezone")(val.value)
                      }}
                    ></Select>
                    {errors.timezone && touched.timezone && (
                      <div className="invalid-feedback">{errors.timezone}</div>
                    )}
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <CLabel className="text-primary">
                      <b>How long you gonna sweat?(Min)</b>
                    </CLabel>
                    <Select
                      id="duration"
                      options={TIME_OPTIONS}
                      placeholder=""
                      classNamePrefix={"react-select"}
                      defaultValue={
                        TIME_OPTIONS.filter((tz) => tz.value === values.duration)[0]
                      }
                      isSearchable={false}
                      onChange={(val) => {
                        handleChange("duration")(val.value.toString())
                      }}
                    ></Select>
                    {errors.duration && touched.duration && (
                      <div className="invalid-feedback">{errors.duration}</div>
                    )}
                  </CCol>
                </CFormGroup>

                <div className="d-flex flex-wrap justify-content-end mt-5 mb-3">
                  <CButton
                    color="primary"
                    type="submit"
                    className="px-4 mx-2 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
                    style={{ width: 170, height: 40 }}
                  >
                    {saving ? (
                      <CLoader />
                    ) : workoutId ? (
                      "UPDATE SESSION"
                    ) : (
                      "CREATE SESSION"
                    )}
                  </CButton>

                  <Link to={"/user/profile"}>
                    <CButton
                      color="secondary"
                      type="button"
                      className="ml-2 px-4 btn-pill text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
                      disabled={loading}
                      style={{ width: 170, height: 40 }}
                    >
                      × CANCEL
                    </CButton>
                  </Link>
                </div>
              </CForm>
            )}
          </Formik>
        </CCol>
      </CRow>
    </div>
  )
}

export default WorkoutPage
