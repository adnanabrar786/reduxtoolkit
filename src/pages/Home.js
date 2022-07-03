import React ,{useRef} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addUsers } from '../store/reducers/usersReducer';

const Home = () => {

  const  {users } = useSelector(state => state.users);
  const  state  = useSelector(state => state.users);


   console.log(state);

  const inputRef = useRef('')
  const dispatch = useDispatch()

  const storeUsers = (e) => {
    e.preventDefault();
    dispatch(addUsers(inputRef.current.value))
      }

  return (
    <div>
      
 <form onSubmit={storeUsers}>
   <input type="text" ref={inputRef} />
    <button>Submit</button>
 </form>


      {
        users.map((user , index) => (
               <ul key={index}>
                 <li>{user.id}</li>
               </ul>
        ))
      }

    
    </div>
  )
}

export default Home




























// import React , {useRef} from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import {addUser} from '../store/reducers/usersReducer'

// const Home = () => {

//   const state = useSelector(state => state.users);
//   console.log(state.users);

//   const inptRef = useRef('');
//   const dispatch = useDispatch()

//   const storeUsers = (event) => {
//     event.preventDefault();
//     dispatch(addUser(inptRef.current.value));
//     inptRef.current.value = "" 
    
//     }

//   return (
//     <>
//             <form onSubmit={storeUsers}>
//               <input type='text' name='' ref={inptRef} /> <br/><br/>
//               <input type='submit'/>
//             </form>
//     </>
//   )
// }

// export default Home
