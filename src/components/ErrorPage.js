import React from 'react'
import {useRouteError} from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3 className="mt-3">
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <em>{error.statusText || error.message}</em>
                    </p>
                </h3>
            </div>
        </div>
    </div>
  )
}
