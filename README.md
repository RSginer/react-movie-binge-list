[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## My Binge List

<img style="width: 700px" src="https://github.com/RSginer/react-movie-binge-list/blob/master/public/screenhot-desktop.png?raw=true">

### `yarn run deploy`

Creates a docker image with the app bundles inside a NGINX server runing and starts GraphQL server.

- **Webapp**: http://localhost:8080
- **GraphQL**: http://localhost:4000/graphql

I recommend to use this extensions for a better review:
  - **Redux DevTools**: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  - **Apollo Client Developer Tools**: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm


In the project directory, you can run also the following commands:

### `yarn start` (dev mode)

Runs the app in the development mode. (Probablly you will need to run the [movie-service](https://cloud.docker.com/u/rsginer/repository/docker/rsginer/codingventures-movie-service))<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

- Test suites:
  * [Jest](https://jestjs.io/)
  * [Enzyme](https://airbnb.io/enzyme/)

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Other dependencies used
- [Connected Router](https://github.com/supasate/connected-react-router)
- [Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [FontAwesome](https://github.com/FortAwesome/react-fontawesome)