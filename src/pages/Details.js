// import { useEffect } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { getUser } from '../store/action/userAction'
// import { useSelector, useDispatch } from 'react-redux'
// import Loader from "../components/Loader"


// const Details = () => {

//     const { id } = useParams()

//     const dispatch = useDispatch()

//     const { loader, user } = useSelector(state => state.users);

//     useEffect(() => {
//         dispatch(getUser(id))
//     }, [])

//     return !loader ? (
//         <>
//             <button><Link to="/">Go Back</Link></button>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td><b>Name</b></td>
//                         <td>{user.name}</td>
//                     </tr>
//                     <tr>
//                         <td><b>User Name</b></td>
//                         <td>{user.username}</td>
//                     </tr>
//                     <tr>
//                         <td><b>Email</b></td>
//                         <td>{user.email}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </>

//     ) : (
//         <Loader />
//     )

// }

// export default Details;
