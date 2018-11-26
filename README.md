Pre-requisites:

    * MySql Database
        - During installation, ensure server-side authentication protocol is set to 'mynativesql', and not the default 'Secure SHA authentication'. Doing this will avoid connection errors while running the API.

    *  Ensure a Database is present in the MySql connection.
        - Database and subsequent tables are created by default everytime the api is run. (method call occurs inside app.js)
        - Set the required database connection variables present inside 'config.js' available in the root folder.


Running the api:

    * TERMINAL: npm start
    * API is present in the route http://localhost:3000/api/create

Running the client:

    * Open browser. Navigate to http://localhost:3000
