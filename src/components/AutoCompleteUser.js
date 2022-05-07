import React from 'react'

const AutoCompleteUser = ({ username, setSearchInput }) => {
    const handleChooseValueFromList = () => setSearchInput(username)
    return (
        <li className='user' onClick={handleChooseValueFromList}>
            {username}
        </li>
    );
}

export default AutoCompleteUser;