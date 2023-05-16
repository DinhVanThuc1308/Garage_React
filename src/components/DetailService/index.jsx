import React from 'react';
import './index.css';

function index() {
  return (
    <div className='container-all-detail-service'>
      <div className='container-up-detail-service'>
        <div className='container-up-1-detail-service'>
          <div className='container-up-1-1-detail-service'>
            <div className='letter'>
              Name
              <div className='container-up-1-1-1-detail-service'>
                <div className='letter1'>Service 1</div>
              </div>
            </div>
            <div className='letter'>
              Minprice
              <div className='container-up-1-1-1-detail-service'>
                <div className='letter1'>10000</div>
              </div>
            </div>
            <div className='letter'>
              Maxprice
              <div className='container-up-1-1-1-detail-service'>
                <div className='letter1'>200000</div>
              </div>
            </div>
            
          </div>
          </div>
          <div className='container-up-2-detail-service'>
                <div className='Letter' style={{marginTop:30}}>Description
                <div className='container-up-2-1-detail-service'>
                    <div className='letter1'>This is a description</div>
                </div>
                </div>
            </div>
        
      </div>
      <div className='container-down-detail-service'>
      <div className='line-detail-service'></div>
      <div className='container-down-button-detail-service'>
        <button className='container-down-button-edit-detail-service'>
          <div className='letter2' style={{color: "#F1F4F9", background:"#8767E1"}}>Edit</div>
          </button>
          <button className='container-down-button-edit-detail-service' style={{background:"white",border: "1px solid #8767E1"}}>
          <div className='letter2' style={{color: "#8767E1"}}>Edit</div>
          </button>
      </div>
      
    </div>
      
    </div>
    
  );
}

export default index;