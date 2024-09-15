import React, { useState, useContext } from 'react';
import { DetailsContext } from './DetailsProvider';
import { Link } from 'react-router-dom';
import logo from '../photos/formlogo.png';

const Details = () => {
  const { details, setDetails } = useContext(DetailsContext);
  const [dynamicFields, setDynamicFields] = useState(details.dynamicFields || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleDynamicFieldChange = (index, e) => {
    const { value } = e.target;
    const newFields = [...dynamicFields];
    newFields[index].value = value;
    setDynamicFields(newFields);
    setDetails(prevDetails => ({ ...prevDetails, dynamicFields: newFields }));
  };

  const addField = () => {
    const label = prompt('Enter label for the new field:');
    if (!label) return;

    const type = prompt('Enter type for the new field (e.g., text, email, number, date, password):');
    if (!type) return;

    const newField = { label, type, value: "" };
    const newFields = [...dynamicFields, newField];
    setDynamicFields(newFields);
    setDetails(prevDetails => ({ ...prevDetails, dynamicFields: newFields }));
  };

  const removeLastField = () => {
    const newFields = dynamicFields.slice(0, -1);
    setDynamicFields(newFields);
    setDetails(prevDetails => ({ ...prevDetails, dynamicFields: newFields }));
  };

  return (
    <div className='form container '>
      <form>
        <div className='row '>
          <div className= ' container in-form '>
            <center>
              <img src={logo} alt="Logo" width="110" height="110" className="d-inline-block align-text-top justify-content-start" />
            </center>
            <p className='formtext my-4'>
              "Build" <br /> your "Business" Here
            </p>
          </div>

          <div id='division'>
            <div className='form-floating mb-4'>
              <input
                className='form-control'
                type="text"
                placeholder="name"
                name="name"
                value={details.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                className='form-control'
                type="text"
                placeholder="job_position"
                name="position"
                value={details.position}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Job Position</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                className='form-control'
                type="text"
                placeholder="place"
                name="place"
                value={details.place}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Place</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                className='form-control'
                type="tel"
                placeholder="phone_number"
                name="number"
                value={details.number}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                className='form-control'
                type="email"
                placeholder="email"
                name="email"
                value={details.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            {dynamicFields.map((field, index) => (
              <div className='form-floating mb-4' key={index}>
                <input
                  className='form-control'
                  type={field.type}
                  placeholder={field.label.toLowerCase().replace(/\s+/g, '_')}
                  value={field.value}
                  onChange={(e) => handleDynamicFieldChange(index, e)}
                />
                <label htmlFor={`dynamicField${index}`}>{field.label}</label>
              </div>
            ))}
            <div className='button-container'>
              <button type="button" className='btn btn-secondary my-3'>
                <Link to='/card' style={{ textDecoration: 'none', color: 'inherit' }}>Submit</Link>
              </button>
              <button type="button" className='btn btn-secondary mx-3 my-3' onClick={addField}>Add Field</button>
              <button type="button" className='btn btn-secondary' onClick={removeLastField}>Remove Field</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
