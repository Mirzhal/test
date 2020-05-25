import React from "react";
import { Button } from "@material-ui/core";
import styles from "./addNewInvoiceBox.module.css";
import { Link } from "react-router-dom";

const AddNewInvoiceBox = () => {
  return (
    <div className={styles.addNewWrapper}>
      <h3>Actions</h3>
      <Link to="/add">
        <Button variant="contained" color="primary">
          Add New
        </Button>
      </Link>
    </div>
  );
};

export default AddNewInvoiceBox;
