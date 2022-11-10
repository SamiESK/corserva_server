This repository houses the backend services for Corserva's PERN challenge application.

To run this application, you must have the following software installed in your machine. 
  - `docker`
  - `npm`
  - `node`

To configure this directory to your machine, cd into the root directory of the folder & run the following commands. 

1. `docker compose build`
2. `docker compose up` (you can run `docker compose up -d` to detach images logs from the terminal)

The server will be initialized to `http://localhost:3001` & should now be able to view the newly created containers via the Docker desktop application.

NOTE: You can use SQL client software applications like DBeaver and view the newly created tables. You can do so by using the credentials given in the `docker-compose.yml` file after building the container and composing the build. 

To shutdown containers, run `docker compose down`

To do some unit testing for the server folder, access the roor directory of `corserva_server` and enter `npm t` in the terminal. 

To check Prettier / ESLint status, enter `npm run lint` to sort through and check if any error exist. To fix any found error, enter `npm run lint:fix` to fix through found errors.
