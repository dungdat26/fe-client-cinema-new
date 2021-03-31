import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Review.css";

class Review extends Component {
  state = {
    news: [],

    title_review: [
      {
        title_1: "Blog điện ảnh",
      },
    ],
    
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/client-page/get-allNews")
      .then((res) => {
        console.log(res.data);
        this.setState({ news: res.data.news }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <div style={{minHeight:"500px"}}>
            <h3 className="title_review">Blog điện ảnh</h3>
            {this.state.news.map((newsItem) => {
              return (
               
                <div className="d-flex-m-auto-contai" key={newsItem.title}>
                  
                  <img src={newsItem.urlImg} alt="" className="img-review" />
                  <div style={{ marginLeft: "20px" }}>
                  <Link to={`/news-detial/${newsItem._id}`} > <h5 className="title-review">{newsItem.title}</h5></Link> 
                    <p>{newsItem.brief} 
                    </p>
                  </div>
                </div>
                
              );
            })}
         </div>
        
      </Container>
    );
  }
}

export default Review;
