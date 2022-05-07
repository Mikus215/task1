import React from 'react'
import AutoCompleteUser from './AutoCompleteUser';
import { useSelector } from 'react-redux'

const AutoCompleteList = ({setSearchInput, handleDisplayList, searchInput}) => {

    const usersList = useSelector(state => state.users)

    return (
        <div>
            <ul onClick={handleDisplayList}>
                {usersList.filter(user => user.username.indexOf(searchInput) !== -1).map(user => (
                    <AutoCompleteUser key={user.id} username={user.username} setSearchInput={setSearchInput}/>
                ))}
            </ul>
        </div>
    );
}

export default AutoCompleteList;