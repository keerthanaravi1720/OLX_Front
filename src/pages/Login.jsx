// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Modal, Input, message } from 'antd';
// import { ArrowLeftOutlined } from '@ant-design/icons'; // Import the ArrowLeftOutlined icon

// import '../css/l.css';

// function AxiosCallComponent() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [otpToken, setOtpToken] = useState('');
//   const [error, setError] = useState(null);

//   const handleLoginWithEmail = () => {
//     setModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//     setEmail(''); // Reset email input
//     setError(null); // Reset error message
//   };

//   const handleEmailSubmit = async () => {
//     try {
//       // Make the Axios POST request to the login-email endpoint
//       const response = await axios.post('http://localhost:1000/auth/login-email', {
//         email,
//       });
  
//       // Handle the response from the server
//       const { data } = response;
  
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setOtpToken(data.otpToken);
//         handleModalClose(); // Close the modal on success
//         message.success(`OTP sent successfully: ${data.otpToken}`);
//       }
//     } catch (error) {
//       // Handle network or other errors
//       setError('An error occurred');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onClick={handleLoginWithEmail}
//         style={{ textAlign: "center", textDecoration: "underline" }}
//         className='login-email'
//       >
//         <u>Login with Email</u>  
//       </Button>
      
//       <Modal
//         // title="Login with Email"
//         visible={modalVisible}
//         onCancel={handleModalClose}
//         footer={null}
//         width={400}
//         style={{ height: '500px' }}
//       >
//         {/* Back button icon */}
//         <ArrowLeftOutlined
//           style={{
//             fontSize: '24px',
//             cursor: 'pointer',
//             position: 'absolute',
//             // top: '10px',
//             // right: '10px',
//           }}
//           onClick={handleModalClose} // Close the modal when back button is clicked
//         />

//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
//           <div className="image1">
//             <svg
//               viewBox="0 0 1024 1024"
//               data-aut-id="icon"
//               className=""
//               fillRule="evenodd"
//             >
//               <path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
//               </path>
//             </svg>
//           </div>
//         </div>

//         <label style={{fontSize:'20px', fontWeight:"bold"
//       , textAlign:'center', marginLeft:'50px'}}>Enter your Email to login</label>
//         <Input
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{height: 40}}
//         />
//         {error && <p style={{ color: 'red' }}>{error}</p>}

// <p className='email-text'>If you are a new user please select any other other 
//   login option from previous page.</p>

//         <Button onClick={handleEmailSubmit} className='next-button1'
//          style={{ width: 350, marginTop: 50, height: 40, borderColor: 'black' }}>
//           Next</Button>

// <p className='footer'>Your email is never shared with external parties nor 
//   do we use it spam you in any way. </p>

//       </Modal>
//     </div>
//   );
// }

// export default AxiosCallComponent;



import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Input, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'; // Import the ArrowLeftOutlined icon

import '../css/l.css';

function AxiosCallComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [error, setError] = useState(null);
  const [otpModalVisible, setOtpModalVisible] = useState(false); // State for OTP modal

  const handleLoginWithEmail = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setEmail(''); // Reset email input
    setError(null); // Reset error message
  };

  const handleEmailSubmit = async () => {
    try {
      // Make the Axios POST request to the login-email endpoint
      const response = await axios.post('http://localhost:1000/auth/login-email', {
        email,
      });
  
      // Handle the response from the server
      const { data } = response;
  
      if (data.error) {
        setError(data.error);
      } else {
        setOtpToken(data.otpToken);
        handleModalClose(); // Close the modal on success
        message.success(`OTP sent successfully: ${data.otpToken}`);
        setOtpModalVisible(true); // Show the OTP modal
      }
    } catch (error) {
      // Handle network or other errors
      setError('An error occurred');
    }
  };

  const handleOtpModalClose = () => {
    setOtpModalVisible(false);
  };

  
  const handleOtpSubmit = async () => {
    try {
      // Make the Axios POST request to confirm the email with the generated OTP token
      const response = await axios.post('http://localhost:1000/auth/login-email/confirm', {
        otpToken: otpToken, // Use the generated OTP token
      });

      // Handle the response from the server
      const { data } = response;

      if (data.message) {
        message.success(data.message);
      } else {
        message.error('Email confirmation failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error confirming email:', error);
      message.error('Email confirmation failed');
    }
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onClick={handleLoginWithEmail}
        style={{ textAlign: "center", textDecoration: "underline" }}
        className='login-email'
      >
        <u>Login with Email</u>  
      </Button>
      
      <Modal
        // title="Login with Email"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={400}
        style={{ height: '600px' }} 
      >
        {/* Back button icon */}
        <ArrowLeftOutlined
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            position: 'absolute',
          }}
          onClick={handleModalClose}
        />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <div className="image1">
            <svg
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              className=""
              fillRule="evenodd"
            >
              <path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
              </path>
            </svg>
          </div>
        </div>

        <label style={{ fontSize: '20px', fontWeight: "bold", textAlign: 'center', marginLeft: '50px' }}>Enter your Email to login</label>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ height: 40 }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p className='email-text'>If you are a new user please select any other login option from the previous page.</p>

        <Button onClick={handleEmailSubmit} className='next-button1' style={{ width: 350, marginTop: 50, height: 40, borderColor: 'black' }}>
          Next</Button>

        <p className='footer'>Your email is never shared with external parties nor do we use it to spam you in any way. </p>

      </Modal>

  {/* OTP Modal */}
  <Modal
        title="Enter OTP"
        visible={otpModalVisible}
        onCancel={handleOtpModalClose}
        footer={null}
        width={400}
        style={{ height: '600px' }} 
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50 }}>
          <Input placeholder="1" style={{ width: '50px', height: '50px' }} />
          <Input placeholder="2" style={{ width: '50px', height: '50px' }} />
          <Input placeholder="3" style={{ width: '50px', height: '50px' }} />
          <Input placeholder="4" style={{ width: '50px', height: '50px' }} />
          <Input placeholder="5" style={{ width: '50px', height: '50px' }} />
          <Input placeholder="6" style={{ width: '50px', height: '50px' }} />
        </div>

        <Button className='next-button1' style={{ width: 350, marginTop: 50, height: 40, borderColor: 'black' }} 
        onClick={() => {
  handleOtpSubmit();
  handleOtpModalClose(); // Close the modal
}}>
  Submit OTP
</Button>

      </Modal>

    </div>
  );
}

export default AxiosCallComponent;




