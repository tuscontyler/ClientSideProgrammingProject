let commentData = [];
let locationData =[];

function commentFormFetch() {
    let first_name = document.getElementById("fName").value;
    let last_name = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;
   

let data = "First Name: "+first_name +"\n"+"Last Name: "+last_name+"\n"+"Email: "+email+"\n"+"Comment: "+comments+"\n"
commentData.push(data);

for(let i =0;i<commentData.length;i++){
    //console.log(commentData[i]);
}

    
}


function locationFormFetch() {
    let business_name = document.getElementById("businessName").value;
    let street_address = document.getElementById("address").value;
    let City = document.getElementById("city").value;
    let State = document.getElementById("state").value;
    let ZipCode = document.getElementById("zipCode").value;
    let PhoneNumber =document.getElementById("phoneNumber").value;   

let locData =  '{ "businessName":'+`${business_name}`+ " , " +
 '"address":' + `${street_address}`+ " , " +
 '"zipcode":' + `${ZipCode}`+ " , " +
 '"city":' + `${City}`+ " , " +
 '"state":' + `${State}`+ " , " +
 '"phonenumber":' + `${PhoneNumber}`+ "}";



locationData.push(locData);
for(let i =0;i<locationData.length;i++){
 //   console.log(locationData[i]);
}


    
}