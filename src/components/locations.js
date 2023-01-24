//Import required functions from the React libraries

import React from 'react';
import { db } from '../firebase-db.js';
import { onValue, ref, remove, update, push as firebasePush, push } from 'firebase/database';
import { get, query} from 'firebase/database'
import {getDatabase} from 'firebase/database'
import {useState} from 'react';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

   




   export function MainLocation() {
    let filteredResults = [];
        const [searchData, setSearchData] = useState('');
    

        
        function addItem(input) {
            let a = document.getElementById("results");
            let  dataToShow = input;
            let  li = document.createElement("li");
            li.setAttribute('id', dataToShow);
            li.style.backgroundColor="white"
           li.style.borderTop ="solid";
           li.style.marginTop="1em"
            li.style.borderBottom ="solid";
            li.style.borderLeft="solid";
            li.style.borderRight="solid";  
           li.style.borderWidth = "1px";
           li.style.listStyle="none"
            li.innerText = dataToShow;
            a.appendChild(li);
      

        }

        function removeItems() {
            let ul = document.getElementById("results");
            if (ul.hasChildNodes)
            {
            while (ul.firstChild)
            {
            ul.removeChild(ul.firstChild);
            }

        }
    }





        
        function locationSearchSubmit(event) {
            event.preventDefault();
            console.clear();
            removeItems();
            
            console.log("search term: "+searchData);

    const db = getDatabase();
    const locRef = ref(db, "locations/");
    const locSnapshot = get(query(locRef))
    let results = [];       
    filteredResults = [];
    onValue(query(locRef), snapshot => {

        snapshot.forEach((child) => {
                results.push(child.val());   
          });

          
          
      })

      let searchdata = searchData.toLowerCase();
      for (let x =0 ; x <results.length;x++){ 
        

          let bname = results[x].businessname.toLowerCase();
          let addr = results[x].address.toLowerCase();
          let s = results[x].state.toLowerCase();
          let zip = results[x].zipcode;
          let city = results[x].city.toLowerCase();
          let phone = results[x].phonenumber;
          
         if(bname.includes(searchdata) || s.includes(searchdata)|| zip.includes(searchdata)|| city.includes(searchdata)|| phone.includes(searchdata)||addr.includes(searchdata)){
            filteredResults.push(results[x]);  
            let data = results[x].businessname +"\n"+ results[x].address +"\n"+results[x].city +"," +results[x].state +" "+results[x].zipcode+"\n"+  "Tel: "+results[x].phonenumber +"\n"+"Dryers Available : "+results[x].dryers +" Washers Available : "+results[x].washers+"\n";
            addItem(data)
         }
        }
 setSearchData('');
        }
        return (
            <div class="container">
                <div class="forms">
                    <form id="locationForm" onSubmit={locationSearchSubmit}>
                        <div class="form-group">
                            <input type="text"  onChange={event => setSearchData(event.target.value)}  value={searchData}class="form-control" id="inputLocation" placeholder="Location Search..." />
                        </div>
                        <button value="Search" type="submit">Search</button>
                    </form>
                    <div>
                        <ul id="results"></ul>
                    </div>
                </div>
            </div>        
        );
    }

