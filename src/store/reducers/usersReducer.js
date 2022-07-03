import { createSlice } from "@reduxjs/toolkit";

 
const usersReducer = createSlice({
    name : "users",
    initialState: {
        users : [
            { id: "1", name: "ali" },
            { id: "2", name: "ahmed" }
        ],
    },
    reducers: {
        addUsers :(state, action) => {
            console.log(action);
            state.users = [...state.users , action.payload]
        }

    }
})

export const {addUsers} = usersReducer.actions

export default usersReducer.reducer;




















// import { createSlice } from "@reduxjs/toolkit";


// const usersReducer = createSlice({
//     name: "users",
//     initialState: {
//         users:
//             [
//                 { id: "1", name: "ali" },
//                 { id: "2", name: "ahmed" }
//             ]
//         },
//         reducers :{
//             addUser : (state , action) => {
//                 console.log(action);
//                 state.users =  [...state.users , action.payload]
//             }
//         }
//     })

// export const {addUser}  = usersReducer.actions ;
// export default usersReducer.reducer