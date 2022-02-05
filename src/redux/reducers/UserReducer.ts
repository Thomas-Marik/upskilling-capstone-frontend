import { ADD_USER,DELETE_USER,EDIT_USER,GET_ALL_USERS, STOCK_USER, UPDATE_STORED_USERS } from "../actions/types";


const initialState={
    userList:[]
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_STORED_USERS:
            return{...state,userList:action.data}
        case STOCK_USER:
            const newUsers =[]
            state.userList.forEach(user=>newUsers.push(user))
            newUsers.push(action.data)
            return {...state, userList:newUsers}
        default:
            return state;


    }
}
export default userReducer;