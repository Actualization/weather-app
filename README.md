# weather-app
- App is composed of two servers, web facing non ejected create-react-app prefab and a internal express API that communicate via create-react-app proxy config to hide API keys.  Nodemon used for hot express server reload for dev in addition to standard stack viewable in each server's package.json file.

## Quick Start App
- in folder ```express-server``` copy file ```.env_example``` and rename to ```.env``` then put your OpenWeatherMap.org app ID key in ```.env```
  
- ```npm install``` (or ```yarn install```) packages for both express server (folder) and create-react-app (folder)

- ```yarn dev``` can be used from the express-server directory to easily bring up express and react app server in development