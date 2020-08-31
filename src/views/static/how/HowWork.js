import React from "react"
import {
  CButton,
  CCard,
  CCol,
  CRow,
} from "@coreui/react"
import Lottie from 'react-lottie';
import animationData1 from 'assets/lottie/01_Signup.json'
import animationData2 from 'assets/lottie/02_Search.json'
import animationData3 from 'assets/lottie/03_Easy.json'
import animationData4 from 'assets/lottie/04_Sweat.json'


const ForTrainers = [
	{animation: animationData1, label: "Sign up as a fitnesss Enthusiastic it's free"},
	{animation: animationData2, label: 'Sign up as a fitnesss'},
	{animation: animationData3, label: 'Sign up as a fitnesss'},
	{animation: animationData4, label: 'Sign up as a fitnesss'},
]

const ForUsers = [
	{animation: animationData1, label: "Sign up as a fitnesss Enthusiastic it's free"},
	{animation: animationData2, label: 'Sign up as a fitnesss'},
	{animation: animationData3, label: 'Sign up as a fitnesss'},
	{animation: animationData4, label: 'Sign up as a fitnesss'},
]


const LottieCard = ({data, index}) =>
	<CCard className="pt-4 px-3 mt-3" style={{borderRadius: 20}}>
		<div style={{borderRadius: '50%', width: 40, height: 40, top: -20, left: 20}} 
			className="badge position-absolute bg-primary d-flex align-items-center justify-content-center">
			<h5 className="text-center text-white mb-0">{index}</h5>
		</div>
		<p className="text-center text-dark mb-0">{data.label}</p>
		<Lottie 
			options={{
				loop: true,
			  autoplay: true, 
			  animationData: data.animation,
			  rendererSettings: {
			    preserveAspectRatio: 'xMidYMid slice'
			  }
			}}
      height="100%"
      width="100%"
    />
	</CCard>

const HowItWorks = () => {
	return (
		<div className="how-it-works p-4">
			<h2 className="text-center text-dark mt-3 mb-1"><strong>How Fitly works?</strong></h2>
			<p className="text-dark text-center">PLACEholder for test forPLACEholder for test forPLACEholder for test forPLACEholder for test forPLACEholder for test forPLACEholder for test forPLACEholder for test forPLACEholder for test for
			</p>
			<h4 className="text-dark mt-5 mb-4"><strong>FITLY FOR TRAINERS</strong></h4>
			<CRow>
				{
					ForTrainers.map((lottie, key) => 
						<CCol lg={3} key={key}>
							<LottieCard data={lottie} index={key+1}/>
						</CCol>
					)
				}
			</CRow>
			<h4 className="text-dark mt-5 mb-4"><strong>FITLY FOR YOU</strong></h4>
			<CRow>
				{
					ForUsers.map((lottie, key) => 
						<CCol lg={3} key={key}>
							<LottieCard data={lottie} index={key+1}/>
						</CCol>
					)
				}
			</CRow>
		</div>
	)
}

export default HowItWorks