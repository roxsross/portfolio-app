## Portfolio website using React app packaged using Docker and deployable to AWS Amazon Provider

### By RoxsRoss

<h1>Getting Started</h1><br />

Navigate into the directory:<br />
`cd portfolio-app`

Install node modules:<br />
`npm install`

Run the app locally:<br />
`npm start`

Build the docker image:<br />
`docker build -t portfolio-app:latest .`

Run the docker image:<br />
`docker run -p 8080:443 portfolio-app:latest`

Navigate to the url in your browser:<br />
`http://localhost:8080`
