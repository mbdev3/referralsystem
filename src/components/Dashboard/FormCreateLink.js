import React, { useState } from 'react';
import { Box, Button, makeStyles, Snackbar, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MuiAlert from '@material-ui/lab/Alert';
import LinkIcon from '@material-ui/icons/Link';
import { createLinkSchema } from '../../schemas/pagesSchemas';
import { createLinkAPI } from '../../api/pageAPI';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 16,
  },
});

const FormCreateLink = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, errors, setError, clearErrors } = useForm({
    resolver: yupResolver(createLinkSchema),
  });
  const handleCreateDynamicLink = ({ name }) => {
    // It's already validated
    console.log(name);
    const createDynamicLink = async () => {
      try {
        setIsLoading(true);
        const dynamicLinkCreated = await createLinkAPI(name);
        if (dynamicLinkCreated.ok) {
          history.push(`/${name}`);
        }
      } catch (error) {
        console.log('error occurred', error);
        setError('createDynamicLinkFailed', {
          message: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };
    createDynamicLink();
  };

  return (
    <>
      <Box mb={3}>
        <Typography color='textPrimary' variant='h4' align='center'></Typography>
        <h1> Create your referral link </h1>
      </Box>

      <form autoComplete='off' onSubmit={handleSubmit(handleCreateDynamicLink)}>
        <Box display='flex' flexDirection='column'>
          <TextField
            name='name'
            inputRef={register}
            id='name'
            label='Name'
            type='text'
            variant='outlined'
            className='textField'
            error={errors.email && errors.email?.message !== ''}
            helperText={errors.email?.message}
            disabled={isLoading}
          />
          <Snackbar
            open={
              errors.createDynamicLinkFailed?.message &&
              errors.createDynamicLinkFailed?.message !== ''
            }
            autoHideDuration={6000}
            onClose={() => clearErrors('createDynamicLinkFailed')}>
            <Alert onClose={() => clearErrors('createDynamicLinkFailed')} severity='error'>
              {errors.createDynamicLinkFailed?.message}
            </Alert>
          </Snackbar>
          <Button
            type='submit'
            variant='contained'
            size='large'
            disabled={isLoading}
            className={classes.marginBottom}
            endIcon={<LinkIcon />}>
            Create
          </Button>
        </Box>
      </form>
    </>
  );
};

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default FormCreateLink;
