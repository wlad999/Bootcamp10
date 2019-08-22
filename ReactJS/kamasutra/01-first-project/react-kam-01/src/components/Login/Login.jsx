import React from 'react';
import { Field, reduxForm } from 'redux-form';
const LoginForm = props => {
  return (
    <form>
      <div>
        <Field type="text" placeholder={'Login'} />
      </div>
      <div>
        <Field type="text" placeholder={'Password'} />
      </div>
      <div>
        <Field type={'checkbox'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm />
    </div>
  );
};
export default Login;
