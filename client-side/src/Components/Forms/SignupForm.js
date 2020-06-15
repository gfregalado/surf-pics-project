import React from 'react';
import { Formik } from 'formik';

import surfIcon from '../../Assets/Icons/surf-equipment.svg';
import photoIcon from '../../Assets/Icons/photo-camera.svg';
import CustomSwitch from '../../Components/UI/Switch/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Classes from './SignupForm.module.css';

const SignupForm = (props) => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label For="LastName">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          ></input>
          <div className={Classes.ErrorBox}>
            {errors.email && touched.email && errors.email}
          </div>

          <label For="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          ></input>
          <p>{errors.password && touched.password && errors.password}</p>

          <div className={Classes.Switch}>
            <img
              src={photoIcon}
              alt="surfIcon"
              width="40px"
              style={{ paddingRight: '27px' }}
            />
            <FormControlLabel
              control={<CustomSwitch onChange={props.switch} name="userType" />}
            />
            <img src={surfIcon} alt="surfIcon" width="40px" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ marginRight: '30%', width: '50%' }}
          >
            Create Account
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
