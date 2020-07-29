import React from 'react'

const Header = (props) => {
    
    return (
        <div>
            This {props.name}'s header!
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default Header;
