






import React, { useState } from 'react';
import { Input, Menu, Dropdown, Button,  Modal , Carousel , message} from 'antd';
import { SearchOutlined, DownOutlined, PlusOutlined, MobileOutlined, GoogleOutlined , ArrowLeftOutlined} from '@ant-design/icons';
import './n.css';
import axios from 'axios';

import AxiosCallComponent from '../pages/Login';
// import { useNavigate } from 'react-router';



const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [rotate, setRotate] = useState(0);
  console.log("hello");
  // const navigate=useNavigate();

  // const next=()=>{
  //   navigate('/next');
  
  const [isLoginModalVisible, setLoginModalVisible] = useState(false); 
  const [isPhoneModalVisible, setPhoneModalVisible] = useState(false); // State for the second modal
  
  const [isThirdModalVisible, setThirdModalVisible] = useState(false);
  

  const [phone, setPhone] = useState('');
  // const [otpVisible, setOtpVisible] = useState(false);
  // const [otpToken, setOtpToken] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  


  const handleNextClick = async () => {

    setThirdModalVisible(true);
    hidePhoneModal();

    try {
      const response = await axios.post('http://localhost:1000/auth/login', {
        phone: phone,
      });

     

      const { data } = response;

      if (data.error) {
        message.error(data.error);
      } else {
        // OTP sent successfully, show it in a message box
        // setOtpToken(data.otpToken);
        // setOtpVisible(true);
        // setOtpVisible(false)
        message.success(`OTP sent successfully: ${data.otpToken}`);
       
        setTimeout(() => {
          message.destroy(); // Close the message
        }, 6 * 60 * 1000); // 6 minutes in milliseconds
      


      }
    } catch (error) {
      console.error(error);
      message.error('Login failed');
    }
  };



  // // Function to show the third modal
  // const showThirdModal = () => {
  //   setThirdModalVisible(true);
  //   setPhoneModalVisible(false);
  // };
  
  // Function to hide the third modal
  const hideThirdModal = () => {
    setThirdModalVisible(false);
  };
  

  const showLoginModal = () => {
    setLoginModalVisible(true);
    setPhoneModalVisible(false); // Hide the second modal when showing the first modal
  };

  const hideLoginModal = () => {
    setLoginModalVisible(false);
  };

  const showPhoneModal = () => {
    setPhoneModalVisible(true);
    setLoginModalVisible(false); // Hide the first modal when showing the second modal
  };

  const hidePhoneModal = () => {
    setPhoneModalVisible(false);
  };

 
 

 

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setRotate(rotate => (rotate === 0 ? 180 : 0)); // Toggle between 0 and 180 degrees
  };

  const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!isLanguageDropdownVisible);
  };



  const languageMenu = (
    <Menu>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="fr">Hindi</Menu.Item>
      {/* Add more language options as needed */}
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item key="1">Kerala qwerty qwerty qwerty</Menu.Item>
      <Menu.Item key="2">Item 2</Menu.Item>
      {/* Add more menu items as needed */}
    </Menu>
  );

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };
  

  // const handleConfirmClick = async () => {
  //   const otpToken = otp.join(''); // Combine the OTP digits into a single string
  //   try {
  //     const response = await axios.post('http://localhost:1000/auth/login/confirm', { otpToken });
  //     // Handle the response from the server (e.g., display a success message)
  //     console.log(response.data.message); // This should contain the welcome message
  //   } catch (error) {
  //     // Handle errors (e.g., display an error message)
  //     console.error('Error confirming login:', error);
  //   }
  // };

  const handleConfirmClick = async () => {
    const otpToken = otp.join(''); // Combine the OTP digits into a single string
    try {
      const response = await axios.post('http://localhost:1000/auth/login/confirm', { otpToken });
      const { message: welcomeMessage } = response.data; // Extract the welcome message
      message.success(`Welcome ${welcomeMessage}`); // Show a success message using Ant Design message component
  
      // Close the modal
      setThirdModalVisible(false);
     
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error confirming login:', error);
      message.error('Error confirming login.'); // Show an error message using Ant Design message component
    }
  };
  


  


  return (
    <div className="nav">
      <div className="image">
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

      <div className="input-container">
        <Input.Group compact>
          <Input
          className='inputbox'
            style={{ width: '100%' }}
            placeholder="India"
            prefix={<SearchOutlined style={{ color: '#888' }} />}
            suffix={
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                visible={isDropdownVisible}
                onVisibleChange={toggleDropdown}
              >
               <DownOutlined
                  style={{
                    color: '#888',
                    cursor: 'pointer',
                    transform: `rotate(${rotate}deg)`, // Apply rotation here
                    transition: 'transform 0.3s', // Add a transition
                  }}
                  onClick={toggleDropdown}
                />
              </Dropdown>
            }
          />
        </Input.Group>
      </div>

      <div className='input2'>
  <input
    type='text'
    placeholder='website design'
    className='i2'
  />
  <span
    className='search-button'
    style={{
      backgroundColor: 'black',
      color: 'white',
      height: '43px',
      width: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <SearchOutlined style={{ marginLeft: '6px',  }} />
  </span>
</div>



<div className="language-dropdown">
  <Dropdown
    overlay={languageMenu}
    placement="bottomRight"
    visible={isLanguageDropdownVisible}
    onVisibleChange={toggleLanguageDropdown}
  >
    <Button
      className="custom-button"
      icon={
        <DownOutlined
          style={{
            color: 'black',
            fontSize: '16px',
            transform: `rotate(${isLanguageDropdownVisible ? '180deg' : '0deg'})`, // Rotate icon based on visibility
            transition: 'transform 0.3s', // Add a transition for smooth rotation
          }}
        />
      }
    >
      ENGLISH
    </Button>
  </Dropdown>
</div>


<Button className='l-but' onClick={showLoginModal}>
        Login
      </Button>

     
    <Button className='sell'>
  <PlusOutlined style={{ marginRight: '8px' }} />
  SELL
</Button>

{/* <Modal
  title="Login"
  visible={isLoginModalVisible}
  onCancel={hideLoginModal}
  footer={null}
 width={400}
> */}
   <Modal
        title="Login"
        visible={isLoginModalVisible}
        onCancel={hideLoginModal}
        footer={null}
        width={400}
      //  style={{height:"600px"}}
      >
  <div style={{ textAlign: 'center' , }}>
    <Carousel autoplay autoplaySpeed={1500}>
      <div>
     
        <img
          src="https://statics.olx.in/external/base/img/loginEntryPointPost.png"
          className="centered-image"
          alt=""
        />


        <h4>Help us become one of the safest places to buy and sell</h4>
      </div>
      <div>
      
        <img
          src="https://statics.olx.in/external/base/img/loginEntryPointFavorite.png"
          className="centered-image"
          alt=""
        />
        <h4>Close deals from the comfort of your home.</h4>
      </div>
      <div>
     
        <img
          src="https://statics.olx.in/external/base/img/loginEntryPointChat.png"
          className="centered-image"
          alt=""
        />
        <h4>Keep all your favourites in one place.</h4>
      </div>
    </Carousel>
  </div>

   
  {/* <div className='login-button'>
  <Button className="phone-button">
      <MobileOutlined /> 
      Continue with Phone
    </Button>
  </div>  */}

<div className='login-button'>
        <Button className="phone-button" onClick={showPhoneModal}>
          <MobileOutlined /> 
          Continue with Phone
        </Button>
      </div>




  
  <div className='login-button'>
  <Button className="google-button">
      <GoogleOutlined   className='google'/> 
      Continue with Google
    </Button>
  </div>



<p style={{textAlign:"center"}}>OR</p>

<div>
 
<AxiosCallComponent/>
</div>


<div>
  <div className='login-text'>All your personal details are safe with us.</div>


  <div className='login-text'>
  If you continue, you are accepting
  <br />
  <span className="blue-text">OLX Terms and</span>  <span className="blue-text">Conditions and </span> <span className="blue-text">Privacy and Policy</span>
</div>


</div>


</Modal>


<Modal
  // title="Continue with Phone"
  visible={isPhoneModalVisible}
  onCancel={hidePhoneModal}
  footer={null}
  width={400}
>
  {/* Modal Content */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,height:'500px'}}>
    <div style={{ alignSelf: 'flex-start' }}>
      <ArrowLeftOutlined
        style={{ fontSize: '24px', cursor: 'pointer' }}
        onClick={() => {
          hidePhoneModal(); // Hide the second modal
          showLoginModal(); // Show the first modal
        }}
      />
    </div>
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
<label style={{fontSize:'20px', fontWeight:"bold"}}>Enter Your phone Number</label>
{/* <Input
placeholder='+91 |  Phone Number'
style={{height:40}}></Input> */}

<Input
        placeholder="+91 | Phone Number"
        style={{ height: 40 }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

<div>
  {/* <Button style={{width: 350, marginTop:50, height: 40, borderColor:"black"}}
  className='next-button'  onClick={showThirdModal}>Next</Button> */}
   <Button
          style={{ width: 350, marginTop: 50, height: 40, borderColor: 'black' }}
          className="next-button"
          onClick={handleNextClick}
          
        >
          Next
        </Button>
</div>
<p className='olx-text'>Your contact number is never shared with external parties nor do we use it spam you in any way.</p>

  </div>


</Modal>

{/*  
<Modal
        visible={otpVisible}
        onCancel={() => setOtpVisible(false)}
        footer={null}
        width={400}
      >
        <p>OTP: {otpToken}</p>
        <Button onClick={showThirdModal}>Proceed to Third Modal</Button>
      </Modal> */}


<Modal
  // title="Third Modal Title"
  visible={isThirdModalVisible}
  onCancel={hideThirdModal}
  footer={null}
  width={400}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '500px' }}>
    <div style={{ alignSelf: 'flex-start' }}>
      <ArrowLeftOutlined
        style={{ fontSize: '24px', cursor: 'pointer' }}
        onClick={() => {
          hideThirdModal(); // Hide the third modal
          showPhoneModal(); // Show the second modal
        }}
      />
    </div>
    <div className="image1">
    
    </div>
    <label style={{ fontSize: '20px', fontWeight: 'bold' }}>Enter OTP</label>
    <p>We sent a code to the number +91XXXXXXXXXX</p>
    
   
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  {otp.map((value, index) => (
    <input
      type="text"
      className="otp-input"
      maxLength="1"
      key={index}
      value={value}
      onChange={(e) => handleOtpChange(e, index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          // Trigger the confirm action when Enter is pressed
          handleConfirmClick();
        }
      }}
    />
  ))}
</div>


    
 
    <style>
      {`
        .otp-input {
          width: 40px;
          height: 40px;
          margin: 0 5px;
          text-align: center;
          font-size: 18px;
        
        }
      `}
    </style>
<div className='resend'>
<p className='otp-text'>Resend code by SMS</p>
<p  className='otp-text' style={{marginRight:"225px"}}>Resend code by call</p>
</div>


{/* <button onClick={handleConfirmClick}>Confirm</button> */}


  </div>
</Modal>
 



  
    </div>
  );
};

export default Navbar;
