import React from 'react';

function Loader (){
    return(
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader"></div>
            </div>
            <p>Loading...</p>
            <p></p>
        </div>
    )
}

export default Loader