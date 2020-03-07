import React ,{Component} from 'react'
import Axios from 'axios';

const context=React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case "Delete_Contact":
        {
            return({
                ...state,
                contacts:state.contacts.filter(contact=>(contact.id!==action.payload))
            })
        }
        case "Add_Contact":{
            return({
                ...state,
                contacts:[action.payload,...state.contacts]
            })
        }
        case "Update_Contact":{
            return({
                ...state,
                contacts:state.contacts.map((contact)=>(contact.id===action.payload.id?(contact=action.payload):(contact)))
            })
        }
        default:
            return state
    }
}
export default class Provider extends Component {
    state={
        contacts:[],
        dispatch:(action=>{
            this.setState(reducer(this.state,action))
        })  
    }

    render() {
        
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
    async componentDidMount(){
        const res=await Axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({contacts:res.data});
    }
}

export const Consumer= context.Consumer;