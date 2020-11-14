import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const HomePage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>HOME PAGE</h1>
        </div>
    );
};

const TopicsList = (props) => {
    return (
        <div>
            <h1>TOPIC LIST PAGE</h1>
        </div>
    );
};

const TopicDetail = (props) => {
    return (
        <div>
            {/* History Props Navigation */}
            <button onClick={() => props.history.push('/topics')}>Topics</button>
            {/* Link Navigation */}
            <Link to="/">Home</Link>
            <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
        </div>
    );
};

// const ErrorPage = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>
//                 You're Lost: there's nothing like <span style={{color: 'red'}}>{props.match.params.lostUrl}</span>{' '}
//                 on our website
//             </h1>
//         </div>
//     );
// };

function OurRoute() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/topics" component={TopicsList} />
                {/* <Route path="/:lostUrl" component={ErrorPage} /> */}
                <Route path="/topics/:topicId" component={TopicDetail} />
            </Switch>
        </div>
        /* NOTE: 
           One of the things that React-Router-Dom does for us is that
           any component that get rendered by our 'root' get passed three
           arguments.
           # The three arguments are: history | location | match 
           # The component that gets rendered is going to be the component
             we pass into our component property on our Route.
           # The :topicId is a url parameter or a route parameter

           EXPLANATION: When we write /:topicId in our path, we're saying
           that this route is waiting to match anything up to slash

           NOTE on: The (history) arguments -> 
             --------------------
           The are two ways to navigate in React-Router-Dom between our 
           pages, We've been dynamically updating the URL and getting to 
           different pages.
           1. The use of <Link to="">String</Link> component. The Link component is 
              a special component that React-Router-Dom gave us that lets 
              us dynemically pass in the property of to="" and the string
              of where we want the string to take us to.
            
            2. The other way of doing this navigation is using the history 
               props, so instead of a link we would want to use button. In the
               onClick of our button we would pass it a function that get called
               whenever it get clicked. This is equivalent to Link but it gives 
               us more dynamic access.

            3. The third props we have is the location, the location props 
               actually tells us where we are currently, the main this we will
               focus on is the (pathname)
         */

        /* LEC on: withRouter
           withRouter is a higher order component, and a higher order component
           is essentially a function that takes a component as an argument and
           returns a modified component.
         */
    );
}

export default OurRoute;
