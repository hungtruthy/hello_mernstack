import React from 'react';
import PropTypes from 'prop-types';
import './AppBar.scss';
import {
  Col,
  Container as BootstrapContainer,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';

AppBar.propTypes = {};

function AppBar(props) {
  return (
    <nav className="navbar-app">
      <BootstrapContainer className="trello-container">
        <Row>
          <Col sm={5} sx={12} className="col-no-padding">
            <div className="app-actions">
              <div className="item all">
                <i className="fa fa-th" />
              </div>
              <div className="item home">
                <i className="fa fa-home" />
              </div>
              <div className="item boards">
                <i className="fa fa-columns" />
                &nbsp;&nbsp;<strong>Boards</strong>
              </div>
              <div className="item search">
                <InputGroup className="group-search">
                  <FormControl
                    className="input-search"
                    placeholder="Jump to..."
                  />
                  <InputGroup.Text className="input-icon-search">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </Col>
          <Col sm={2} xs={12} className="col-no-padding">
            <div className="app-branding text-center">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <img
                  src="https://images.unsplash.com/photo-1634982478046-cefddd77800a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt="unsplash"
                  className="top-logo"
                />
                <span className="slogan">Trello Clone</span>
              </a>
            </div>
          </Col>
          <Col sm={5} xs={12} className="no-padding">
            <div className="user-actions">
              <div className="item quick">
                <i className="fa fa-plus-square-o" />
              </div>
              <div className="item news">
                <i className="fa fa-info-circle" />
              </div>
              <div className="item notification">
                <i className="fa fa-bell-o" />
              </div>
              <div className="item user-avatar">
                <img
                  src="https://images.unsplash.com/photo-1635107054702-04885895f51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                  alt="girl"
                />
              </div>
            </div>
          </Col>
        </Row>
      </BootstrapContainer>
    </nav>
  );
}

export default AppBar;
