import React from 'react'; //import React library
import { db } from '../firebase-db.js';
import { onValue, ref, remove, update, push as firebasePush, push } from 'firebase/database';
import {getDatabase} from 'firebase/database'
import {useState} from 'react';
import Swal from 'sweetalert2'


export function ContactForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    
 
  
    function handleCommentSubmit(event) {
      event.preventDefault();


      let data ={
          firstName:firstName,
          lastName:lastName,
          email:email,
          comment:comment
      }
      
      const db = getDatabase();
      const comRef = ref(db,"comments/")    
        // firebasePush(comRef,data)
         console.log(data);
         let name = firstName +" "+lastName;
         Swal.fire({
            title: name + ' submit comment?',
            text: "You won't be able to undo this",
            showCancelButton: true,
            confirmButtonColor: '#7293A0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Submit'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Submitted',
                firebasePush(comRef,data),
                setFirstName(''),
                setLastName(''),
                setEmail(''),
                setComment(''),
                'success'
              )
            }
          })
            
           

         
    }
  


    return (

   <div class ="container contact">
       <div class="forms">
           <div class = "row">
               <div class ="col"> 
                   <div class ="card">
                       <div class ="card-body">
                            <h1 class="card-title">Contact Request Form</h1>
                       <form id="contact-form"onSubmit={handleCommentSubmit}> 
                            <label for="fName">First Name:</label><br/>
                            <input type="text"  id="fName" name="=fName"onChange={event => setFirstName(event.target.value)}     value={firstName} /><br/>

                            <label for="lName">Last Name:</label><br/>
                            <input type="text" id="lName" name="lName" onChange={event => setLastName(event.target.value)}  value={lastName}/><br/>
                            <label for="email">Email:</label><br/>
                            <input type="email" id="email" name="email" onChange={event => setEmail(event.target.value)} value={email}/><br/>
                            <label for="comments">Comments:</label><br/>
                            <textarea rows="4" cols="50" id="comments" name="comment" onChange={event => setComment(event.target.value)} value={comment}></textarea><br/>
                            <button  type="submit">Submit</button>
                       </form>
                       </div>
                   </div>
               </div>
             </div>


             
        </div>
    </div>

    )
}



