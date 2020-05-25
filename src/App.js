import React from "react";
import styles from "./App.module.css";
import MainPage from "./pages/MainPage/mainPage.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddNewInvoicePage from "./pages/AddNewInvoicePage/AddNewInvoicePage.component";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.container}>
          <Switch>
            <Route exact path="/add" component={AddNewInvoicePage} />

            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
