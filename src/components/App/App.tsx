import css from "./App.module.css";
// import { useState, useEffect } from "react";
// import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
// import Notification from "../Notification/Notification";
// import VoteOptions from "../VoteOptions/VoteOptions";
// import VoteStats from "../VoteStats/VoteStats";

const App = () => {
  return (
    <div className={css.app}>
      {" "}
      <CafeInfo />
    </div>
  );
};

export default App;
