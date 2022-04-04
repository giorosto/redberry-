import React from "react"
import Balls from "./includes/Balls"

interface PersonalInfoState{
	firstName:string,
	lastName:string,
	email:string,
	mobilePhone:number,
}

class PersonalInfo extends React.Component<MatchParams>{
	state : PersonalInfoState = { 
		firstName:"", 
		lastName:"", 
		email:"",
		mobilePhone:"" 
	}
	setInputValue(variableName, event){
		console.log(variableName,event.target.value)
		this.setState({
			[variableName]:event.target.value
		})
	}
	render(){
		return (
			<div className="row col-12 h-100-vh mr-0 ml-5 pr-0 pl-0">
				<div className="p-4 p-md-5 col-12 col-md-12 col-lg-6 bg-white left-div flex-column align-items-center">
			        <header className="col-12" >
		          		<h1 className="text-danger font-weight-bold">
		            		Hey, Rocketeer, what are your coordinates?
		          		</h1>
			        </header>
			        <div className="col-12 w-100 mt-5 pt-5 pb-0 mb-0 d-flex justify-content-center">
			        	<div className="col-12 col-sm-9 col-md-9">
		        		 	<div className="w-100">
					            <input
					              type="text"
					              onInput={(event)=>this.setInputValue('firstName', event)}
					              className="pl-5 pr-5 pt-2 pb-2 border border-secondary bg-white text-black w-100"
					              placeholder="First Name"
					              required
					            />
				          	</div>
				          	<div className="w-100 mt-4">
					            <input
					              type="text"
					              onInput={(event)=>this.setInputValue('lastName', event)}
					              className="pl-5 pr-5 pt-2 pb-2 border border-secondary bg-white text-black w-100"
					              placeholder="Last Name"
					              required
					            />
				          	</div>
				          	<div  className="w-100 mt-4">
					            <input
					              type="email"
					              onInput={(event)=>this.setInputValue('email', event)}
					              className="pl-5 pr-5 pt-2 pb-2 border border-secondary bg-white text-black w-100"
					              placeholder="E mail"
					              required
					            />
				          	</div>
				          	<div  className="w-100 mt-4">
					            <input
					              type="tel"
					              onInput={(event)=>this.setInputValue('mobilePhone', event)}
					              className="pl-5 pr-5 pt-2 pb-2 border border-secondary bg-white text-black w-100"
					              placeholder="+995 5__ __ __ __"
					              required
					            />
				          	</div>
			        	</div>
			        </div>
		        	<div className="pt-5 mt-0 mt-md-5 col-12 d-flex justify-content-center align-items-center">
			        	<Balls page={1} />
			        </div>
		      	</div>
		      	<div  className="p-4 p-md-5 col-md-12 col-lg-6 text-white right-div">
			        <header id="header2">
			          <h1 id="title" className="title-2 text-danger font-weight-bold">Redberry Origins</h1>
			        </header>
			        <div className="text mt-5 pt-5">
			          <p>
			            You watch “What? Where? When?” Yeah. Our founders used to play it.
			            That’s where they got a question about a famous American author and
			            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
			            exact name and he answered Ray Redberry. And at that moment, a name
			            for a yet to be born company was inspired - Redberry 😇
			          </p>
			        </div>
		      	</div>
			</div>
		)
	}
}

export default PersonalInfo