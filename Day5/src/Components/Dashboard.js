import React from 'react';
import TopBar from './TopBar';
import notcompleted from '../Components/Assets/notcompleted.jpg';
import workinpro from '../Components/Assets/workinprogress.jpg';
import workcompleted from '../Components/Assets/completedwork.jpg';
import './Dashboard.css';


export const Dashboard = () => {
  return (
    <>
    <TopBar/>
    <div>
      <div>
      <h1>Welcome to the Dashboard!</h1>
      
      <div className="dashboard-features">
        <div className="feature">
          <img src={notcompleted} alt="Feature 1" />
          <p>Work not Completed!</p>
        </div>
        <div className="feature">
          <img src={workinpro} alt="Feature 2" />
          <p>Work in progress</p>
        </div>
        <div className="feature">
          <img src={workcompleted} alt="Feature 3" />
          <p>Work Accomplished :)</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
