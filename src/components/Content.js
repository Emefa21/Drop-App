import React from "react";
import { Row, Col, Button, Divider, Form, Input, Radio, Checkbox } from "antd";
import droping from "../assets/dropbox.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
// import { faGoogle } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faCheckSquare, faCoffee);

const tailLayout = {
  wrapperCol: {},
};

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

const Content = () => {
  return (
    <div style={{ paddingTop: 150 }}>
      {/*for wrap  */}
      <Row>
        <Col md={12} xs={0}>
          <div>
            <a href="#">
              <img
                style={{
                  width: "650px",
                  height: "420px",
                  // paddingRight: 100,
                  paddingLeft: 300,
                }}
                src={droping}
              ></img>
            </a>
          </div>
        </Col>

        {/* 2nd col */}
        <Col md={12} xs={24}>
          <div style={{ paddingRight: 100 }}>
            {/* signin n create div */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px 100px",
                // border: "1px solid grey",

                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 20 }}>Sign in</div>
              <div>
                or <a>create an acount</a>
              </div>
            </div>
            {/* signin create end */}

            {/* for rest of items */}
            {/* 1. for google login */}
            <div style={{ paddingRight: 100, paddingLeft: 100 }}>
              <Button
                type="primary"
                block
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ borderRight: "1px solid black" }}>
                  {/* <FontAwesomeIcon
                    style={{ fontSize: "20px", color: "grey" }}
                    icon={faGoogle}
                  /> */}
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={faGoogle}
                  />
                </div>
                <div style={{ paddingLeft: 100 }}>Sign in with Google</div>
                {/* Sign in with Google */}
              </Button>
            </div>

            {/* 2. Apple login */}
            <div
              style={{
                paddingRight: 100,
                paddingLeft: 100,
                paddingTop: 20,
                color: "black",
              }}
            >
              <Button
                type=""
                block
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <div style={{ borderRight: "1px solid black" }}>
                  {/* <FontAwesomeIcon
                    style={{ fontSize: "20px", color: "grey" }}
                    icon={faGoogle}
                  /> */}
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={faApple}
                  />
                </div>
                <div style={{ paddingLeft: 100 }}>Sign in with Apple</div>
              </Button>
            </div>

            {/* divider */}
            <div>
              <Divider plain style={{ paddingLeft: 100, paddingRight: 100 }}>
                or
              </Divider>
            </div>

            {/* form input */}
            <div style={{ paddingLeft: 100, paddingRight: 100 }}>
              <Form>
                <Form.Item>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Password" />
                </Form.Item>

                {/* for remember me / sign in  */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // padding: "10px 100px",
                    flexDirection: "row",
                  }}
                >
                  <div>
                    <Form.Item
                      {...tailLayout}
                      name="remember"
                      valuePropName="checked"
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </div>
                  <div>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </div>

                {/* forgot password */}
                <div>
                  <a href="#">Forgotten your password?</a>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
