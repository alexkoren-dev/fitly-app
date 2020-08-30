import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { List, Card, Empty } from 'antd'
import FlipMove from "react-flip-move"
import moment from 'moment'
import CLoader from "components/CLoader"
import StripeModal from "../static/landing/StripeModal"
import {
  CCol,
  CButton
} from "@coreui/react"

import WorkoutActions from "services/workouts"

import WorkoutItem from 'components/WorkoutItem'
import FilterBar from './FilterBar'

import './style.scss'

const SearchPage = (props) => {
	const dispatch = useDispatch()
	const searchKey = props.match.params.keyword

	const [workouts, setWorkouts] = useState([])
	const [filteredWorkouts, setFilteredWorkouts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		WorkoutActions.getAllWorkOuts(searchKey).then((res) => {
			setWorkouts(res.workouts)
			setFilteredWorkouts(sortWorkouts('DATE', res.workouts))
      setLoading(false)
    })
	}, [])

	const getDateFromMiliseconds = (miliseconds) => {
		const date = new Date(miliseconds)

		return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
	}

	const compareString = (a, b) => {
		const str1 = a.toUpperCase();
	  const str2 = b.toUpperCase();

	  let comparison = 0;
	  if (str1 > str2) {
	    comparison = 1;
	  } else if (str1 < str2) {
	    comparison = -1;
	  }
	  return comparison;
	}

	const sortWorkouts = (sort, data) => {
		if(sort === 'DATE')
			return data.sort((a, b) => a.scheduledTime - b.scheduledTime)
		if(sort === 'WORKOUT TYPE')
			return data.sort((a, b) => compareString(a.typeDetails, b.typeDetails))
		if(sort === 'TRAINERS')
			return data.sort((a, b) => compareString(a.trainerDetails.firstName, b.trainerDetails.firstName))
		if(sort === 'RATINGS')
			return data.sort((a, b) => a.trainerDetails.ratingDetails.length - b.trainerDetails.ratingDetails.length)

		return data
	}

	const onFilterChange = (date, sort, trainers) => {
		const dateString = date?`${date.year}-${date.month}-${date.day}`:''
		setFilteredWorkouts(sortWorkouts(sort, workouts.filter(workout => {
			return (date?getDateFromMiliseconds(workout.scheduledTime) === dateString:workout.scheduledTime)
		})))
	}

	return (
		<div className="search-page p-4 mx-4 mt-4">
			<StripeModal {...props} />
			<FilterBar count={filteredWorkouts.length} onFilterChange = {(date, sort, trainers) => onFilterChange(date, sort, trainers)}/>
			{
				loading?
		      <div
		        className="d-flex justify-content-center align-items-center"
		        style={{ height: 500 }}
		      >
		        <CLoader color="#5063EE" width="50" height="50" type="TailSpin" />
		      </div>
		      :
					<FlipMove className={"d-flex flex-wrap w-100"} duration={300}>
						{filteredWorkouts.length == 0 && 
							<div
				        className="d-flex justify-content-center align-items-center w-100"
				        style={{ height: 500 }}
				      >
				      	<Empty/>
				      </div>
				    }
			      {filteredWorkouts.map((item) => (
			        <div key={item.id} className="px-2 col-lg-3 col-md-6">
			          <WorkoutItem workout={item}/>
			        </div>
			      ))}
			    </FlipMove>
			}
		</div>
	)
}

export default SearchPage