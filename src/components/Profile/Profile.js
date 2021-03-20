import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { TextField, FormControl, Grid, Button } from "@material-ui/core/";
// import ItemPurchaseFilm from "../ItemPurchaseFilm/ItemPurchaseFilm";
import ItemPurchaserFilm from "./ItemPurchaserFilm";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    name: "",
    phone_number: "",
    day_of_birth: "",
    gender: "",
    balance: "",
    purchasedFilms: [],
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/my-profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({ ...res.data.user });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <Container>
        <h1 style={{ margin: "0 0 20px 36%" }}>Profile Page</h1>
        <Row>
          <Col md={4}>
            <FormControl
            // style={{ margin: "10px 0px 20px  250px", width: "50%" }}
            >
              <div>
                <h3>Username : {this.state.name}</h3>
              </div>
              <div>
                <h3>Balance : {this.state.balance}</h3>
              </div>

              <Link to={`/edit-trang-ca-nhan`} style={{ marginTop: "20px" , width:"50px" }}>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                 
                >
                  Edit
                </Button>
              </Link>
            </FormControl>
          </Col>
          <Col md={8} className="">
            <Grid
              container
              spacing={1}
              style={{
                justifyContent: "space-evenly",
                width: " 100%",
              }}
            >
              {this.state.purchasedFilms.map((film) => {
                return (
                  <Grid
                    key={film.EN_name}
                    container
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    spacing={3}
                  >
                    <ItemPurchaserFilm
                      EN_name={film.EN_name}
                      VN_name={film.VN_name}
                      urlImg={film.urlImg}
                      id_phim={film._id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Col>
        </Row>
      </Container>
    );
  }
}
