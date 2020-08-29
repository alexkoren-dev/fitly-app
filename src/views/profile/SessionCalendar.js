import React, { lazy } from "react"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar } from "react-modern-calendar-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import CIcon from "@coreui/icons-react"

const SessionCaneldar = () => {
  const workouts = useSelector((state) => state.workouts.workoutSessions)

  const dates = workouts.map((workout) => ({
    year: new Date(workout.scheduledTime).getFullYear(),
    month: new Date(workout.scheduledTime).getMonth() + 1,
    day: new Date(workout.scheduledTime).getDay(),
  }))

  return (
    <Calendar
      value={dates}
      calendarClassName="responsive-calendar"
      shouldHighlightWeekends
    />
  )
}

export default SessionCaneldar
