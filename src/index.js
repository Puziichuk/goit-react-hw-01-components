import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import "modern-normalize/modern-normalize.css";

// ReactDOM.render(<App/>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const templete = (
// <div className="profile">
//   <div className="description">
//     <img
//       src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
//       alt="Аватар пользователя"
//       className="avatar"
//     />
//     <p className="name">Petra Marica</p>
//     <p className="tag">@pmarica</p>
//     <p className="location">Salvador, Brasil</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">1000</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">2000</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">3000</span>
//     </li>
//   </ul>
// </div>
// );

// ReactDOM.render(templete,
//   document.getElementById('root')
// );
