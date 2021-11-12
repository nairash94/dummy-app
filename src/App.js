import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-lists/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import axios from 'axios';

export default class App  extends Component{

    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField:""
        };    
    }

    componentDidMount(){
        const fetchList= async () => {
            const data= await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(data);
            const userList = data.data;
            this.setState({monsters : userList});
        }
        fetchList();
    }


    render(){
        const {monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(e=>{
            console.log(e);
            return e.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return(
            <div className='App'>
                <h1> Monster Rolodex</h1>
                <SearchBox placeholder="Search Monsters" handleChange={e => this.setState({ searchField: e.target.value })} />
                <CardList monsters={filteredMonsters} >
                </CardList>
            </div>
        )
    }
}