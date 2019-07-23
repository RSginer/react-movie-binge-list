## Available Scripts

In the project directory, you can run:

### `npm run deploy` (prodmode)

- Webapp: `http://localhost:8080` 
- GraphQL: `http://localhost:4000/graphql`

Creates a docker image with the app bundles inside a NGINX server runing and starts GraphQL server (I pushed to [my dockerhub](https://cloud.docker.com/u/rsginer/repository/docker/rsginer/codingventures-movie-service) the version 0.2.0 of [movie-service](https://github.com/keremk/movie-service) because in the version 0.3.0 mutations are not working)

### `npm start` (devmode)

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
