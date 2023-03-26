import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {red} from "@mui/material/colors";

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: any = {}
            const regxResult = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            if (!values.email) {
                errors.email = 'Required';
            } else if (!regxResult) {
                errors.email = 'Invalid email addres'
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 2) {
                errors.password = 'Invalid should be more 2 symbol'
            }
            return errors
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>

                    <form onSubmit={formik.handleSubmit}>
                    <FormGroup>

                            <TextField label="Email"
                                       margin="normal"
                                       {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: " red"}}>{formik.errors.email}</div>}

                            <TextField type="password"
                                       label="Password"
                                       margin="normal"
                                       {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password &&
                                <div style={{color: " red"}}>{formik.errors.password}</div>}
                            <FormControlLabel
                                label={'Remember me'}
                                control={<Checkbox
                                    {...formik.getFieldProps('rememberMe')}/>}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                    </FormGroup>
                        </form>
            </FormControl>
        </Grid>
    </Grid>
}
