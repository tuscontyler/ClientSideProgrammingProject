import React, { useEffect } from 'react'; //import React library

const washers = [
    {
        "id": 1,
        "Type": "Washer",
        "Availability": "Unavailable"
    },
    {
        "id": 2,
        "Type": "Washer",
        "Availability": "Available"
    },
    {
        "id": 3,
        "Type": "Washer",
        "Availability": "Available"
    },
    {
        "id": 4,
        "Type": "Washer",
        "Availability": "Available"
    },
    {
        "id": 5,
        "Type": "Washer",
        "Availability": "Available"
    },
    {
        "id": 6,
        "Type": "Washer",
        "Availability": "Unavailable"
    }
];
const dryers = [
    {
        "id": 1,
        "Type": "Dryer",
        "Availability": "Available"
    },
    {
        "id": 2,
        "Type": "Dryer",
        "Availability": "Available"
    },
    {
        "id": 3,
        "Type": "Dryer",
        "Availability": "Available"
    },
    {
        "id": 4,
        "Type": "Dryer",
        "Availability": "Available"
    },
    {
        "id": 5,
        "Type": "Dryer",
        "Availability": "Unavailable"
    },
    {
        "id": 6,
        "Type": "Dryer",
        "Availability": "available"
    }
];
let washerList = washers.map((machine,index) =>{
    if(machine.Availability === 'Unavailable'){
    return ( <div key={index} className="col-12 col-md-6 machine ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Washer {machine.id}</h5>
                        <p style={{color: 'red'}}className="card-text">{machine.Availability}</p>
                    </div>
                 </div>
            </div>
        );
    }else{
        return ( <div key={index} className="col-12 col-md-6 machine ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Washer {machine.id}</h5>
                        <p className="card-text">{machine.Availability}</p>
                    </div>
                 </div>
            </div>
    );
    }
    
});
let dryerList = dryers.map((machine,index) =>{
    if(machine.Availability === 'Unavailable'){
        return ( <div key={index} className="col-12 col-md-6 machine ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Washer {machine.id}</h5>
                        <p style={{color: 'red'}}className="card-text">{machine.Availability}</p>
                    </div>
                 </div>
            </div>
        );
    }else{
        return ( <div key={index} className="col-12 col-md-6 machine ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Washer {machine.id}</h5>
                        <p className="card-text">{machine.Availability}</p>
                    </div>
                 </div>
            </div>
        );
    }
});


export function MachineCards(){
    const [visible, setVisible] = React.useState(false);
    // Show Dryers
    const [dryerVisible, setDryerVisible] = React.useState(false);
    const breakpoint = 569;

            // Show Dryer Element
            // Hide Washerse
            // Copy Washer css styling
            // Remove Washer css styling


    useEffect(() =>{
        if(window.innerWidth > breakpoint){
            setDryerVisible(true);
            setVisible(false);
        }
    
    },[]);
    
    const handleClick = (event) => {
        if(event.currentTarget.textContent === 'Dryers'){
            setVisible(true);
            setDryerVisible(true);
           
        }else{
            setVisible(false);
            setDryerVisible(false);
        }
    }
    const [selected, setSelected] = React.useState({text:'col-6 heading selected'});
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='container machine washer'>
                            <div className='container heading washer'>
                                <div className='row'>
                                    <div onClick={handleClick} className={visible === true ? "col-6 heading": selected.text}>
                                        <h1>Washers</h1>
                                        {/* <h1 onClick={handleClick}>Washers</h1> */}
                                    </div>
                                    <div  onClick={handleClick} className={visible === false ? "col-6 heading": selected.text}>
                                        <h1>Dryers</h1>
                                    </div>
                                </div>
                            </div>
                            {!visible && <div className="row">
                                {washerList}
                            </div>}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='container machine dryer'>
                            <div className='container heading dryer'>
                                <h1>Dryers</h1>
                            </div>
                            {dryerVisible && <div className='row'>
                                {dryerList}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}