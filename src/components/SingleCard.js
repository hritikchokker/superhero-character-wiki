import React from 'react';

class SingleCard extends React.Component{

    constructor(props){
        super();
        console.log(props,"propspspsosps")
    }

    render(){
        return(
            <div className="ui three doubling stackable cards">
                <div className="ui card">
                    <div className="image">
                        <div className="ui ">
                            <div className="square image">
                                <img alt="t" src={this.props.value.image.url}></img>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui ">
                            <div className="header">
                                <div className="very short line"></div>
                                <div className="medium line"></div>
                            </div>
                            <div className="paragraph">
                                <div className="short line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui  primary button">{this.props.value.name}</div>
                        <div className="ui secondary button">{this.props.value.id}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SingleCard;