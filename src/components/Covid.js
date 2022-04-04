import React from "react"
import Balls from "./includes/Balls"


interface MatchState{
    id: number,
    work_preference:string,
    covid_contact:string,
    contact_date:string,
    vaccination_status:string,
    vaccination_date:string,
}
class Covid extends React.Component{
	state: MatchState = { 
		id:0,
		work_preference:"",
		covid_contact:"",
		contact_date:"",
		vaccination_status:"",
		vaccination_date:"" 
	}
	setValue(id,event){
		console.log(id, event.target.id)
		this.setState({
			[id]:event.target.id
		})
	}
	setDateValue(variableName,event){
		console.log(variableName,event.target.value)
		this.setState({
			[variableName]:event.target.value
		})
	}
	render(){
		return (
			<div className="row col-12 h-100-vh">
				<div className="mt-5 bg-white col-12 col-md-6 d-flex justify-content-center">
			    <div className="col-md-8"> 		      	
			      <header id="header1">
			        <h2 id="title" className="mt-5 text-danger d-flex justify-content-center align-items-center">Covid Stuff</h2>
			      </header>
			      	<form id="form" className="mt-5">
				      	<div className="form" id="work">
					        <h4>how would you prefer to work?</h4>
					        <div className="radio text-black" onChange={(event)=>this.setValue('work_preference', event)}>
					          	<div className="form-group">
						          	<input type="radio" name="work" id="sairme" /><label htmlFor="sairme">From Sairme Office</label>
				          		</div>
					          	<div className="form-group">
						          	<input type="radio" name="work" id="from_home" /><label htmlFor="from_home">From Home</label>			          		
				          		</div>
					          	<div className="form-group">
						          	<input type="radio" name="work" id="hybrid"/><label htmlFor="hybrid">Hybrid</label>
				          		</div>		          		
					        </div>
					        {/*{this.state.id}*/}
				      	</div>
				      	<div className="form" id="covid">
					        <h4>Did you contact covid 19? :(</h4>
					        <div className="radio" onChange={(event)=>this.setValue('covid_contact', event)}>
				          		<div className="form-group">
						          	<input type="radio" name="work" id="covid_positive" /><label htmlFor="covid_positive">Yes</label>
				          		</div>
				          		<div className="form-group">
						          	<input type="radio" name="work" id="covid_negative" /><label htmlFor="covid_negative">No</label>
				          		</div>
					        </div>
				      	</div>
				      <div className="form" id="calendar">
				        <h4>When?</h4>
				        <div className="date">
				          <input id="when_date"
				          	onChange={(event)=>this.setDateValue('contact_date', event)}
				            type="date"
				            placeholder="Date"
				            className="form-control"
				          />
				         {/* <label htmlFor="when_date">
				          	<img src="./assets/images/calendar.png" alt="calendar-icon" />
				          </label>*/}

				        </div>
				      </div>
				      <div className="form" id="vaccinated">
				        <h4>Have you been vaccinated?</h4>
					        <div className="radio" onChange={(event)=>this.setValue('vaccination_status', event)}>
					          	<div className="form-group">
							        <input type="radio" name="work" id="vaccinated_yes" /><label htmlFor="vaccinated_yes">Yes</label>
					          	</div>
				          		<div className="form-group">
							        <input type="radio" name="work" id="vaccinated_no" /><label htmlFor="vaccinated_no">No</label>
				          		</div>
					        </div>
				      </div>
				      <div className="form" id="calendar">
				        <h4>When did you get your last covid vaccine?</h4>
				        <div className="date">
				          <input id="vaccine_date"
				          	onChange={(event)=>this.setDateValue('vaccination_date', event)}
				            type="date"
				            placeholder="Date"
				            className="form-control"
				          />
				          {/*<label htmlFor="vaccine_date">
				          	<img src="./assets/images/calendar.png" alt="calendar-icon" />
				          </label>*/}
				        </div>
				      </div>
				    	</form>
				    	<div className="mt-5 pt-5 pb-5 ">
	           			 	<Balls page={3} />
	          			</div>
				    </div>
			    </div>
			    <div className="mt-5 mt-lg-0 col-12 col-md-6 bg-dark d-flex justify-content-center">
			      	<div className="col-md-8 justify-content-center align-items-center">
				      <header id="header2">
				        <h2 id="title" className="mt-5 pt-5 d-flex justify-content-center align-items-center text-danger">Redberry Covid Policies</h2>
				      </header>
				      <div className="text-white mt-5">				        
				          As this infamous pandemic took over the world, we adjusted our working
				          practices so that our employees can be as safe and comfortable as
				          possible. We have a hybrid work environment, so you can either work
				          from home or visit our lovely office on Sairme Street. If it was up to
				          us, we would love you to see us in the office because we think
				          face-to-face communications > Zoom meetings. Both on the fun and
				          productivity scales.				      
				      </div>
				    </div>  
			    </div>
			</div>
		)
	}
}

export default Covid