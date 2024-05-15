import React, { useState } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";
import googleIcon from '../assets/images/google-icon.png';
import facebookIcon from '../assets/images/facebook-icon.png';
import logoChess from '../assets/images/logochess.jpeg';


const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "https://server-travel-booking.onrender.com/users/register",
        credentials
      );

      if (res.status === 200) {
        navigate("/login");
      } else {
        const data = await res.data;
        if (data && data.message) {
          alert(data.message);
        } else {
          alert("Lỗi");
        }
      }
    } catch (err) {
      alert("Email đã tồn tại");
      console.error(err);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value
    }));
  };

  return (
    <div className="bg-auth flex-center">
      <section className="bg-[#dfdfdf] absolute rounded-md flex-col flex-center pt-6 overflow-hidden show">
      <a href="/home">
          <img
            className="w-[140px] h-[40px] colored-image"
            src={logoChess}
            alt=""
          />
        </a>
        <h1 className="my-4">ĐĂNG KÝ</h1>
        <Form
          name="basic"
          style={{
            width: 500,
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 24,
            paddingRight: 24
          }}
          initialValues={{
						remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
					<Form.Item
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập lại name!'
							}
						]}
					>
						<Input size="large" prefix={<KeyOutlined />}
							type="text"
							id="userName"
							placeholder="Name"
							onChange={handleChange} />
					</Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email!'
              }
            ]}
          >
						<Input size="large" prefix={<MailOutlined />}
							type="email"
							placeholder="Email"
							id="email"
							onChange={handleChange} />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!'
              }
            ]}
          >
						<Input.Password size="large" prefix={<KeyOutlined />}
							type="password"
							placeholder="Password"
							id="password"
							onChange={handleChange} />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className="flex-center">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <Divider plain className="!px-6 !text-[20px] !font-[500px] !text-[#747474]">OR</Divider>
        

        <div className="w-[100%] flex flex-col gap-2 login-social-container px-6">
          
					<div
            style={{backgroundColor: "#fff"}}
            className="px-6 py-4 my-1 text-center btn-login-social rounded-md relative"
          >
            <img
              className="h-[30px] w-[30px] img-icon bg-[#fff]"
              src={googleIcon}
              alt=""
            />
            <p style={{color: "#000"}} className="font-[500] text-15 inline">
              {"Đăng ký với Google"}
            </p>
          </div>

					<div
            style={{backgroundColor: "#096bd6"}}
            className="px-6 py-4 my-1 text-center btn-login-social rounded-md relative"
          >
            <img
              className="h-[30px] w-[30px] img-icon bg-[#fff]"
              src={facebookIcon}
              alt=""
            />
            <p style={{color: "#fff"}} className="font-[500] text-15 inline">
              {"Đăng ký với Facebook"}
            </p>
          </div>
        </div>


        <div className="p-6 text-center mt-3 bg-[#d5d5d5] w-[100%]">
          <a className="font-[600]" href="/login">Nếu bạn đã có tài khoản? <span className="text-[#74a52d] cursor-pointer">Đăng nhập</span> </a>
        </div>
      </section>
    </div>
  );
};

export default Register;
