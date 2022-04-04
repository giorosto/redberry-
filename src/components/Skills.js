import React from "react"
import Balls from "./includes/Balls"

interface MatchState{
    id: number,
    type:number,
    experience:number,
    skills:array,
}

class Skills extends React.Component{
  state: MatchState = { 
    id:0,
    experience:"",
    type:"",
    skills:[],
  }
  deleteSkill=(index)=>{
    const { skills } = this.state
    skills.splice(index, 1)
    this.resetSkillsInformation()
  }
  resetSkillsInformation=()=>{
    this.setState({
      skills:this.state.skills,
    })
  }
  addSkills=()=>{
    let obj={
      type:this.state.type,
      experience:this.state.experience
    }
    this.state.skills.push(obj)
    this.resetSkillsInformation()
  }
  setValue(variableName, event){
    this.setState({
        [variableName]:event.target.value
    })    
  }
  resetForm = () => {
    this.setState({ experience: '', type:'' })
  }
  render(){
    const { experience, skills } = this.state
    return (
      <div className="row col-12 h-100-vh">
        <div className="mt-5 col-12 col-md-6 bg-white">
          <header id="header1">
            <h2 id="title" className="mt-5 pt-5 d-flex justify-content-center align-items-center text-danger">Tell us about your skills</h2>
          </header>
          <div className="select  d-flex justify-content-center align-items-center flex-column mt-5">
           <div className="w-50">
             <select onChange={(event)=>this.setValue('type', event)} className="mt-3 custom-select custom-select-lg|custom-select-sm">
               <option value="" disabled  >Skills</option>
               <option value="HTML">html</option>
               <option value="CSS">css</option>
               <option value="JS">js</option>
               <option value="PHP">php</option>
             </select>
                {/*{this.state.HTML}*/}
           </div>
              <div className="form-group w-50 mt-3">
                <label htmlFor="exampleInputEmail1">Experience Duration in Years</label>
                <input 
                onInput={(event)=>this.setValue('experience', event)}
                value={experience}
                type="number" 
                className="form-control" 
                id="exampleInputEmail1"/>  
              </div>
            <div className="mt-2 d-flex justify-content-center align-items-end flex-column w-50">
                <button onClick={
                  ()=>{      
                    this.addSkills()
                    this.resetForm()           
                  }
                } className="btn btn-danger">Add programming language</button>                   
            </div>
            {
              skills.map((skill, index)=>{
                return  <div key={index} className="d-flex justify-content-between bg-dark rounded text-white align-items-center pt-2 pb-2 pl-3 pr-3 w-50 mt-5">
                          <div>
                           {index+1}) {skill.type}
                          </div>
                          <div>
                            {skill.experience}years
                          </div>
                          <div className="btn btn-danger" onClick={()=>{this.deleteSkill(index)}}>
                            X
                          </div>
                        </div>
              })
            }
          </div>
          <div className="mt-5 pt-5">
            <Balls page={2} />
          </div>
        </div>
        <div className="p-4 p-md-5 col-12 col-md-12 col-lg-6 bg-dark left-div flex-column align-items-center">
          <header id="header2">
            <h2 id="title" className="col-12 col-md-6  mt-5 pt-5 text-danger">A bit about our battles</h2>
          </header>
          <div className="col-12 col-md-8 mt-5 pt-5 mt-lg-0 text-white">
            <p>
              As we said, Redberry has been on the field for quite some time now,
              and we have touched and embraced a variety of programming languages,
              technologies, philosophies, and frameworks. We are battle-tested in
              PHP Laravel Stack with Vue.js, refined in React, and allies with
              Serverside technologies like Docker and Kubernetes, and now we have
              set foot in the web3 industry.
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default Skills