import React, { useState } from 'react';
import '../styles/form.css'
import AutoCompleteUsersList from './AutoCompleteUsersList';

const Form = () => {

    const [display, setDisplay] = useState(false)
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        handleDisplayList()
        setSearchInput("")
        alert("Submit")
    }

    const handleDisplayList = () => setDisplay(prevState => !prevState)
    const handleInputValue = e => setSearchInput(e.target.value)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="User Name" className='search-input' onClick={handleDisplayList} onChange={handleInputValue} value={searchInput} />
                <button type="submit" className='search-button'>Submit</button>
            </form>
            {display && <AutoCompleteUsersList setSearchInput={setSearchInput} handleDisplayList={handleDisplayList} searchInput={searchInput}/>}
        </>

    );
}

export default Form;