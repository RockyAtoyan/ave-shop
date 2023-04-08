import {Field, Form, Formik} from "formik";
import {Intro} from "../Intro";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';
import {useState} from "react";

const requireValidate = (value: string) => {
    if (!value) return 'required'
    return undefined
}

const SignForm = () => {
    return <Formik initialValues={{
        email: '',
        password: ''
    }} onSubmit={(data) => {
        console.log(data)
    }}>
        {({errors, touched, isValidating}) => {
            return <Form>
                <h2>SING IN</h2>
                <Field className={errors.email && touched.email ? 'error' : ''} validate={requireValidate} type={'email'} name={'email'}
                       placeholder={'Your Email..'}/>
                <Field className={errors.password && touched.password ? 'error' : ''} validate={requireValidate} type={'password'}
                       name={'password'} placeholder={'Your password..'}/>
                <div className="form_actions">
                    <button type={'submit'}>sing in</button>
                    <a href="#">
                        <span>Forgot your password</span>
                        <span><ArrowRightAltIcon/></span>
                    </a>
                </div>
            </Form>
        }}
    </Formik>
}

const RegisterForm = () => {

    const [checkValue, setCheckValue] = useState(false)

    return <Formik initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        subscribe: false,
    }} onSubmit={(data) => {
        if(data.confirmPassword === data.password) console.log(data)
        else {
            console.log('Wrong password')
        }
    }}>
        {({errors, touched, isValidating}) => {
            return <Form>
                <h2>Register</h2>
                <Field className={errors.email && touched.email ? 'error' : ''} validate={requireValidate} type={'email'} name={'email'}
                       placeholder={'Your Email..'}/>
                <Field className={errors.password && touched.password ? 'error' : ''} validate={requireValidate} type={'password'}
                       name={'password'} placeholder={'Your password..'}/>
                <Field className={errors.confirmPassword && touched.confirmPassword ? 'error' : ''} validate={requireValidate} type={'password'}
                       name={'confirmPassword'} placeholder={'Confirm password..'}/>
                <div className="block">
                    <div className="block_input">
                        <Field className={errors.subscribe && touched.subscribe ? 'error' : ''}  type={'checkbox'}
                               id={'subscribe'} name={'subscribe'}/>
                        {checkValue && <div className="block_value">
                            <CheckIcon/>
                        </div>}
                    </div>
                    <label htmlFor='subscribe'>Sign up for exclusive updates, discounts, new arrivals, contests, and
                        more!</label>
                </div>
                <div className="form_actions">
                    <button type={'submit'}>create account</button>
                    <p>
                    <span>
                        By clicking ‘Create Account’, you
                        agree to our <a href="#">Privacy Policy <span><ArrowRightAltIcon/></span></a>
                    </span>
                    </p>
                </div>
            </Form>
        }}

    </Formik>
}

export const Auth = () => {
    return <section className={'auth'}>
        <Intro title={'welcome to ave'} subtitle={'sign in or register'}/>
        <div className="menu_container">
            <div className="auth_forms">
                <SignForm/>
                <RegisterForm/>
            </div>
        </div>
    </section>
}