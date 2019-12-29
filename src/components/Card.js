import React from 'react';
import SingleCard from '../components/SingleCard';

class Card extends React.Component {

    constructor(props){
        super(props);
        console.log(props,"inside data");
        
    }
    testFunc = () =>{
        let text = this.props.details.superHeroList.map(element=>{
            return <SingleCard key={element.id} value={element} />
        })
        return text;
            // this.props.details.superHeroList.map(element => {
            //   return( <SingleCard valuss={element} />)
            // });
    }
    render(){
        return(
            <div>
                {this.testFunc()}
            </div>
                );
    }

}
export default Card;