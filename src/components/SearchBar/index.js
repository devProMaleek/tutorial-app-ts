// Import the necessary libraries
import React, { useState, useEffect, useRef } from 'react';

// Import search icon
import searchIcon from '../../images/search-icon.svg';

// Import the styles
import { Wrapper, Content } from './SearchBar.styles';
import PropTypes from 'prop-types';

// Search Component
const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {setSearchTerm(state);}, 500)
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input type='text' placeholder='Search Movies' 
                onChange={event => setState(event.currentTarget.value)}
                value={state}/>
            </Content>
        </Wrapper>
    )
}

// Validating Props

SearchBar.propTypes = {
    callback: PropTypes.func
}

// Export the component
export default SearchBar;