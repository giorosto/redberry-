import React from "react"

interface MatchState{
    id: number
}

class Index extends React.Component{
	state: MatchState = { id:0 }
	render(){
		return (
			<div 
				className="h-100-vh d-flex flex-column justify-content-center align-items-center"
				style={
					{
						background: 'black',
  						backgroundImage: 'url(./assets/images/stars.png)'
					}
				}
			>
				<div className="mt-5">
					<h1 className="custom-h-fontsize text-danger font-weight-bold">Welcome Rocketeer !</h1>
				</div>
				<div className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
					<div className="mt-4">
						<a href="/personal-info" className="btn btn-danger pl-5 pr-5 pt-2 pb-2" style={{borderRadius:'25px'}}>
						  Start Questionnaire
						</a>
					</div>
					<div className="mt-4">
						<a href="#" className="btn btn-transparent text-white pl-4 pr-4 pt-2 pb-2">
						  Submitted Applications
						</a>
					</div>
				</div>
				<div>
					<img src="./assets/images/rocketman.png" alt="rocketman" />
				</div>
			</div>
		)
	}
}

export default Index