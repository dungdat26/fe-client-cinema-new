import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import axios from "axios";
class DetailNews extends Component {
  state = {
    dataNews: "",
  };
  componentDidMount() {
    const { id_news } = this.props.match.params;
    axios
      .get(`http://localhost:4000/client-page/getdetail-News/${id_news}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ dataNews: res.data.news });
        console.log(this.state.dataNews);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Container>
        <div style={{ margin: "20px 150px 50px 150px", fontSize: "20px", textAlign:"justify" }}>
        <h2>
          {this.state.dataNews.title}
        </h2>
        <p>
          {this.state.dataNews.content}
        </p>
        <img
          src={this.state.dataNews.urlImg}
          alt=""
          width="60%"
          style={{ margin: "0px 0px 10px 200px" }}
        />

        <div>
          {this.state.dataNews.urlNewsClip == "" ? null : (
            <div>
              <iframe
                style={{ margin: "20px 0px 50px 300px" }}
                width="720"
                height="600"
                src={this.state.dataNews.urlNewsClip}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <p >
          {this.state.dataNews.content2}
        </p>
        <div>
          {this.state.dataNews.urlNewsClip == "" ? null : (
            <div>
              <img
                src={this.state.dataNews.urlImg2}
                alt=""
                width="50%"
                style={{ margin: "0px 0px 10px 200px" }}
              />
            </div>
          )}
        </div>

        <p s>
          {this.state.dataNews.content3}
        </p>
        <p >
          {this.state.dataNews.content4}
        </p>
        <div>
          {this.state.dataNews.urlNewsClip == "" ? null : (
            <div>
              <img
                src={this.state.dataNews.urlImg3}
                alt=""
                width="50%"
                style={{ margin: "0px 0px 10px 200px" }}
              />
            </div>
          )}
        </div>
        <p>
          {this.state.dataNews.content5}
        </p>
        <Button
          variant="contained"
          color="secondary"
          className="mb-2"
          onClick={this.props.history.goBack}
        >
          Quay lại trang trước
        </Button>
        </div>
      </Container>
    );
  }
}

export default DetailNews;
