import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import FormCreateLink from '../../components/Dashboard/FormCreateLink';
import Wrapper from '../../assets/dashboard';
const useStyles = makeStyles({
  container: {
    backgroundColor: '#fffffe',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '200px',
    margin: '0 auto',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Grid item className='container'>
        <Box px={3} py={5}>
          <Box mb={2}>
            {/* <Typography color="textPrimary" variant="h4" align="center">
              Reachyetiss
            </Typography> */}
            <div className={classes.imgContainer}>
              <img src='' alt='' className={classes.img} />
            </div>
          </Box>
          <FormCreateLink />
        </Box>
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
