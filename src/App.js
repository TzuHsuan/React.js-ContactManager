import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from './components/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <AddContact />
              <Contacts />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
