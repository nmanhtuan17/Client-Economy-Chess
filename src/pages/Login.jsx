import React, {useState, useContext} from "react";
import {Button, Form, Input, Divider, Checkbox} from "antd";
import {MailOutlined, KeyOutlined} from "@ant-design/icons";
import "../styles/login.css";
import {useNavigate} from "react-router-dom";
import googleIcon from "../assets/images/google-icon.png";
import facebookIcon from "../assets/images/facebook-icon.png";
import logo from "../assets/images/logochess.jpeg";
import { useAppDispatch } from "../redux/store";
import { login } from "../redux/actions/app.action";



const Login = () => {
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {id, value} = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleClick = async (e) => {
    dispatch(login(credentials))
  };

  return (
    <div className="bg-auth flex-center">
      <section className="bg-[#dfdfdf] absolute rounded-md flex-col flex-center pt-6 overflow-hidden show">
        <a href="/home">
          <img
            className="w-[140px] h-[40px] colored-image"
            src={logo}
            alt=""
          />
        </a>
          
        <h1 className="my-4">ĐĂNG NHẬP</h1>
        <Form
          name="basic"
          style={{
            width: 500,
            display: "flex",
            flexDirection: "column",
            paddingLeft: 24,
            paddingRight: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleClick}
          autoComplete="off"
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              name="email"
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<KeyOutlined />}
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <div>
              <Checkbox>Remember me</Checkbox>
              <a href="/forgot-password" style={{marginLeft: "10px"}}>
                Forgot password?
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="flex-center"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <Divider
          plain
          className="!px-6 !text-[20px] !font-[500px] !text-[#747474]"
        >
          OR
        </Divider>
        
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
              {"Đăng nhập với Google"}
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
              {"Đăng nhập với Facebook"}
            </p>
          </div>
        </div>

        <div className="p-6 text-center mt-3 bg-[#d5d5d5] w-[100%]">
          <a className="font-[600]" href="/register">
            Nếu chưa có tài khoản?{" "}
            <span className="text-[#74a52d] cursor-pointer">Đăng ký</span>{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Login;
