import "./style.css";
import React from "react";

function Garage_Details(){
  return (
    <div>
      <div className="container-all-garage-details">
        <div className="container-infomation-garage-details">
          <div className="container-infomation-up-garage-details">
          <div className="container-infomation-up-1-garage-details">
            
            < div className="letter">Name 
            
              <div className="container-infomation-up-1-1-garage-details">
                <div className="letter1" >Minh Quang Tran</div>
              </div>
            </div>
            
            <div className="letter">Email
            
              <div className="container-infomation-up-1-1-garage-details no-bold">
                <div className="letter1">minh.quang@gmail.com</div>
              </div>
            
            </div>
            <div className="letter">Username
            
              <div className="container-infomation-up-1-1-garage-details">
              <div className="letter1">minh.quang</div>
              
            </div>
            </div>
            
            </div>
            
            <div className="container-infomation-up-1-garage-details">
            
            < div className="letter">DOB
            
              <div className="container-infomation-up-1-1-garage-details">
                <div className="letter 1">20/12/1999</div>
              </div>
            </div>
            
            <div className="letter">Phone Number
            
              <div className="container-infomation-up-1-1-garage-details no-bold">
              <div className="letter1" >0123456789 
              </div>
            </div>
            </div>
            <div className="letter">Gender
            
              <div className="container-infomation-up-1-1-garage-details">
              <div className="letter1">Male</div>
              
            </div>
            </div>
            
            </div>
            
            <div className="container-infomation-up-1-garage-details">
            < div className="letter">Role 
            
            <div className="container-infomation-up-1-1-garage-details">
              <div className="letter1" >User</div>
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
            <div className="letter-button">Save</div>
          </button>
          <button className="my-button" >
            <div className="letter-button" style={{color:"#8767E1"}}>Delete</div>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Garage_Details;