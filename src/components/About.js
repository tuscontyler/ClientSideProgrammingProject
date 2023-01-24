import React from 'react';
// import "./index.css";

export function AboutPage(){
    return(
        <>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="container home">
                        <div className="bg-light p-5 rounded">
                            <div class="about-desc">
                                <div>
                                    <div>
                                        <h1>Why You Should Use Us</h1>
                                    </div>
                                    <p>Tired of going to laundromats and seeing all the machines occupied? 
                                        Our service help eliminate the inconvience of waiting in a packed laundromat. Our service
                                        alows you to see if 
                                        machines are available or in use. You can even reserve machines for use in queue. This removes the human factor of
                                        interacting
                                        with people asking if they are finished using a machine. Our simple web application meets the needs of any
                                        community
                                        by providing
                                        an easily accepsible system to locate, check availability, reserve, and pay for a machine.
                                    </p>
                                </div>
                                <div>
                                    <h1>Why You Should Use Us</h1>
                                </div>
                                <p>
                                    This application can be used in any community that have listed laundromat locations. Whether you live in
                                    a small town or a big city our services can help provide you with information to make your laundry quicker
                                    and simple.
                                </p>

                                <div>
                                        <h2>External sources</h2>
                            </div>
                            <p><a href="https://github.com/uwf-cop4864-fa2022/project-httyl" target="_blank">Github repo</a></p>
                            <p><a href="https://github.com/Algomorph/nyc-data-exploration/blob/master/scraping/Laundromats.csv" target="_blank">Inital Location data: </a>
                            We used this data as a starting point for our location database</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}