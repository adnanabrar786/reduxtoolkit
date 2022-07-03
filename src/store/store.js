import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './reducers/usersReducer'
 
 const store = configureStore({
     reducer : {
        users : usersReducer
     }
     
})

export default store























// import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "./reducers/usersReducer";
 
// export default configureStore({
//     reducer : {
//         users : usersReducer
//     }
// })
  