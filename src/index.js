import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";

const hodHeader = [
  { img: `${process.env.PUBLIC_URL}/assets/images/request.svg`, text: "Approve LOR Request", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/report.svg`, text: "Report", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/create user.svg`, text: "User Creation", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/user management.svg`, text: "User Management", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/logout-icon.svg`, text: "Logout", alt: "img" },
];

const tprHeader = [
  { img: `${process.env.PUBLIC_URL}/assets/images/request.svg`, text: "Approve LOR Request", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/report.svg`, text: "Report", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/logout-icon.svg`, text: "Logout", alt: "img" },
];

const studentHeader = [
  { img: `${process.env.PUBLIC_URL}/assets/images/home.svg`, text: "Home", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/request.svg`, text: "LOR Request", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/card.svg`, text: "Admission Card", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/draft.svg`, text: "LOR Draft Status", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/logout-icon.svg`, text: "Logout", alt: "img" },
];

const facultyHeader = [
  { img: `${process.env.PUBLIC_URL}/assets/images/request.svg`, text: "LOR Request Form", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/draft.svg`, text: "LOR Draft Status", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/report.svg`, text: "Report", alt: "img" },
  { img: `${process.env.PUBLIC_URL}/assets/images/logout-icon.svg`, text: "Logout", alt: "img" },
];

ReactDOM.render(
  <React.StrictMode>
    <Header menus={studentHeader} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
