import React, {useState} from 'react'
import moment from 'moment'
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar } from "react-modern-calendar-datepicker"
import {
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdown
} from "@coreui/react"

import CalendarIcon from 'assets/img/calendar-2.svg'
import CaretIcon from 'assets/img/caret.svg'

const DateFilter = ({callback, value}) => {
	const [filter, setFilter] = useState(null)

	const onChange = (value) => {
		// setFilter(value)
  	document.getElementById("toggleBtn").click();
  	callback(value)
	}

	return (
		<CDropdown
      className="w-100 mb-2 filter-dropdown"
      id="filterDropwDown"
      direction="down"
    >
      <CDropdownToggle className="value-header-nav-link w-100 filter-button" caret={false} id="toggleBtn">
    		<img src={CalendarIcon} height="30"/>
    		<span className="ml-3"><b>FOR: </b></span>
    		<span className="mr-5">
    			{value? moment(new Date(value.year, value.month-1, value.day)).format('MMMM DD, YYYY')
    				: 'Select Date'
    			}</span>
    		<img src={CaretIcon} className="caret-icon"/>
      </CDropdownToggle>
      <CDropdownMenu className="p-0 w-100" id="calendarMenu" placement="bottom-end">
        <Calendar
					value={value}
					onChange={(value) => onChange(value)}
		      shouldHighlightWeekends
		    />
      </CDropdownMenu>
    </CDropdown>
	)
}

export default DateFilter