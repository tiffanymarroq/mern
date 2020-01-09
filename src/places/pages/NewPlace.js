import React, { useCallback, useReducer } from 'react';
import Button from '../../shared/FormElements/Button';
import Input from '../../shared/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../utils/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs){
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                }else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId] : { value: action.value, isValid: action.isValid } 
                },
                isValid: formIsValid
         
            }
        case 'TOUCH':
                return {
                    ...state,
                    isTouched: true,
                }
        default:
            return state;
    }
}

const NewPlace = () => {

    const [ formState , dispatch ] = useReducer(
        formReducer, {
        inputs: {
            title: {
                value:'',
                isValid: false
            },
            description: {
                value:'',
                isValid: false
            }
        }, 
        isValid: false,
        
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, [])


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
                errorText="Please enter text"   />
            <Input 
                id='description'
                element="textarea" 
                type="text" 
                label="Description" 
                onInput={inputHandler}
                validators = {[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter valid description"   />
            <Button type='submit' disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    )
};

export default NewPlace;