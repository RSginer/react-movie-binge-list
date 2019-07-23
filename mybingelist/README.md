## @RSginer - My Binge List

- *Note*: I hope you like it and thanks for the opportunity 😄.

### `yarn run deploy` (prod mode) - Use this one to review the project

- **Webapp**: http://localhost:8080
- **GraphQL**: http://localhost:4000/graphql

I recommend to use this extensions for a better review:
  - **Redux DevTools**: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  - **Apollo Client Developer Tools**: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm

Creates a docker image with the app bundles inside a NGINX server runing and starts GraphQL server (I pushed to [my dockerhub](https://cloud.docker.com/u/rsginer/repository/docker/rsginer/codingventures-movie-service) the version 0.2.0 of [movie-service](https://github.com/keremk/movie-service) because in the version 0.3.0 mutations are not working)

In the project directory, you can run also the following commands:

### `yarn start` (dev mode)

Runs the app in the development mode. (Probablly you will need to run the [movie-service](https://cloud.docker.com/u/rsginer/repository/docker/rsginer/codingventures-movie-service))<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
