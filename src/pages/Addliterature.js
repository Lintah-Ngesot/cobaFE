import React, { useState, useEffect } from "react";
import Navbars from "../component/Navbars";
import { Form, Card, Row, Col, Button, Alert } from "react-bootstrap";
import { API } from "../config/api";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

function Addliterature() {
  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    isbn: "",
    author: "",
    attache: "",
  });

  const [message, setMessage] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    console.log("punya si ", e.target.name);
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form?.title);
      formData.set("publicationdate", form?.publicationdate);
      formData.set("pages", form?.pages);
      formData.set("isbn", form?.isbn);
      formData.set("author", form?.author);
      formData.set("attache", form.attache[0], form.attache[0].name);

      console.log(form);

      const response = await API.post("/literatur", formData, config);
      console.log(response);

      navigate("/profile");

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  useEffect(() => {
    console.log(form);
  }, [form.fileattach]);

  return (
    <>
      <div>
        <Navbars />
      </div>
      <h3 style={{ marginLeft: "115px", color: "white" }}> Add Literature</h3>

      <div style={{ backgroundColor: "black", marginTop: "11vh" }}>
        <form
          onSubmit={(e) => {
            handleSubmit.mutate(e);
          }}
          className=" row col-10 d-flex justify-content-center"
          style={{ marginLeft: "120px" }}
        >
          <div className="row g-2 justify-content-center">
            <div className="d-grid gap-2">
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>
            <div className="d-grid gap-2">
              <Form.Control
                type="text"
                placeholder="Publication Date"
                name="publicationdate"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>
            <div className="d-grid gap-2">
              <Form.Control
                type="text"
                placeholder="Pages"
                name="pages"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>
            <div className="d-grid gap-2">
              <Form.Control
                type="text"
                placeholder="ISBN"
                name="isbn"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>
            <div className="d-grid gap-2">
              <Form.Control
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>

            <div>
              <div className="col-4">
                <div className="form-floating">
                  <Form.Group className=" mt-2 ms-2 d-flex ">
                    <Form.Label
                      for="fileattach"
                      className="d-block p-2 bg-dark text-white rounded border"
                      type="file"
                      style={{ cursor: "pointer" }}
                    >
                      Attach Thumbail
                    </Form.Label>
                    <Form.Control
                      type="file"
                      id="fileattach"
                      name="attache"
                      onChange={handleChange}
                      accept="image/*,.pdf" 
                      hidden
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <button
                class="btn btn-danger float-md-end btn-l d-grid gap-2 col-2"
                type="submit"
                
              >
                Add Literature
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addliterature;
