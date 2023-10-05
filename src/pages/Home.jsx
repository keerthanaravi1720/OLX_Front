import React, { useState } from 'react';
import Navbar from '../components/Nabvar';
import '../css/h.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Row, Col, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Home = () => {
  const categories = [
    { key: '1', label: 'Category 1' },
    { key: '2', label: 'Category 2' },
    { key: '3', label: 'Category 3' },
    // Add more categories as needed
  ];

  // State to track menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  const categoryMenu = (
    <Menu>
      {categories.map(category => (
        <Menu.Item key={category.key}>{category.label}</Menu.Item>
      ))}
    </Menu>
  );

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add a CSS class to rotate the icon when the menu is open
  const buttonClass = `cat ${menuOpen ? 'open' : ''}`;

  return (
    <div>
    <div style={{ marginTop: '70px' }} className="navbar-home">
      <Navbar />
      <div>
        <Dropdown overlay={categoryMenu} placement="bottomRight" onVisibleChange={setMenuOpen}>
          <Button className={buttonClass} onClick={toggleMenu} style={{
           
          }}>
            All Categories <DownOutlined />
          </Button>
        </Dropdown>


      </div>


<div className='name'>
    Cars
</div>

<div className='name'>
  MotorCycles
</div>

<div className='name'>
  MobilePhones
</div>

<div className='name'>
  For Sale: Houses & Apartments
</div>

<div className='name'>
  Scooters
</div>

<div className='name'>
  Commercial & Other Vehicles
</div>

<div className='name'>
  For Rent: Houses & Apartments
</div>




</div>

<div className='box'>
   
</div>

<div className="container">
 <p className='cars'> More on Cars</p>
  <Row gutter={[16, 16]}>
    <Col span={6}>
      <Card
        className="custom-card"
        hoverable
        cover={<img alt="Card 1" src="image.jpg" className="custom-image" />}
      >
         {/* <div className="featured-tag">FEATURED</div> */}
         <div className="featured-tag">
          <span className="charging-symbol" style={{ color: 'black' }}>
            &#x26A1;
          </span>{' '}
          FEATURED
        </div>
        <Meta title="8,75,000" />
        <Meta description="2016 - 105,201 km" />
        <Meta description="Hyundai Creta 1.4 S 2016, Diesel" />
        <div className="footer-text">SEP 16</div>
        <div className="favorite-icon">
      <HeartOutlined style={{ fontSize: '20px', color: 'black' }} />
    </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card
        className="custom-card"
        hoverable
        cover={<img alt="Card 2" src="image2.jpg" className="custom-image" />}
      >
          {/* <div className="featured-tag">FEATURED</div> */}
          <div className="featured-tag">
          <span className="charging-symbol" style={{ color: 'black' }}>
            &#x26A1;
          </span>{' '}
          FEATURED
        </div>
        <Meta title="5,25,000" />
        <Meta description="2016 - 56,000 km" />
        <Meta description="Ford Escort 1.5 Diesel Trend, 2016" />
        <div className="footer-text">AUG 11</div>
        <div className="favorite-icon">
      <HeartOutlined style={{ fontSize: '20px', color: 'black' }} />
    </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card
        className="custom-card"
        hoverable
        cover={<img alt="Card 3" src="image3.jpg" className="custom-image" />}

      >
          <div className="featured-tag">
          <span className="charging-symbol" style={{ color: 'black' }}>
            &#x26A1;
          </span>{' '}
          FEATURED
        </div>
          {/* <div className="featured-tag">FEATURED</div> */}
        <Meta title="4,60,000" />
        <Meta description="2017 - 94,700 km" />
        <Meta description="Tata Tiago XM, 2017, Petrol" />
        <div className="footer-text">SEP 07</div>
        <div className="favorite-icon">
      <HeartOutlined style={{ fontSize: '20px', color: 'black' }} />
    </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card
        className="custom-card"
        hoverable
        cover={<img alt="Card 4" src="image4.jpg" className="custom-image" />}
      >
          {/* <div className="featured-tag">FEATURED</div> */}
          <div className="featured-tag">
  <span className="charging-symbol" style={{ color: 'black' }}>
    &#x26A1;
  </span>{' '}
  FEATURED
</div>

        <Meta title="4,25,000" />
        <Meta description="2013 - 88,000 km" />
        <Meta description="Renault Duster 2015-2015 110PS Diesel" />
        <div className="footer-text">YESTERDAY</div>
        <div className="favorite-icon">
      <HeartOutlined style={{ fontSize: '20px', color: 'black' }} />
    </div>
      </Card>
    </Col>
  </Row>
</div>

    </div>
  );
};

export default Home;
