## Frontend setup
 - To run it locally, you need first to create `.env` file right in the root `/` folder. The file should contain:

 ```
 
REACT_APP_HOSTURI_POST = <POST endpoint URL of the server>

REACT_APP_HOSTURI_GET = <GET endpoint URL of the server>

REACT_APP_CLIENT_HOSTNAME = <localhost:port>

```

For example:

`REACT_APP_HOSTURI_POST = 'http://localhost:8080/api/shorten' 
`

- install dependencies and run the frontend app 
```
npm i
npm run start
```

