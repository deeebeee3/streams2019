import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>Page One</div>;
};

const PageTwo = () => {
  return <div>Page Two</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;

/* when it comes to deployment on a traditional server will need to configure it to 
work with BrowserRouter (our create-react-app dev server always serves up index.html)  
as its a single page app, other wise will get issues with app not behaving / navigating 
properly */