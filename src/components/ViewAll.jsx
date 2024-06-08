import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

    const[data,changeData]=useState(

        [
            {"Name":"GTA","Price":1200},            
            {"Name":"Rocket League","Price":1000},            
            {"Name":"Far Cry 4","Price":900}            
        ]

    )
    return (
        <div>
<NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                          
        {data.map(
            (value, index)=>{
               return <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{value.Name}</h5>
                            <p class="card-text">Price:{value.Price}</p>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                </div>
            </div>
            }
        )

        }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ViewAll