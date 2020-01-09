import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../utils/validators';
import './NewPlace.css';



const NewPlace = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {

    }, [])

    const descriptionInputHandler = useCallback((id, value, isValid) => {

    }, [])

    return (
        <form className="place-form">
            <Input 
                id='title'
                element="input" 
                type="text" 
                label="Title" 
                onInput={titleInputHandler}
                validators = {[VALIDATOR_REQUIRE()]} 
                errorText="Please enter text"   />
            <Input 
                id='description'
                element="textarea" 
                type="text" 
                label="Description" 
                onInput={titleInputHandler}
                validators = {[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter valid description"   />
        </form>
    )
};

export default NewPlace;