let data = [
    {
        "businessname": "bj's gifts giveaway & mini laundromat",
        "address": "75-02 jamaica avenue",
        "zipcode":"11421",
        "phonenumber": "7188699262"
    },
    {
        "businessname": "blue haven laundromat",
        "address": "2220 bath avenue",
        "zipcode": "11214" ,
        "phonenumber": "7187149194"
    },
    {
        "businessname": "delux laundry service",
        "address":"32-06 36 avenue",
        "zipcode": "11106",
        "phonenumber": "7183093038"
    },
    {
        "businessname": "eco wash",
        "address":"72 west 69 street ",
        "zipcode": "10023",
        "phonenumber": "2127873890"
    },
    {
        "businessname":"ez clean laundromat",
        "address": "48-08 broadway",
        "zipcode":  "11103",
        "phonenumber": "7189322132"
    },
    {
        "businessname":  "joseph's laundromat" ,
        "address": "68-18 fresh meadow lane",
        "zipcode":  "11365",
        "phonenumber": "6318062797"
    },
    {
        "businessname":"fresh scent laundry",
        "address": "66 horizon plaza",
        "zipcode":  "10460",
        "phonenumber": "7189913565"
    },
    {
        "businessname":"juana laundry" ,
        "address": "167 utica avenue",
        "zipcode":  "11213",
        "phonenumber": "7183632129"
    },
    {
        "businessname":"mr super laundromat" ,
        "address": "205-20 jamaica avenue",
        "zipcode":  "11423",
        "phonenumber": "7184681600"
    },
    {
        "businessname": "ocean bay laundromat",
        "address": "448 beach  129 street",
        "zipcode":      "11694",
        "phonenumber": "7184740696"
    }
    
];

let results=[];

function submissionFetch() {
    
    let res = document.getElementById("inputLocation").value;
    res.toLowerCase();
    //console.log(res);



searchFile(res);
//console.log(results.length);
let i,
    len = results.length,
    target = document.getElementById("resultList");

    for(i=0;i<len;i++){
        target.appendChild(createLi(results[i].businessname,results[i].address,results[i].zipcode,results[i].phonenumber));
    }

}


    


function searchFile(res){
    for (let x = 0; x < data.length; x++) {
      if ( data[x].businessname.includes(res)) {
          results.push( data[x]);
          console.log(data[x]);
      }
  }
  }

  function createLi(businessname,address,zipcode,phonenumber){
      let li = document.createElement("LI");
      li.innerText= businessname +" : "+ address+" , zipe code: "+zipcode+" phone number : "+phonenumber
      return li;
  }

  