import React from 'react'

const ErrorPage = (props) => {
  return (
    <div>
      <h1>Uh-oh! {props.err.status}: Something went wrong!</h1>
      <p>{props.err.message}</p>
    </div>
 )
}

export default ErrorPage


