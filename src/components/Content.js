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
    <div style={{ paddingTop: 100 }}>
      {/* for wrap   */}
      {/* big screen */}
      <Row>
        <Col md={12} xs={0} lg={12}>
          <div
            className="imageBG"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </Col>

        {/* 2nd col */}
        <Col md={12} xs={0} lg={12}>
          <div style={{ padding: 30 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
            >
              {/* signin n create div */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

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
              <div style={{}}>
                <Button
                  type="primary"
                  block
                  size="large"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      paddingRight: "5px",
                      borderRight: "1px solid white",
                    }}
                  >
                    {/* <FontAwesomeIcon
                    style={{ fontSize: "20px", color: "grey" }}
                    icon={faGoogle}
                  /> */}
                    <FontAwesomeIcon
                      style={{ fontSize: "20px" }}
                      icon={faGoogle}
                    />
                  </div>
                  <div>Sign in with Google</div>
                  {/* Sign in with Google */}

                  <div> </div>
                </Button>
              </div>

              {/* 2. Apple login */}
              <div
                style={{
                  paddingTop: 20,
                  color: "black",
                }}
              >
                <Button
                  type=""
                  block
                  size="large"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "black",
                    color: "white",
                    justifyContent: "space-between",
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
                  <div>Sign in with Apple</div>
                  <div> </div>
                </Button>
              </div>

              {/* divider */}
              <div>
                <Divider plain style={{}}>
                  or
                </Divider>
              </div>

              {/* form input */}
              <div style={{}}>
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
          </div>
        </Col>
      </Row>

      {/* for small screen */}
      <div>
        <Row>
          <Col md={12} xs={0} lg={12}>
            <div className="imageBG" style={{ width: "100%", height: "100%" }}>
              {/* <a href="#">
              <img
                style={{
                  width: "450px",
                  height: "400px",
                  // paddingRight: 100,
                  paddingLeft: 0,
                  padding: "30px 20px",
                }}
                src={droping}
              ></img>
            </a> */}
            </div>
          </Col>

          {/* 2nd col */}
          <Col md={0} xs={24} lg={0}>
            <div
              style={{ padding: 30, display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                {/* signin n create div */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

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
                <div style={{}}>
                  <Button
                    type="primary"
                    block
                    size="large"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        paddingRight: "5px",
                        borderRight: "1px solid white",
                      }}
                    >
                      {/* <FontAwesomeIcon
                    style={{ fontSize: "20px", color: "grey" }}
                    icon={faGoogle}
                  /> */}
                      <FontAwesomeIcon
                        style={{ fontSize: "20px" }}
                        icon={faGoogle}
                      />
                    </div>
                    <div>Sign in with Google</div>
                    {/* Sign in with Google */}

                    <div> </div>
                  </Button>
                </div>

                {/* 2. Apple login */}
                <div
                  style={{
                    paddingTop: 20,
                    color: "black",
                  }}
                >
                  <Button
                    type=""
                    block
                    size="large"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "black",
                      color: "white",
                      justifyContent: "space-between",
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
                    <div>Sign in with Apple</div>
                    <div> </div>
                  </Button>
                </div>

                {/* divider */}
                <div>
                  <Divider plain style={{}}>
                    or
                  </Divider>
                </div>

                {/* form input */}
                <div style={{}}>
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
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Content;
