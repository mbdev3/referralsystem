import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Dashboard from "../sections/dashboard/Dashboard";
//
import Wrapper from "./../assets/mainPage";
// const useStyles = makeStyles(() => ({
//   container: {
//     height: "100vh",
//   },
// }));

const CreatePageScreen = () => {
  // const classes = useStyles(); className={classes.container}
  return (
    <Wrapper>
      <Dashboard />
    </Wrapper>
  );
};

export default CreatePageScreen;
