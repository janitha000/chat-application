import React from 'react'
import './TextContainer.css'
import onlineIcon from '../../icons/onlineIcon.png'


const TextContainer = ({ users }) => {

    return (
        <div className='textContainer'>
            {users
                ? <div> <h1> People currently actively chatting: </h1>
                    {users.map(user => (
                        <div key={user.name} className="activeItem">
                            {user.name}
                            <img src={onlineIcon} />
                        </div>
                    ))}
                </div>
                : null}
        </div>
    )

}

export default TextContainer;