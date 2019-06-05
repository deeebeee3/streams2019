# streams2019
Twitch TV like clone mess around...

#REDUX DEV TOOLS
https://github.com/zalmoxisus/redux-devtools-extension

INSTALLATION:

1. For Chrome
from Chrome Web Store;
download extension.zip from last releases, unzip, open chrome://extensions url and turn on developer mode from top left and then click; on Load Unpacked and select the extracted folder for use
or build it with npm i && npm run build:extension and load the extension's folder ./build/extension;
or run it in dev mode with npm i && npm start and load the extension's folder ./dev.


1.2 Advanced store setup
If you setup your store with middleware and enhancers, change:

  import { createStore, applyMiddleware, compose } from 'redux';

+ const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
+ const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
- const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(...middleware)
  ));

Saves all data in Redux Store between refreshes of the page 
(can have multiple debug sessions - great for debugging and error checking):

http://localhost:3000/?debug_session=befbwufbwu





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



# RTMP Server

github.com/illuspas/Node-Media-Server

also...

Instead of:
* const { NodeMediaServer } = require('node-media-server');

we need to change the import to this:

* const NodeMediaServer = require('node-media-server');

#Install OBS

Installed OBS
OBS 
- create a scene
- add sources - display screen / audio built in mic
- click settings - then the stream tab and set the following options:
  Service: Custom...
  Server: rtmp://localhost/live
  Stream Key: The id of whatever stream you have clicked in the Stream app (eg. 1)


#FLV.js

https://www.npmjs.com/package/flv.js