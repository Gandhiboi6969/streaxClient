import React from 'react';

import Timer from '../Timer/Timer.js';
import Chat from '../Chat/Chat.js';
import Todo from '../Todo/TodoList.js';



function Room({location}) {
  return (
    <div className="conatiner mt-5">
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card pricing-card" >
                    <div class="card-header">
                    </div>
                    <div class="card-body">        
                            <Timer/>
                            {/* <h1>jsbd</h1> */}
                    </div>
                </div> 
            </div>
            <div class="col-12 col-md-4">
                <div class="card pricing-card" >
                    <div class="card-header">
                    </div>
                    <div class="card-body">        
                            <Timer/>
                            {/* <h1>jsbd</h1> */}
                    </div>
                </div> 
            </div>
            <div class="col-12 col-md-4">
                <div class="card pricing-card" >
                    <div class="card-header">
                    </div>
                    <div class="card-body">        
                            <Timer/>
                            {/* <h1>jsbd</h1> */}
                    </div>
                </div> 
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card pricing-card" >
                    <div class="card-header">
                    </div>
                    <div class="card-body">        
                            <Todo/>
                            {/* <h1>jsbd</h1> */}
                    </div>
                </div> 
            </div>
            <div class="col-12 col-md-8">
                <div class="card pricing-card" >
                    <div class="card-header">
                    </div>
                    <div class="card-body">        
                            <Chat location={location}/>
                            {/* <h1>jsbd</h1> */}
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Room;
