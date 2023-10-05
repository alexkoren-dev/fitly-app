import React, {useState, useEffect} from 'react'
import DateFilter from './DatePicker'
import SortFilter from './SortFilter'
import TrainerFilter from './TrainerFilter'
import {CButton} from "@coreui/react"

import CloseIcon from 'assets/img/close.svg'

const FilterBar = ({filters, onFilterChange, count}) => {
	const [date, setDate] = useState(null)
	const [sort, setSort] = useState('DATE')
	const [trainers, setTrainers] = useState([])

	useEffect(() => {
		onFilterChange(date, sort, trainers)
	}, [date, sort, trainers])

	useEffect(() => {
		onFilterChange(date, sort, trainers)
	}, [])

	const clearFilter = () => {
		setDate(null)
		setSort('DATE')
		setTrainers([])
	}

	return (
		<>
			<div className="d-flex flex-wrap align-items-center justify-content-center filter-bar">
				<div className="filter-item mx-3">
					<DateFilter value={date} callback={(date) => setDate(date)}/>
				</div>
				<div className="filter-item mx-3">
					<SortFilter value={sort} callback={(sort) => setSort(sort)}/>
				</div>
				<div className="filter-item mx-3">
					<TrainerFilter filters={trainers} callback={(trainers) => setTrainers(trainers)}/>
				</div>
			</div>
			<hr/>
			<CButton color="primary" className="btn-pill mb-3 float-right px-4" style={{height: 40}} onClick={() => clearFilter()}>
				<img src={CloseIcon} className="mr-3" height="15"/>
				{count} Workouts Found
			</CButton>
		</>
	)
}


export default FilterBar