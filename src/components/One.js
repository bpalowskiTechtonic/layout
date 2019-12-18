import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../styles/App.scss";

class One extends Component {
  state = {
    info: null
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    let info = await axios.get("https://jsonplaceholder.typicode.com/users");
    let arr = info.data.map(x => x.name);
    this.setState({
      info: arr
    });
  };

  display = () => {
    const { info } = this.state;

    if (info) {
      return (
        <div className="container">
          <div className="rightCards">
            <Col span={12}>
              <div className="topCard"> col-12</div>
              <div className="bottomCard"> col-12</div>
            </Col>
          </div>

          <div className="leftCard">
            <Col span={12}>
              <div className="skill-left-card">
                {info.map((i, x) => (
                  <Col className="inner-skill-left-card" key={x}>
                    <p>{i}</p>
                  </Col>
                ))}
              </div>
            </Col>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="wholeContainer">
        <div className="outerContainer">
          <div>
            <Row type="flex" className="headerName">
              <Col span={24}>col-6</Col>
            </Row>
          </div>
          <div>
            <Row type="flex">
              <Col span={6} order={4}>
                1 col-order-4
              </Col>
              <Col span={6} order={3}>
                2 col-order-3
              </Col>
              <Col span={6} order={2}>
                3 col-order-2
              </Col>
              <Col span={6} order={1}>
                4 col-order-1
              </Col>
            </Row>
          </div>
        </div>
        <div className="bodyConatiner">
          <div>{this.display()}</div>
        </div>
      </div>
    );
  }
}

export default One;
