import React from "react"
import Balls from "./includes/Balls"


interface MatchState{
    id: number,
    devtalk_attendance:string,
    about_devtalk:string,
    special:string
}


class Insights extends React.Component{
  state: MatchState = { 
    id:0,
    variableName:"",
    devtalk_attendance:"",
    about_devtalk:"",
    special:""
  }
  setValue(id,event){
    console.log(id, event.target.id)
    this.setState({
      [id]:event.target.id
    })
  }
  setInputValue(variableName,event){
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
              <h2 id="title" className="mt-5 text-danger d-flex justify-content-center align-items-cente">What about you?</h2>
            </header>
            <form id="form">
              <div className="form mt-5">
                <label htmlFor="attend">
                  Would you attend Devtalks and maybe also organize your own?
                </label>
                <div className="radio">
                  <div className="radio" onChange={(event)=>this.setValue('devtalk_attendance', event)}>
                      <div className="form-group">
                      <input type="radio" name="work" id="attend_yes" /><label htmlFor="attend_yes">Yes</label>
                      </div>
                      <div className="form-group">
                      <input type="radio" name="work" id="attend_no" /><label htmlFor="attend_no">No</label>
                      </div>
                  </div>                  
                </div>
              </div>
              <div className="form mt-5">
                <label htmlFor="speak">What would you speak about at Devtalk?</label>
                <textarea id="speak" className="form-control" placeholder="I would..." onInput={(event)=>this.setInputValue('about_devtalk', event)}></textarea>
              </div>
              <div className="form mt-5">
                <label htmlFor="special">Tell us something special</label>
                <textarea id="special" className="form-control" placeholder="I..." onInput={(event)=>this.setInputValue('special', event)}></textarea>
              </div>
              <div className="mt-5 pt-5">
                <Balls page={4} />
              </div>
            </form>
        </div>
      </div>
          <div className="mt-5 mt-lg-0 col-12 col-md-6 bg-dark d-flex justify-content-center">
              <div className="col-md-6 justify-content-center align-items-center">
              <header id="header2">
                <h2 id="title" className="mt-5 pt-5 d-flex justify-content-center align-items-center text-danger">Redberrian Insights</h2>
              </header>
              <div className="text-white mt-5">               
                  We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!              
              </div>
            </div>  
          </div> 
      </div>
    )
  }
}

export default Insights