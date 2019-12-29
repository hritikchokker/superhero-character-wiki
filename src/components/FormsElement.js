import React from 'react';

class FormsElement extends React.Component {

    render(){
        return(
                <div className="field">
                    <label>Characters Name</label>
                    <input onChange={this.props.onChange} value={this.props.value} placeholder="Search Your Hero" type="text" />
                    <button className="ui button primary" type="submit"> Search</button>
                </div>
           
        )
    }

                
}
                
export default FormsElement