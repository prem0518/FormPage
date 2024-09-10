import React from "react";
import "../components/FormPage.css";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

const FormPage = ({
  formInput,
  errors,
  handleChange,
  handleDropdownChange,
  handleSubmit,
  editing,
}) => {
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "Canada", value: "canada" },
    { label: "USA", value: "usa" },
    { label: "Sri Lanka", value: "sl" },
  ];

  return (
    <div className="p-fluid flex align-items-center justify-content-center">
      <div className="form-container bg-white p-3 border-round shadow-2 w-full md:w-full lg:w-full">
        <h2 className="text-center mt-2 border-1 p-3 surface-300">Form Page</h2>
        <div className="form-grid grid">
          <div className="field col-12 md:col-6">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={formInput.name}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your name"
            />
            {errors.name && <small className="p-error">{errors.name}</small>}
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              type="email"
              value={formInput.email}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your email"
            />
            {errors.email && <small className="p-error">{errors.email}</small>}
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="age">Age</label>
            <InputNumber
              id="age"
              value={formInput.age}
              onValueChange={(e) =>
                handleChange({ target: { id: "age", value: e.value } })
              }
              className="w-full"
              placeholder="Enter your age"
            />
            {errors.age && <small className="p-error">{errors.age}</small>}
          </div>

          <div className="field col-12 md:col-6">
            <label>Gender</label>
            <div className="gender-options flex gap-3 mt-2">
              {genderOptions.map((option) => (
                <div key={option.value} className="p-field-radiobutton">
                  <RadioButton
                    inputId={option.value}
                    name="gender"
                    value={option.value}
                    onChange={(e) =>
                      handleChange({
                        target: { id: "gender", value: e.value },
                      })
                    }
                    checked={formInput.gender === option.value}
                  />
                  <label className="p-2" htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.gender && (
              <small className="p-error">{errors.gender}</small>
            )}
          </div>

          <div className="field col-12 md:col-12">
            <label htmlFor="address">Address</label>
            <InputTextarea
              id="address"
              value={formInput.address}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your address"
            />
            {errors.address && (
              <small className="p-error">{errors.address}</small>
            )}
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="mobile">Mobile Number</label>
            <InputText
              id="mobile"
              value={formInput.mobile}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && (
              <small className="p-error">{errors.mobile}</small>
            )}
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="country">Country</label>
            <Dropdown
              id="country"
              options={countryOptions}
              value={formInput.country}
              onChange={(e) => handleDropdownChange("country", e.value)}
              className="w-full"
              placeholder="Select Country"
            />
            {errors.country && (
              <small className="p-error">{errors.country}</small>
            )}
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="state">State</label>
            <InputText
              id="state"
              value={formInput.state}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your state"
            />
            {errors.state && <small className="p-error">{errors.state}</small>}
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="city">City</label>
            <InputText
              id="city"
              value={formInput.city}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your city"
            />
            {errors.city && <small className="p-error">{errors.city}</small>}
          </div>

          <div className="field-checkbox col-12 md:col-12 mb-1">
            <Checkbox
              id="checkbox"
              checked={formInput.checkbox}
              onChange={handleChange}
            />
            <label htmlFor="checkbox" className="p-checkbox-label">
              Accept Terms & Conditions
            </label>  
          </div>
          {errors.checkbox && (
              <small className="p-error ml-2">{errors.checkbox}</small>
            )}
        </div>

        <div className="col-12 flex justify-content-center">
          <Button
            label={editing ? "Update" : "Submit"}
            onClick={handleSubmit}
            className="w-auto mt-2 p-button-success"
          />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
