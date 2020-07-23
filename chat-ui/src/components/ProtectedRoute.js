import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  token = localStorage.getItem("token");
  return (
    <Route {...rest} render={
      props => {
        if (token) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;