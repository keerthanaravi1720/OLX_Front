// import React from 'react'
// import "./n.css"

// const Nabvar = () => {
//   return (
//     <div className='nav'>


// <div className='image'>
// <svg  viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
//     <path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
//     </path></svg>

    
// </div>



//     </div>
//   )
// }

// export default Nabvar


// import React, { useState } from 'react';






import React, { useState } from 'react';
import { Input, Menu, Dropdown, Button } from 'antd';
import { SearchOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons';
import './n.css';
// import { useNavigate } from 'react-router';


const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [rotate, setRotate] = useState(0);
  // const navigate=useNavigate();

  // const next=()=>{
  //   navigate('/next');
  // }


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

{/* <div className="language-dropdown">
  <Dropdown
    overlay={languageMenu}
    placement="bottomRight"
    visible={isLanguageDropdownVisible}
    onVisibleChange={toggleLanguageDropdown}
  >
  <Button
  className="custom-button"
 
  icon={<DownOutlined style={{ color: 'black', fontSize:'16px' }} onClick={toggleLanguageDropdown} />}
>
  ENGLISH
</Button>



  </Dropdown>
</div> */}

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


    
    <div className='login'>
<Button className='l-but' >
    Login
</Button>

    </div>
    <Button className='sell'>
  <PlusOutlined style={{ marginRight: '8px' }} />
  SELL
</Button>





  
    </div>
  );
};

export default Navbar;
