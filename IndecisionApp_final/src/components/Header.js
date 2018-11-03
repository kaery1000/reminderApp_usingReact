import React from 'react'

// Stateless functional componenet for Header
const Header = (props) =>  (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    </div>
);

// adding default props
Header.defaultProps = {
    title: "Indecision App",
    subTitle : "My first React app"
}
export default Header;