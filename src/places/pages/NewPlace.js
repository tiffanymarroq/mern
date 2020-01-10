import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';

 

import './PlaceForm.css';


const NewPlace = () => {

    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: ''
        },
        address: {
            value: '',
            isValid: ''
        }
    })

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input 
                id='title'
                element="input" 
                type="text" 
                label="Title" 
                onInput={inputHandler}
                validators = {[VALIDATOR_REQUIRE()]} 
                errorText="Please enter text" />

            <Input 
                id='description'
                element="textarea" 
                type="text" 
                label="Description" 
                onInput={inputHandler}
                validators = {[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter valid description" />

            <Input 
                id='address'
                element="textarea" 
                type="text" 
                label="Address" 
                onInput={inputHandler}
                validators = {[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid address" />    

            <Button type='submit' disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    )
};

export default NewPlace;