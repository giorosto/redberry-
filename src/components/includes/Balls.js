import React from "react"

interface BallState{
    balls: Array
}
interface BallProps{
	page: Number
}
class Balls extends React.Component<BallProps>{
	state: BallState = {
		balls:[
			{
				id:1,
				is_active:false,
				title:'Personal Info',
				href:'/personal-info',
			},
			{
				id:2,
				is_active:false,
				title:'skills page',
				href:'/skills',
			},
			{
				id:3,
				is_active:false,
				title:'skills page',
				href:'/covid',
			},
			{
				id:4,
				is_active:false,
				title:'skills page',
				href:'/insights',
			},
		], 
	}
	constructor(props){
		super()
		this.setActiveBall(props.page)
	}
	setActiveBall =(page)=>{
		this.state.balls.map((ball)=>{
			if (ball.id<=page){
				ball.is_active=true
			}
		})
	}
	getDivStyle =(bool)=>{
		return {
			background:(bool)?'red':'#ffc2c2',
			borderRadius:'11px',
			height:'15px',
			width:'15px'
		}
	}
	setInputValue =(state_name)=>{
		this.setState({
			[state_name]:this.state['firstName'],
		})
	}
	getPageUrl =(is_next)=>{
		let index=(is_next)?1:-1
		let page_id=this.props.page+index
		const next_ball=this.state.balls.find((ball, index)=>ball.id===page_id)
		if (next_ball!==undefined){
			return next_ball.href
		}	
		return "#"
	}
	render(){
		return (
			<div className="d-flex justify-content-center align-items-center">
				<a
	        		href={this.getPageUrl(false)}
					style={this.getDivStyle(true)} 
					className="bg-transparent border border-danger d-flex justify-content-center align-items-center"
				>
					<i className="font-weight-bold custom_arrow_fontsize fas fa-angle-left text-danger"></i>
	    		</a>
	        	{this.state.balls.map((ball, index) => {
		        	return 	<div 
		        				key={index+ball.id+'ball'}
		        				style={this.getDivStyle(ball.is_active)} 
		        				className="ml-3" 
		        				id={ball.id+'ball'}
	        				>
			        		</div>
		      	})}
		      	<a
		      		href={this.getPageUrl(true)}
					style={this.getDivStyle(true)}
					className="bg-transparent border border-danger ml-3 d-flex justify-content-center align-items-center"
				>
			 		<i className="font-weight-bold custom_arrow_fontsize fas fa-angle-right text-danger"></i>
	    		</a>
			</div>
		)
	}
}
export default Balls