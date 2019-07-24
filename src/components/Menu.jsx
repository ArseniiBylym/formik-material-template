import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from './Form';
import styles from './Menu.module.scss';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Should be at least 6 symbols')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password does not match')
        .required('Confirm password is required')
});

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

    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            setSubmitting(false);
        }, 2000);
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
                    <Formik
                        validationSchema={validationSchema}
                        validateOnChange
                        initialValues={data}
                        isInitialValid={validationSchema.isValidSync(data)}
                        onSubmit={onSubmit}
                        render={props => (
                            <Form onChangeHandler={onChange} {...props} />
                        )}
                    />
                </div>
            )}
        </div>
    );
};

export default Menu;
