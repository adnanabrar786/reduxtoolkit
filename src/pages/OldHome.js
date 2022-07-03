// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useRef } from 'react'
// import { addUser } from '../store/reducers/usersReducer'
// import { getUsers } from '../store/action/userAction'
// import UsersList from '../components/UsersList'
// import Loader from '../components/Loader'
// import Filter from '../components/Filter'


// const Home = () => {

//     // const state = useSelector((state) => state.users)
//     const { users, loader } = useSelector(state => state.users);
//     // console.log(state.users);
//     const dispatch = useDispatch()

//     // const inputRef = useRef();

//     useEffect(() => {
//         dispatch(getUsers())
//     }, []);

//     // const storeUsers = (e) => {
//     //         e.preventDefault();
//     //         console.log(inputRef.current.value);
//     //         // payload userReducer k andr reducers k andr adduser mai jo hy wo yahn say a raha hy
//     //         dispatch(addUser(inputRef.current.value))
//     //         inputRef.current.value = "";
//     // }

//     return !loader ? (
//         <>
//             <Filter />
//             <table>
//                 <thead>
//                     <tr>
//                         <td>S.No</td>
//                         <td>Name</td>
//                         <td>UserName</td>
//                         <td>Email</td>
//                         <td>Address</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         users.map((user, index) => (
//                             <UsersList key={index} index={index} user={user} />
//                         ))}
//                 </tbody>
//             </table>
//         </>
//     )
//         : <Loader />


// }

// export default Home

// // <form onSubmit={storeUsers}>
// // <input type="text" placeholder='add usres...'  ref={inputRef} />   <br/><br/>
// // <button>submit</button>
// // {/* <label>{inputRef.current.value}</label> */}
// // </form>
