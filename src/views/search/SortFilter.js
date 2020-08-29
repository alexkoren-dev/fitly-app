import React, {useState} from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar } from "react-modern-calendar-datepicker"
import {
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdown
} from "@coreui/react"

import SortIcon from 'assets/img/sort.svg'
import CaretIcon from 'assets/img/caret.svg'

const SORT_ITEMS = [
  {label: 'DATE', value: 'DATE'},
  {label: 'WORKOUT TYPE', value: 'WORKOUT TYPE'},
  {label: 'TRAINERS', value: 'TRAINERS'},
  {label: 'RATINGS', value: 'RATINGS'}
]

const SortFilter = ({callback, value}) => {
  const [filter, setFilter] = useState('DATE')

  const onSelect = (val) => {
    // setFilter(val)
    callback(val)
  }

	return (
		<CDropdown
      className="w-100 mb-2 filter-dropdown"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link w-100 filter-button" caret={false}>
    		<img src={SortIcon} height="20"/>
    		<span className="ml-3"><b>SORT: </b></span>
    		<span className="mr-5">{value}</span>
        <img src={CaretIcon} className="caret-icon"/>
      </CDropdownToggle>
      <CDropdownMenu className="p-0 w-100 text-center" placement="bottom-end">
        {
          SORT_ITEMS.map((item, key) => 
            <CDropdownItem key={key} active={value === item.value} onClick={() => onSelect(item.value)}>
              {item.label}
            </CDropdownItem>
          )
        }
      </CDropdownMenu>
    </CDropdown>
	)
}

export default SortFilter