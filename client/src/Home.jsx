import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import ApplicationsList from './ApplicationsList';


function Home () {
    return (
        <>
        {/* <Router> */}
            <h1>Hi. This is the home route</h1>
            {/* <nav>
                <Link to='/'>Back To Home</Link>{ ' | ' }
                <Link to='/ApplicationsList'>All My Applications</Link>{ ' | ' }
            </nav>
            
            <main>
                {/* <Route path='/Home' component={Home} />
                <Route path='/ApplicationsList' component={ApplicationsList} /> */}
            {/* </main> */}
        {/* </Router> */}
        {/* */}
        </>
    )
}

export default Home;