import React from 'react'
import { Routes as AppRouter, Route} from 'react-router-dom'
// import Details from '../pages/Details'
import Home from '../pages/Home'


const Roter = () => {
    return (
        <div>

            <AppRouter>
                <Route path="/" element={<Home />} />
                {/* <Route path='/users/:id' element={<Details />}/> */}
            </AppRouter>

        </div>
    )
}

export default Roter
