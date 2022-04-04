import React from "react"

class Submit extends React.Component {
	render(){
		return(
			<div className="h-100-vh d-flex flex-column justify-content-center align-items-center bg-dark">
			<div className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
				<div className="mt-4">
					<a href="/personal-info" className="btn btn-danger pl-5 pr-5 pt-2 pb-2" style={{borderRadius:'25px'}}>
					  Submit
					</a>
				</div>
				<div className="mt-4">
					<a href="/" className="text-white pl-4 pr-4 pt-2 pb-2 ">
					  go back
					</a>
				</div>
			</div>
			</div>
				

		)
	}
}

export default Submit