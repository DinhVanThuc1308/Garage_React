import "./style.css";
import React from "react";
import axiosInstance from '../../shared/services/http-client.js';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Garage_Details = () => {
  const [garage, setGarage] = useState([]);

  useEffect(() => {
    axiosInstance.get(`garages`)
      .then(res => {
        const data = res.data.map(({ id, attributes: { name, email,userName,Dob,phoneNumber,gender,role} }) => ({
          id,
          name,
          email,
          userName,
          Dob,
          phoneNumber,
          gender,
          role
        }));
        console.log(data);
        if (data === undefined) {
          console.log("Dữ liệu trả về từ API là undefined");
        } else {
          // Truy xuất đến các thuộc tính hoặc phương thức của đối tượng
        }
        setGarage(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    <div>
      {garage.map((garage) =>
      <div className="container-all-garage-details" key={garage.id}>
        <div className="container-infomation-garage-details">
          <div className="container-infomation-up-garage-details">
          <div className="container-infomation-up-1-garage-details">
            
          <div className="letter">
  Name:
 
    <div className="container-infomation-up-1-1-garage-details">
      <div className="letter1">{garage.name}</div>
    </div>
 
</div>
            
            <div className="letter">Email
            
              <div className="container-infomation-up-1-1-garage-details no-bold">
                <div className="letter1">{garage.email}</div>
              </div>
            
            </div>
            <div className="letter">Username
            
              <div className="container-infomation-up-1-1-garage-details">
              <div className="letter1">{garage.userName}test2</div>
              
            </div>
            </div>
            
            </div>
            
            <div className="container-infomation-up-1-garage-details">
            
            < div className="letter">DOB
            
              <div className="container-infomation-up-1-1-garage-details">
                <div className="letter 1">{garage.Dob}09/03/2022</div>
              </div>
            </div>
            
            <div className="letter">Phone Number
            
              <div className="container-infomation-up-1-1-garage-details no-bold">
              <div className="letter1" >{garage.phoneNumber}
              </div>
            </div>
            </div>
            <div className="letter">Gender
            
              <div className="container-infomation-up-1-1-garage-details">
              <div className="letter1">{garage.gender}Femail</div>
              
            </div>
            </div>
            
            </div>
            
            <div className="container-infomation-up-1-garage-details">
            < div className="letter">Role 
            
            <div className="container-infomation-up-1-1-garage-details">
              <div className="letter1" >{garage.role}Admin</div>
            </div>
          </div>
            </div>

          </div>
          
          <div className="container-infomation-down-garage-details">
            <div className="letter" style={{marginTop:30}}>Garage</div>
            <div className="container-infomation-down-1-garage-details">
              <div className=".container-infomation-down-1-1-garage-details">
                <div className="letter2">Garage ABC</div>
                
              </div>

              <div className=".container-infomation-down-1-1-garage-details">
                <div className="letter2">TLS</div>
                
              </div>
              <div className=".container-infomation-down-1-1-garage-details">
                <div className="letter2">AHC</div>
                
              </div>
              <div className=".container-infomation-down-1-1-garage-details">
                <div className="letter2">CB Garage</div>
                
              </div>
              <div className=".container-infomation-down-1-1-garage-details">
                <div className="letter2">UCQ</div>
                
              </div>

            </div>
          </div>
          

        </div>
        <div className="line" style={{width:0}}></div>
        <div className="container-save-garage-details">
        <div className="line"></div>
          <div className="container-save-1-garage-details">
          <button className="my-button" style={{background: "#8767E1"}}>
            
            <Link to="/update_owner">
              <div className="letter-button">Update
              </div>
              </Link>
           
          </button>
          <button className="my-button" >
          <Link to="/garage_owner">
            <div className="letter-button" style={{color:"#8767E1"}}>Cancel</div>
            </Link>
          </button>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default Garage_Details;


// import React, { useState, useEffect } from "react";
// import axiosInstance from '../../shared/services/http-client'

// const MainContent = () => {
//   const [garage, setGarage] = useState([]);

//   useEffect(() => {
//     axiosInstance.get(`garages`)
//       .then(res => {
//         const data = res.data.map(({ id, attributes: { name, image } }) => ({
//           id,
//           name,
//           image
//         }));
//         setGarage(data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const listItems = garage.map((garages) =>
//     <div className='card' key={garages.id}>
//       <div className='card_img'>
//         <img src={garages.image} alt={garages.name} />
//       </div>
//       <div className='card_header'>
//         <h2>{garages.name}</h2>
//       </div>
//     </div>
//   )

//   return (
//     <div className='main_content'>
//       <h3>Categories</h3>
//       {listItems}
//     </div>
//   )
// }

// export default MainContent;
