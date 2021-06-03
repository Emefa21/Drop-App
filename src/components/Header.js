import React from "react";
import { Row, Col, Button, Typography, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import drop from "../assets/drop3.jpg";
import drops from "../assets/dropi.png";

const { Text, Link } = Typography;
const Header = () => {
  return (
    <div>
      <Row>
        <Col xs={24} md={0}>
          <div
            style={{
              paddingTop: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a href="#">
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  display: "flex",
                }}
                src={drops}
              ></img>
            </a>
          </div>
        </Col>
      </Row>

      {/* for large screen */}
      <Row>
        <Col md={24} xs={0}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px 150px",
              // border: "1px solid grey",
              boxShadow: "0 4px 3px -3px grey",
              alignItems: "center",
            }}
          >
            {/* for first div */}
            <div>
              <Button
                danger
                style={{
                  color: "blue",
                  border: "1px solid blue",
                  borderRadius: "5px",
                }}
              >
                Try Dropbox Business
              </Button>
            </div>
            {/* for 2nd div */}
            <div>
              <a href="#">
                <img
                  style={{ width: "200px", height: "60px" }}
                  src={drop}
                ></img>
              </a>
            </div>
            {/* for 3rd div */}
            <div>
              <Link target="_blank" style={{ color: "blue" }}>
                Download the app
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
