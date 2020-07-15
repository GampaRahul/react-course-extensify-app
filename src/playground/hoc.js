// HOC: higher order component - A component that renders another component
console.log("hello")


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> this is info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private info. Please don't share! </p>}
            <WrappedComponent {...props}/>
        </div>
    );
};



//requireAuthentication
const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        //Alternatively we can use ternary operator for this
        <div>
            {!props.isAuthenticated && <p>Please Login</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    );
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />,document.getElementById('app'));
