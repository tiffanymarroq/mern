import React from 'react';
import { useParams } from 'react-router-dom';
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

const UpdatePlace = ( ) => {
    // const [ formState , dispatch ] = useReducer(
    //     formReducer, {
    //     inputs: {
    //         title: {
    //             value:'',   
    //             isValid: false
    //         },
    //         description: {
    //             value:'',
    //             isValid: false
    //         }
    //     }, 
    //     isValid: false,
        
    // });

    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    if(!identifiedPlace){
      return  <div className='center'>
            <h2>No place found</h2>
        </div>
    }

    return (
        <form className="place-form">
            <Input
                id='title'
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Enter valid title"
                onInput= {() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id='title'
                element="textarea"
                type="text"
                label="Title"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Enter valid description"
                onInput= {() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type='submit' disabled={true}>
                Update place
            </Button>
        </form>
    )
}


export default UpdatePlace;