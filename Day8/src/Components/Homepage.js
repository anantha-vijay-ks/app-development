import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
          }

          .video-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
          }

          .video-background video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .content {
            text-align: center;
            color: #ffffff;
          }

          .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .buttons-container {
            display: flex;
            justify-content: center;
          }

          .button {
            padding: 10px 20px;
            margin: 0 10px;
            font-size: 18px;
            background-color: #f2f2f2;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="content">
        <h1 className="title">Welcome to Tickets New</h1>
        <div className="buttons-container">
          <Link to="/Login">
        <button className="button">Login</button>
        </Link>
        <Link to="/register">
          <button className="button">Signup</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;