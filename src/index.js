import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css'
import reportWebVitals from './reportWebVitals'
import Index from './components/Index'
import PersonalInfo from './components/PersonalInfo'
import Skills from './components/Skills'
import Covid from './components/Covid'
import Insights from './components/Insights'
import Submit from './components/Submit'
import Thanks from './components/thanks'
import Submited from './components/SubForms'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Index />} />
        <Route path="/personal-info" caseSensitive={false} element={<PersonalInfo />} />
        <Route path="/skills" caseSensitive={false} element={<Skills />} />
        <Route path="/covid" caseSensitive={false} element={<Covid />} />
        <Route path="/insights" caseSensitive={false} element={<Insights />} />
        <Route path="/Submit-info" caseSensitive={false} element={<Submit />} />
        <Route path="/completed-thanks" caseSensitive={false} element={<Thanks />} />
        <Route path="/submited-forms" caseSensitive={false} element={<Submited />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
