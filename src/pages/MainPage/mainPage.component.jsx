import React from "react";
import Title from "../../components/title/title.component";
import AddNewInvoiceBox from "./../../components/addNewInvoiceBox/addNewInvoiceBox.component";
const MainPage = () => {
  return (
    <>
      <Title titleName="Invoices" />
      <AddNewInvoiceBox />
    </>
  );
};

export default MainPage;
