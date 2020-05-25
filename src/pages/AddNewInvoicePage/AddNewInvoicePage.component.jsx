import React from "react";
import { TextField, Button } from "@material-ui/core";
import Title from "../../components/title/title.component";
import styles from "./AddNewInvoicePage.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
const AddNewInvoicePage = () => {
  const [state, setState] = useState({
    create: new Date(),
    no: Math.random() * 5,
    supply: new Date(),
    comment: "",
  });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    dispatch({
      type: "SIMPLE_ACTION",
      payload: state,
    });
    e.preventDefault();

    console.log(state);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.addNewWrapper}></div>
        <Title titleName="Add New Invoice" />
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
          value={state.comment}
          onChange={(e) => setState(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Invoice
        </Button>
      </form>
    </div>
  );
};

export default AddNewInvoicePage;
