import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";

const menusArr = [
  { img: `${process.env.PUBLIC_URL}/assets/images/request.svg`, text: "Approve LOR Request", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/report.svg`, text: "Report", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/create user.svg`, text: "User Creation", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/user management.svg`, text: "User Management", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/logout-icon.svg`, text: "Logout", alt: "img" },
];

ReactDOM.render(
  <React.StrictMode>
    <Header menus={menusArr} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
