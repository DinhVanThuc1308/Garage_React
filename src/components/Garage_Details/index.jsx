import './style.css';
import React from 'react';
import axiosInstance from '../../shared/services/http-client.js';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.css';

const Garage_Details = () => {
  const [garage, setGarage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get(`users/${id}`)
      .then(res => {
        console.log(res); // In dữ liệu API
        if (res && res.id) {
          // Tiếp tục xử lý dữ liệu nếu cần thiết
          const {
            id,
            name,
            username,
            email,
            phoneNumber,
            gender,
            dob,
            fullname,
          } = res;
          const data = {
            id,
            fullname,
            username,
            email,
            phoneNumber,
            gender,
            dob,
            fullname,
          };
          console.log(data); // In dữ liệu đã xử lý (nếu có)
          setGarage(data);
        } else {
          console.log('Dữ liệu trả về từ API không hợp lệ');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div
        style={{ width: '100%', backgroundColor: '#f8f5f5', padding: '10px' }}
      >
        <h3 style={{ fontFamily: 'Poppins', fontSize: 20 }}>
          <span
            style={{ fontFamily: 'Poppins', fontSize: '23', color: '#cacaca' }}
          >
            Garage &gt;
          </span>{' '}
          {garage.fullname}{' '}
        </h3>
      </div>
      <div className="container-all-garage-details" key={garage.id}>
        <div className="container-infomation-garage-details">
          <div className="container-infomation-up-garage-details">
            <div className="container-infomation-up-1-garage-details">
              <div className="letter">
                Name:
                <div className="container-infomation-up-1-1-garage-details">
                  <div className="letter1">{garage.fullname}</div>
                </div>
              </div>

              <div className="letter">
                Email
                <div className="container-infomation-up-1-1-garage-details no-bold">
                  <div className="letter1">{garage.email}</div>
                </div>
              </div>
              <div className="letter">
                Username
                <div className="container-infomation-up-1-1-garage-details">
                  <div className="letter1">{garage.userName}test2</div>
                </div>
              </div>
            </div>

            <div className="container-infomation-up-1-garage-details">
              <div className="letter">
                DOB
                <div className="container-infomation-up-1-1-garage-details">
                  <div className="letter 1">{garage.Dob}09/03/2022</div>
                </div>
              </div>

              <div className="letter">
                Phone Number
                <div className="container-infomation-up-1-1-garage-details no-bold">
                  <div className="letter1">{garage.phoneNumber}</div>
                </div>
              </div>
              <div className="letter">
                Gender
                <div className="container-infomation-up-1-1-garage-details">
                  <div className="letter1">{garage.gender}</div>
                </div>
              </div>
            </div>

            <div className="container-infomation-up-1-garage-details">
              <div className="letter">
                Role
                <div className="container-infomation-up-1-1-garage-details">
                  <div className="letter1">{garage.role}Admin</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-infomation-down-garage-details">
            <div className="letter" style={{ marginTop: 30 }}>
              Garage
            </div>
            <div className="container-infomation-down-1-garage-details">
              <div className="">
                <div
                  className=""
                  style={{
                    color: '#805EDF',
                    fontFamily: 'Popins',
                    fontSize: 20,
                    fontWeight: 500,
                    padding: '10px',
                  }}
                >
                  Garage ABC
                </div>
              </div>

              <div className="">
                <div
                  className=""
                  style={{
                    color: '#805EDF',
                    fontFamily: 'Popins',
                    fontSize: 20,
                    fontWeight: 500,
                    padding: '10px',
                  }}
                >
                  TLS
                </div>
              </div>
              <div className="">
                <div
                  className=""
                  style={{
                    color: '#805EDF',
                    fontFamily: 'Popins',
                    fontSize: 20,
                    fontWeight: 500,
                    padding: '10px',
                  }}
                >
                  AHC
                </div>
              </div>
              <div className="">
                <div
                  className=""
                  style={{
                    color: '#805EDF',
                    fontFamily: 'Popins',
                    fontSize: 20,
                    fontWeight: 500,
                    padding: '10px',
                  }}
                >
                  CB Garage
                </div>
              </div>
              <div className="">
                <div
                  className=""
                  style={{
                    color: '#805EDF',
                    fontFamily: 'Popins',
                    fontSize: 20,
                    fontWeight: 500,
                    padding: '10px',
                  }}
                >
                  UCQ
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line" style={{ width: 0 }}></div>
        <div className="container-save-garage-details">
          <div className="line"></div>
          <div className={styles['btn-container']}>
            <Link to={`/update_owner/${garage.id}`}>
              <button type="submit" className={styles['btn-save']}>
                Update
              </button>
            </Link>
            <Link to="/Garage_manage">
              <button type="button" className={styles['btn-cancel']}>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

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
