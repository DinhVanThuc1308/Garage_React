  import "./index.css";
  import React, { useState, useEffect } from "react";
  import axiosInstance from '../../shared/services/http-client.js';
  import { Link, useParams } from 'react-router-dom';



    const Index = () => {
      const [garage, setGarage] = useState(null);
      const { id } = useParams();
    
      useEffect(() => {
        axiosInstance.get(`garage-services/${id}`)
          .then(res => {
            console.log(res.data); // In dữ liệu API
            if (res.data && res.data.attributes) {
              // Tiếp tục xử lý dữ liệu nếu cần thiết
              const { id, name, description, minPrice, maxPrice, createdAt, updatedAt, publishedAt } = res.data.attributes;
              const garageData = {
                id,
                name,
                description,
                minPrice,
                maxPrice,
                createdAt,
                updatedAt,
                publishedAt
              };
              console.log(garageData); // In dữ liệu đã xử lý (nếu có)
              setGarage(garageData);
            } else {
              console.log("Dữ liệu trả về từ API không hợp lệ");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);
    
    return (
      <div className='container-all-detail-service'>
        <div className='container-up-detail-service'>
          <div className='container-up-1-detail-service'>
            <div className='container-up-1-1-detail-service'>
              <div className='letter'>
                Name
                <div className='container-up-1-1-1-detail-service'>
                  <div className='letter1'>{garage &&garage.name}</div>
                </div>
              </div>
              <div className='letter'>
                Minprice
                <div className='container-up-1-1-1-detail-service'>
                  <div className='letter1'>{garage &&garage.minPrice}</div>
                </div>
              </div>
              <div className='letter'>
                Maxprice
                <div className='container-up-1-1-1-detail-service'>
                  <div className='letter1'>{garage &&garage.maxPrice}</div>
                </div>
              </div>
              
            </div>
            </div>
            <div className='container-up-2-detail-service'>
                  <div className='Letter' style={{marginTop:30}}>Description
                  <div className='container-up-2-1-detail-service'>
                      <div className='letter1'>{garage &&garage.description}</div>
                  </div>
                  </div>
              </div>
          
        </div>
        <div className='container-down-detail-service'>
        <div className='line-detail-service'></div>
        <div className='container-down-button-detail-service'>
          <button className='container-down-button-edit-detail-service'>
            <div className='letter2' style={{color: "#F1F4F9", background:"#8767E1"}}>
            <Link to={`/update_service/${id}`}>
              <div className="letter-button">Update
              </div>
              </Link>
            </div>
            </button>
            <button className='container-down-button-edit-detail-service' style={{background:"white",border: "1px solid #8767E1"}}>
            <div className='letter2' style={{color: "#8767E1"}}>
            <Link to="/Garage_manage">
              <div className="letter-button">Cancel
              </div>
              </Link>
            </div>
            </button>
        </div>
        
      </div>
        
      </div>
      
    );
  }

  export default Index;