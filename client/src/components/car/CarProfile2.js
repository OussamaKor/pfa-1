import React, { useState, useEffect } from "react";


import "../../assets/css/components/utilisateurs/Profile.style.css";


import image1 from "./../../pages/Signin/o.images/0004.gif";
//import UpdateProfile from './UpdateProfile'
import {  useHistory } from "react-router-dom";
import EmploisCar from "../emplois/EmploisCar";

const dateFormat = require("dateformat");

export default function CarProfile2() {
  const History = useHistory();
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/employe/car`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setId(result._id)
      });
  }, []);

  if (!id) {
    return "";
  }


  return (
    <div
      className="firstdiv"
      style={{
        backgroundImage: "url(" + image1 + ")",
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center !important",
      }}
    >
      <br />
      <div className="second-div1">
        <br />
        <div className="mycard1">
          <div className="card auth-card-Mod-style1">
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  float: "left !important",
                  marginRight: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "80px",
                }}
              >
                <img
                  src={`/uploads/car/${data.pic}`}
                  alt=""
                  className="photo-Mod3"
                />
                <h4 style={{ marginTop: "10px", color: "black" }}>
                  {data.model} : {data.serie}
                </h4>
              </div>
              <div
                style={{
                  float: "left",
                  marginRight: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "110%",
                  }}
                >
                  <h5 className="para-Mod1">Date de la visite technique :</h5>
                  <h5 className="para-Mod1">
                    {dateFormat(data.technicVisitDate, "dd/mm/yyyy")}
                  </h5>
                </div>
                <hr style={{ color: "black", width: "120%", border: "1px" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "110%",
                  }}
                >
                  <h5 className="para-Mod1">Date de l'assurance :</h5>
                  <h5 className="para-Mod1">
                    {dateFormat(data.assuranceDate, "dd/mm/yyyy")}
                  </h5>
                </div>
              </div>
              <div></div>
              {/* <div>
                <Modifier id={data.id} />
              </div> */}
            </div>
            <br />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "150px" }}></div>
      <EmploisCar id={id} />
    </div>
  );
}
