import React, { useState } from "react";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Button,
  Divider,
  Modal,
  Form,
  Input,
  Radio,
  Checkbox,
} from "antd";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {/* for divider */}
      <div style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 100 }}>
        <Divider />
      </div>

      {/* for next row */}
      <div style={{ paddingTop: 50 }}>
        <Row>
          {/* left col */}
          <Col
            // className="drop"
            xs={24}
            md={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 150,
              textAlign: "left",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                justifyItems: "center",
              }}
            >
              <a href="#">
                <h3>Dropbox</h3>
              </a>
              <a href="#">
                <p>Install</p>
              </a>
              <a href="#">
                <p>Mobile</p>
              </a>
              <a href="#">
                <p>Pricing</p>
              </a>
              <a href="#">
                <p>Business</p>
              </a>
              <a href="#">
                <p>Enterprise</p>
              </a>
              <a href="#">
                <p>Features</p>
              </a>
            </div>
            <div>
              <a href="#">
                <h3>About us</h3>
              </a>
              <a href="#">
                <p>Dropbox Blog</p>
              </a>
              <a href="#">
                <p>About</p>
              </a>
              <a href="#">
                <p>Branding</p>
              </a>
              <a href="#">
                <p>News</p>
              </a>
              <a href="#">
                <p>Jobs</p>
              </a>
            </div>
            <div>
              <a href="#">
                <h3>Support</h3>
              </a>
              <a href="#">
                <p>Help Centre</p>
              </a>
              <a href="#">
                <p>Contact Us</p>
              </a>
              <a href="#">
                <p>Copyright</p>
              </a>
              <a href="#">
                <p>Cookies</p>
              </a>
              <a href="#">
                <p>Privacy and Terms</p>
              </a>
              <a href="#">
                <p>Sitemap</p>
              </a>
            </div>
            <div>
              <a href="#">
                <h3>Community</h3>
              </a>
              <a href="#">
                <p>Referrals</p>
              </a>
              <a href="#">
                <p>Forum</p>
              </a>
              <a href="#">
                <p>Copyright</p>
              </a>
              <a href="#">
                <p>Twitter</p>
              </a>
              <a href="#">
                <p>Facebook</p>
              </a>
              <a href="#">
                <p>Developers</p>
              </a>
            </div>
          </Col>

          {/* right col */}
          <Col xs={24} md={12}>
            <div>
              <Button type="text" onClick={showModal}>
                <GlobalOutlined />
                English (United Kingdom)
                <DownOutlined />
              </Button>
              <Modal
                title="Choose a language"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href="#"> Bahasa Indonesia</a>
                    <a href="#"> Bahasa Malaysia</a>
                    <a href="#"> Dansk</a>
                    <a href="#"> Deutch</a>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href="#"> Espanol (Latinoamerica)</a>
                    <a href="#"> Francais</a>
                    <a href="#"> Italiano</a>
                    <a href="#"> Nederlands</a>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href="#"> Svenska</a>
                    <a href="#"> Polski</a>
                    <a href="#"> Portugues</a>
                    <a href="#"> Espanol</a>
                  </div>
                </div>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
