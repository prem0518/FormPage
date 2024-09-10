import React, { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import FormPage from "./components/FormPage";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Prem kumar",
      email: "prem@example.com",
      age: 25,
      gender: "male",
      address: "Golden City",
      country: "India",
      state: "TN",
      city: "Coimbatore",
      mobile: "9876543210",
      checkbox: false,
    },
  ]);

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    age: null,
    gender: "",
    address: "",
    country: "",
    state: "",
    city: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target || e;
    setFormInput({
      ...formInput,
      [id]: type === "checkbox" ? checked : value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]:
        type === "checkbox"
          ? checked
            ? ""
            : prevErrors[id]
          : value && typeof value === "string" && value.trim() !== ""
          ? ""
          : prevErrors[id],
    }));
  };

  const handleDropdownChange = (id, value) => {
    setFormInput({
      ...formInput,
      [id]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : prevErrors[id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requiredFields = [
      { key: "name", message: "Name is required" },
      { key: "email", message: "Email is required" },
      { key: "age", message: "Age is required" },
      { key: "gender", message: "Gender is required" },
      { key: "address", message: "Address is required" },
      { key: "country", message: "Country is required" },
      { key: "state", message: "State is required" },
      { key: "city", message: "City is required" },
      { key: "mobile", message: "Mobile number is required" },
      { key: "checkbox", message: "You must accept the terms & conditions" },
    ];

    const agePattern = /^[1-9]\d*$/;
    const mobilePattern = /^[6-9]\d{9}$/;
    const emailPattern = /@.+\./;

    requiredFields.forEach(({ key, message }) => {
      const value = formInput[key];

      if (key === "checkbox" && !value) {
        newErrors[key] = message;
      } else if (typeof value === "string" && !value.trim()) {
        newErrors[key] = message;
      } else if (
        key === "age" &&
        (!value || !agePattern.test(value) || value < 18 || value > 100)
      ) {
        newErrors[key] = "Please enter a valid age between 18 and 100";
      } else if (key === "mobile" && (!value || !mobilePattern.test(value))) {
        newErrors[key] = "Please enter a valid 10-digit mobile number";
      } else if (key === "email" && (!value || !emailPattern.test(value))) {
        newErrors[key] = "Please enter a valid email address";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (editing) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editingId ? { ...user, ...formInput } : user
          )
        );
        setEditing(false);
        setEditingId(null);
      } else {
        const newUser = {
          id: users.length + 1,
          ...formInput,
        };
        setUsers([...users, newUser]);
      }
      setFormInput({
        name: "",
        email: "",
        age: null,
        gender: "",
        address: "",
        country: "",
        state: "",
        city: "",
        mobile: "",
        checkbox: false,
      });
    }
  };

  const handleEdit = (data) => {
    setFormInput(data);
    setEditing(true);
    setEditingId(data.id);
  };

  const handleDelete = (data) => {
    setUsers(users.filter((user) => user.id !== data.id));
  };

  return (
    <PrimeReactProvider>
      <FormPage
        formInput={formInput}
        errors={errors}
        handleChange={handleChange}
        handleDropdownChange={handleDropdownChange}
        handleSubmit={handleSubmit}
        editing={editing}
      />
      <DetailsPage
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </PrimeReactProvider>
  );
};

export default App;
