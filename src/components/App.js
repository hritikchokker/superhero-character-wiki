import React from 'react';
import Card from './Card';
import FormsElement from './FormsElement';
import Loader from '../components/loader';

class App extends React.Component {
    state ={}
    constructor(props){
        super(props);
        this.state = {
            superHeroList: [],
            searchField: '',
            isLoading: true,
            showCard: false,
            // cssClass: 'placeholder'
        }
    }
    fetchSuperHeroList =  ()=> {
        fetch(`  http://localhost:3100/superHero?name=${this.state.searchField}`,{
            method: 'GET'
        })
        .then(res=> res.json())
        .then(data=> {
            // console.log(data);
            if(data){

                this.setState({
                    superHeroList: data,
                    isLoading: false,
                    showCard: true
                })
            }
            // this.handleCardView();
            // console.log(this.state)
        });
    }
    formSubmitHandler =(event) => {
        event.preventDefault()
        if(this.state.searchField !== ''){
            this.fetchSuperHeroList()
        }
    }
    onChangeHandler = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }
    handleCardView =()=> {
        // console.log(this.state,"state")
        if(this.state.showCard && !this.state.isLoading&& this.state.superHeroList.length > 0){
            return (
                <Card details={this.state} />
            )
        }else if(this.state.isLoading){
            return(
                <div>
                <Loader/>
                </div>
            )
        }
    }

    render() {
        // let simmerClass=this.state
        return (
            <div>
                <h1>Welcome To SuperHero List App</h1>
                <form onSubmit={this.formSubmitHandler} className={`ui form`}>
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