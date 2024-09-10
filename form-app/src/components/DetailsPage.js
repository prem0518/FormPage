import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const DetailsPage = ({ users, handleEdit, handleDelete }) => {
  return (
    <div className="p-fluid flex align-items-center justify-content-center">
      <div className="form-container mt-4 p-3 shadow-2 w-full">
        <h2 className="text-center mt-2 border-1 p-3 surface-300">
          Details List
        </h2>
        <DataTable value={users} showGridlines className="mt-4">
          <Column field="name" header="Name" style={{ minWidth: "150px" }} />
          <Column field="email" header="Email" style={{ minWidth: "200px" }} />
          <Column field="age" header="Age" style={{ minWidth: "100px" }} />
          <Column
            field="gender"
            header="Gender"
            style={{ minWidth: "100px" }}
          />
          <Column
            field="address"
            header="Address"
            style={{ minWidth: "250px" }}
          />
          <Column
            field="country"
            header="Country"
            style={{ minWidth: "150px" }}
          />
          <Column field="state" header="State" style={{ minWidth: "150px" }} />
          <Column field="city" header="City" style={{ minWidth: "150px" }} />
          <Column
            field="mobile"
            header="Mobile"
            style={{ minWidth: "150px" }}
          />

          <Column
            header="Actions"
            body={(data) => (
              <div className="flex gap-2">
                <Button
                  className="p-button-sm w-8 p-button-primary justify-content-center"
                  onClick={() => handleEdit(data)}
                  style={{ minWidth: "50px" }}>
                  Edit
                </Button>
                <Button
                  className="p-button-sm p-button-danger w-8 justify-content-center"
                  onClick={() => handleDelete(data)}
                  style={{ minWidth: "50px" }}>
                  Delete
                </Button>
              </div>
            )}
            style={{ minWidth: "150px" }}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default DetailsPage;
