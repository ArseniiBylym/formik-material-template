import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './Menu.module.scss';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = e => {
        const fieldName = e.target.name;
        setData({
            ...data,
            [fieldName]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        setOpen(false);
    };
    return (
        <div className={styles.root}>
            <Button variant='contained' onClick={() => setOpen(!open)}>
                Menu
            </Button>
            {data && <div className={styles.data}>{JSON.stringify(data)}</div>}
            {open && (
                <div className={styles.sidebar}>
                    <h2>Sidebar</h2>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id='name'
                                    name='name'
                                    variant='outlined'
                                    label='Name'
                                    fullWidth
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='email'
                                    name='email'
                                    variant='outlined'
                                    label='Email'
                                    fullWidth
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='password'
                                    name='password'
                                    variant='outlined'
                                    label='Password'
                                    fullWidth
                                    type='password'
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    variant='outlined'
                                    label='Confirm Password'
                                    fullWidth
                                    type='password'
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Menu;
