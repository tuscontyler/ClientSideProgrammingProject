//Import required functions from the React libraries
import React from 'react';
import { db } from '../firebase-db.js';
import { onValue, ref, remove, update, push as firebasePush, push } from 'firebase/database';
import { get, query} from 'firebase/database'
import {getDatabase} from 'firebase/database'
import { useState } from 'react';
//  import "./index.css";

export function HomePage () {

    function showDropdown() {
        document.getElementById("div-to-hide").style.visibility = "visible";
        document.preventDefault();
        console.clear();
        removeItems();

        const db = getDatabase();
        const locRef = ref(db, "locations/");
        let results = [];
        
        onValue(query(locRef), snapshot => {
            snapshot.forEach((child) => {
                results.push(child.val());
            });
        })

 
        let data = "Dryers Available : " + results[0].dryers + " Washers Available : " + results[0].washers + "\n";
        addItem(data);
    }

    function addItem(input) {
        let a = document.getElementById("res");
        let dataToShow = input;
        let li = document.createElement("li");
        li.setAttribute('id', dataToShow);
        a.appendChild(li);
    }
    
    function removeItems() {
        let ul = document.getElementById("res");
        if (ul.hasChildNodes) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }

        }
    }

    function closeDropdown() {
        document.getElementById("div-to-hide").style.visibility = "hidden";
    }

    return (
        <main id='home'>
            <div className="row">
                <div>
                    <div className="container home p-5 rounded">
                        <div className="col-md-8 content">
                            <h1>Welcome to Washaway Laundry</h1>
                            <h1>Welcome to Washaway Laundry</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row machine-selector">
                <div className="col-md-8 home">
                    <div className="home card">
                        <img src="../img/washers.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Big Suds Laundromat</h3>
                            <h5 className="card-subtitle mb-2 text-muted">Select Machines</h5>
                            <button type="button" onClick={showDropdown} className="btn btn-outline-dark" id="aPopup">Get Started</button>
                            <div class="container">
                                <div class="popup card p-4 rounded" id="div-to-hide">
                                        <ul class="card-body res">                                                           
                                        </ul>
                                    <button type="button" onClick={closeDropdown} id="cPopup">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

