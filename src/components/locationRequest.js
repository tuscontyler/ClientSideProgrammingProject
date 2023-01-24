import React from 'react'; //import React library
 import { db } from '../firebase-db.js';
 import { onValue, ref, set,remove, update, push as firebasePush, push } from 'firebase/database';
 import {getDatabase} from 'firebase/database'
 import {useState} from 'react';
 import { get, query} from 'firebase/database'
 import Swal from 'sweetalert2'
export function RequestForm() {



 
    const [businessName, setBusinessName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [washers, setWashers] = useState('');
    const [dryers, setDryers] = useState('');

  
    function handleLocationSubmit(event) {
        event.preventDefault();


let data = {
    businessname:businessName,
    address:address,
    city:city,
    state:state,
    zipcode:zipCode,
    phonenumber:phoneNumber,
    washers:washers,
    dryers:dryers
}
      
     
     const db = getDatabase();
    const locRef = ref(db, "locations/");
    const locSnapshot = get(query(locRef))
    let entryCount = 0;
  
     
     Swal.fire({
        title:' submit location?',
        text: "You won't be able to undo this",
        showCancelButton: true,
        confirmButtonColor: '#7293A0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Submit'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Submitted',  
            firebasePush(locRef,data),
            setBusinessName(''),
            setAddress(''),
            setCity(''),
            setState(''),
            setZipcode(''),
            setPhone(''),
            setWashers(''),
            setDryers(''),
            'success'
          )
        }
      })
     


      }

    return (

   <div class ="container contact">
       <div class="forms">
           

<div class ="row">
    <div class="col">
        <div class ="card">
            <div class ="card-body">
            <h1 class="card-title">Location Request Form</h1>

            <form id ="location-form" onSubmit={handleLocationSubmit}>
            <label for="businessName">Business Name:</label><br/>
            <input type="text" id="businessName" name="businessName"onChange={event => setBusinessName(event.target.value)}  value={businessName}/><br/>
            <label for="address">Street Address:</label><br/>
            <input type="text" id="address" name="address"onChange={event => setAddress(event.target.value)}  value={address}/><br/>
            <label for="city">City:</label><br/>
            <input type="text" id="city" name="city"onChange={event => setCity(event.target.value)}  value={city}/><br/>
            <label for="state">State:</label><br/>
            <input type="text" id="state" name="state" onChange={event => setState(event.target.value)} value={state}/><br/>
            <label for="zipCode">Zip Code:</label><br/>
            <input type="text" id="zipCode" name="zipCode" onChange={event => setZipcode(event.target.value)} value={zipCode}/><br/>
            <label for="phoneNumber">phoneNumber:</label><br/>
            <input type="text" id="phoneNumber" name="phoneNumber" onChange={event => setPhone(event.target.value)} value={phoneNumber}/><br/>
            <label for="washers">Number of washers:</label><br/>
            <input type="number" min="0" id="washerNum" name="washer" onChange={event => setWashers(event.target.value)} value={washers}/><br/>

            <label for="dryers">Number of Dryers:</label><br/>
            <input type="number" min="0" id="dryerNum" name="dryer" onChange={event => setDryers(event.target.value)} value={dryers}/><br/>
            <button  value="Submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
             
        </div>
    </div>

    )
}



