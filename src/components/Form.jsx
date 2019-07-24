import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Form = props => {
    const {
        onChangeHandler,
        values: {name, email, password, confirmPassword},
        dirty,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isValid,
        setFieldTouched,
        isSubmitting
    } = props;

    const onChange = e => {
        e.persist();
        handleChange(e);
        onChangeHandler(e); // pass values to parent component state
    };

    const onBlur = e => {
        // Starts validation only after first onBlur event
        const {fieldName} = e.target;
        setFieldTouched(fieldName, true, false);
        handleBlur(e);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name='name'
                            variant='outlined'
                            label='Name'
                            helperText={touched.name && errors.name}
                            error={touched.name && !!errors.name}
                            fullWidth
                            required
                            onChange={onChange}
                            onBlur={onBlur}
                            value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='email'
                            variant='outlined'
                            label='Email'
                            helperText={touched.email && errors.email}
                            error={touched.email && !!errors.email}
                            fullWidth
                            required
                            onChange={onChange}
                            onBlur={onBlur}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='password'
                            type='password'
                            variant='outlined'
                            label='Password'
                            helperText={touched.password && errors.password}
                            error={touched.password && !!errors.password}
                            fullWidth
                            required
                            onChange={onChange}
                            onBlur={onBlur}
                            value={password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='confirmPassword'
                            type='password'
                            variant='outlined'
                            label='Confirm Password'
                            helperText={
                                touched.confirmPassword &&
                                errors.confirmPassword
                            }
                            error={
                                touched.confirmPassword &&
                                !!errors.confirmPassword
                            }
                            fullWidth
                            required
                            onChange={onChange}
                            onBlur={onBlur}
                            value={confirmPassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            fullWidth
                            disabled={!isValid || isSubmitting || !dirty}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Form;
