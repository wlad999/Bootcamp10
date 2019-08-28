import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../redux/auth-Reducer';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css';

const maxLength20 = maxLengthCreator(20);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          type={'password'}
          name={'password'}
          component={Input}
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />{' '}
        remember me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const MSTP = state => ({ isAuth: state.auth.isAuth });
export default connect(
  MSTP,
  { login },
)(Login);
