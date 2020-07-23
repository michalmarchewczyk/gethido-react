# GeThiDo-React

![GitHub package.json version](https://img.shields.io/github/package-json/v/michalmarchewczyk/gethido-react)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/michalmarchewczyk/gethido-react)
![GitHub last commit](https://img.shields.io/github/last-commit/michalmarchewczyk/gethido-react)

GeThiDo-React is time management web app using [GeThiDo-API](github.com/michalmarchewczyk/gethido-api).

## Technologies
Project is created with:
- React
- Redux
- Material-UI

## Build and serve
1. Install dependencies
    ```
    npm install
    ```

1. Change GeThiDo-API url in [task.service.js](src/services/task.service.js) and [user.service.js](src/services/user.service.js)
    ```javascript
   const API_URL = 'https://[URL]';
    ```

1. Run build script
    ```
    npm build
    ```

1. Serve the application
    ```
    npm serve
    ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
