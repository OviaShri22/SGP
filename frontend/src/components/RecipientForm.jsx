import React, { useState } from 'react';
import { submitRequest } from '../services/api';
import '../styles/forms.css';
import rawfood from "../assets/images/rawfood.jpg"
import cookedfood from "../assets/images/cookedfood.png"
import packedfood from "../assets/images/packedfood.png"
import loginimage from "../assets/form_image.png" ;

const RecipientForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [description, setDescription] = useState('');
  const [toServe, setToServe] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRequest = async () => {
    const requestData = {
      selectedCategory,
      description,
      toServe,
      street,
      city,
      state,
      postalCode,
      country,
    };
    try {
      await submitRequest(requestData);
      alert('Request submitted successfully!');
    } catch (error) {
      alert('Error submitting request.');
    }
  };

  return (
    <div>
      <div className="storage-section">
        <div className="leftsection">
          <img
            src={loginimage}
            alt="Food Donation Image"
            style={{ maxWidth: '94%' }}
          />
        </div>
        <div className="rightsection">
          <h1 className="heading" style={{ fontSize: '45px' }}>
            Request
          </h1>
          <br />
          <div className="input-form">
            <div className="formsgroup">
              <label htmlFor="inputCategory">Category Of Food</label>
              <br />
              <br />
              <div className="formsrow">
                <span
                  className={`formsgroup col-md-4 ${
                    selectedCategory === 'Cooked Food' ? 'selected' : ''
                  }`}
                  onClick={() => handleCategoryClick('Cooked Food')}
                >
                  <img
                    style={{ width: 100 }}
                    src={cookedfood}
                    alt="Cooked Food"
                  />
                  <br />
                  <span>Cooked Food</span>
                </span>
                <span
                  className={`formsgroup col-md-4 ${
                    selectedCategory === 'UnCooked Food' ? 'selected' : ''
                  }`}
                  onClick={() => handleCategoryClick('UnCooked Food')}
                >
                  <img
                    style={{ width: 100 }}
                    src={rawfood}
                    alt="Un-Cooked Food"
                  />
                  <br />
                  <span>Uncooked Food</span>
                </span>
                <span
                  className={`formsgroup col-md-4 ${
                    selectedCategory === 'Packed Food' ? 'selected' : ''
                  }`}
                  onClick={() => handleCategoryClick('Packed Food')}
                >
                  <img
                    style={{ width: 100 }}
                    src={packedfood}
                    alt="Packed Food"
                  />
                  <br />
                  <span>Packed Food</span>
                </span>
              </div>
            </div>
            <div className="formsgroup">
              <label htmlFor="inputDescription">Describe Your Requirements</label>
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Description"
                className="formscontrol"
                id="inputDescription"
              />
            </div>
            <div className="formsgroup">
              <label htmlFor="inputToServe">No. Of People to be served</label>
              <input
                onChange={(e) => {
                  setToServe(e.target.value);
                }}
                placeholder="No. of People"
                className="formscontrol"
                id="inputToServe"
              />
            </div>
            <div className="formsgroup">
              <label htmlFor="inputAddress">Address</label>
              <input
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
                placeholder="Address"
                className="formscontrol"
                id="inputAddress"
              />
            </div>
            <div className="formsrow">
              <div className="formsgroup">
                <label htmlFor="inputCity">City</label>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  label="City"
                  placeholder="City"
                  className="formscontrol"
                  id="inputCity"
                />
              </div>
              <div className="formsgroup">
                <label htmlFor="inputState">State</label>
                <input
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  label="State"
                  placeholder="State"
                  className="formscontrol"
                  id="inputState"
                />
              </div>
              <div className="formsgroup">
                <label htmlFor="inputZip">Zip Code</label>
                <input
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                  }}
                  label="Postal Code"
                  placeholder="Zip Code"
                  className="formscontrol"
                  id="inputZip"
                />
              </div>
            </div>
            <div className="formsgroup">
              <label htmlFor="inputCountry">Country</label>
              <input
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                label="Country"
                placeholder="Country"
                className="formscontrol"
                id="inputCountry"
              />
            </div>
          </div>
          <div className="bottom-buttons">
            <button className="button-main" onClick={handleRequest}>
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;
