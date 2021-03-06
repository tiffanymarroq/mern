import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';


import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button'




import { 
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/utils/validators';

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

const UpdatePlace = () => {

    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const [ formState , inputHandler , setFormData] = useForm({
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    }, true)

    const placeUpdateSubmitHandler = event => {
      event.preventDefault()
      console.log(formState.inputs)
    }

    useEffect ( () => {
      setFormData =({
        title: {
          value: identifiedPlace.title,
          isValid: true
        },
        description: {
          value: identifiedPlace.description,
          isValid: true
        }
      }, true)
    }, [setFormData, identifiedPlace])
    

    if(!identifiedPlace){
      return  (
        <div className='center'>
          <h2>No place found</h2>
        </div>
      )
    }

    return (
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id='title'
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Enter valid title"
          onInput= {inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id='description'
          element="textarea"
          type="text"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Enter valid description"
          onInput= {inputHandler }
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid} 
        />
        <Button type='submit' disabled={!formState.isValid}>
            Update place
        </Button>
      </form>  
    )
}


export default UpdatePlace;