import React, {useState, useEffect} from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar } from "react-modern-calendar-datepicker"
import {
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdown
} from "@coreui/react"

import FilterIcon from 'assets/img/filter.svg'
import CaretIcon from 'assets/img/caret.svg'

const SORT_ITEMS = [
  {label: 'DATE', value: 'DATE'},
  {label: 'WORKOUT TYPE', value: 'WORKOUT TYPE'},
  {label: 'TRAINERS', value: 'TRAINERS'},
  {label: 'RATINGS', value: 'RATINGS'}
]

const TrainerFilter = ({callback, filters}) => {
  // const [filters, setFilter] = useState([])
  const [trainers, setTrainers] = useState([])
  const [filterLabel, setFilterLabel] = useState('')

  useEffect(() => {
    async function getTrainersName() {
      setTrainers([
        {name: 'Antyta Ali', id:"12"},
        {name: 'Antyta Ali', id:"123"},
        {name: 'Antyta Ali', id:"123131"},
        {name: 'Antyta Ali', id:"12331"},
      ])
    }

    getTrainersName()
  }, [])

  const onCheck = (value, item) => {
    let newFilter = Object.assign([], filters)

    if(value) {
      newFilter.push(item.id)
      // setFilter(newFilter)
    } else {
      newFilter = newFilter.filter(fil => fil !== item.id)
      // setFilter(newFilter)
    }

    if(newFilter.length > 1)
      setFilterLabel(`${item.name} and ${newFilter.length-1} more`)
    else setFilterLabel(`${item.name}`)

    callback(newFilter)
  }

	return (
		<CDropdown
      className="w-100 mb-2 filter-dropdown"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link w-100 filter-button" caret={false}>
    		<img src={FilterIcon} height="20"/>
    		<span className="ml-3"><b>FILTER OUT: </b></span>
    		<span className="mr-5">{filters.length > 0?filterLabel: 'Trainers name'}</span>
        <img src={CaretIcon} className="caret-icon"/>
      </CDropdownToggle>
      <CDropdownMenu className="p-0 py-2 w-100 text-center" placement="bottom-end">
        {
          trainers.map((item, key) => 
            <div className="item-row px-3 pt-1 text-left" key={key} >
              <label className="custom-checkbox custom-control">
                <input 
                  className="custom-control-input"
                  type="checkbox"
                  id={item.id}
                  name={item.id}
                  onChange={(e) => {
                    onCheck(e.target.checked, item)
                  }}
                />
                <label className="custom-control-label" htmlFor={item.id}>
                  {item.name}
                </label>
              </label>
            </div>
          )
        }
      </CDropdownMenu>
    </CDropdown>
	)
}

export default TrainerFilter