import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./UpperNavbar.css";
import { Button, Col, Form, Row } from "react-bootstrap";
const SearchBar = () => {
  return (
    <>
      <Form className="">
        <Row className="mx-0 border rounded-pill align-items-center ">
          <Col xs={4} className="">
            <select className="text-secondary">
              <optgroup>
                <option>All Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </optgroup>
            </select>
          </Col>

          {/* <span className="text-secondary">|</span> */}
          <Col xs={6} className="">
            <input
              className="text-secondary"
              placeholder="What you looking for?"
              type="text"
            />
          </Col>

          <Col xs={2} className="">
            <Button className="rounded-pill text-white d-flex align-items-center justify-content-center">
              <IoIosSearch />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchBar;
