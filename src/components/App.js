import React from 'react';
import Card from './Card';
import FormsElement from './FormsElement';
import axios from 'axios';

class App extends React.Component {
    state ={}
    constructor(props){
        super(props);
        this.state = {
            superHeroList: null,
            searchField: '',
            isLoading: false,
            showCard: false,
            cssClass: 'placeholder'
        }
    }
    fetchSuperHeroList = async ()=> {
        let res = await fetch(`http://localhost:3100/superHero?name=${this.state.searchField}`,{
            method: 'GET'
        })
        console.log(res,"res")
    }
    formSubmitHandler =(event) => {
        event.preventDefault()
        // console.log(this.state.searchField)
        this.fetchSuperHeroList()
    }
    onChangeHandler = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }
    handleCardView =()=> {
        if(!this.state.superHeroList){
            return;
        }else{
            return (
                <Card heroData={this.state.superHeroList} />
            )
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome To SuperHero List App</h1>
                <form onSubmit={this.formSubmitHandler} className="ui form ${this.state.cssClass}">
                    <FormsElement onChange={this.onChangeHandler} value={this.state.searchField} />
                </form>
                {this.handleCardView()}
            </div>
            
        )
    }
}
export default App;




// let hit = new Promise((resolve, reject) => {
//     fetch(`https://superheroapi.com/api/435853113652040/search/${this.state.searchField}`, {
//         method: 'GET',
//         mode: 'no-cors'
//     })
//     // resolve();
// })
// hit.then(data => {
//     // resolve(data);
//     console.log(data, "http")
//     // this.state.superHeroList = hit;
//     this.setState(prevState => {
//         if (!prevState) {
//             return
//         } else {
//             console.log(prevState, "previous state")
//         }
//     })
// })