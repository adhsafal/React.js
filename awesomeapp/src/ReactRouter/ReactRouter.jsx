import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import Services from './Services'
import User from './User'
import Search from './Search'
import Error from './Error'

const ReactRouter = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path='/about' component = {About} />
                <Route exact path='/contact' component = {Contact}/>
                <Route exact path='/Services' component = {Services}/>
                <Route path='/User/:fname/:lname' component = {User}/>
                <Route exact path='/Search' component = {Search}/>
                {/* <Route component={Error} /> */}
                {/* Incase you don't want yo display error page and directly
                want to send user to homepage then use redirect. */}
                <Redirect to='/about' />
            </Switch>
        </>
    )
}

export default ReactRouter;


// .menu_style{
//     width: 100%;
//     line-height: 60px;
//     background-color: rgb(92, 52, 52);
//     display: flex;
//     justify-content: space-around;
// }

// a {
//     color: cadetblue;
// }

// a.active_class{
//     color:coral;
//     border-bottom: 1px solid blue;
// }

// .searchbar{
//     width: 50%;
//     height: auto;
//     margin: 0 auto;
//     text-align: center;
// }

// .searchbar input {
//     margin: 30px 0;
//     padding: 5px 10px;
//     border-radius: 5px;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// }

