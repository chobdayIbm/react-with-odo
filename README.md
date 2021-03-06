This code snippet is an example of installing a React application to OpenShift 4 using OpenShift Do developer CLI (odo).  The react application was purely created using `npx create-react-app hello-react`

## Prerequisite
You need to be logged in to odo already.  
If not, get your login server and token from the Openshift console, and set it in the environment variables below.
```
TOKEN=rubbish 
SERVER="https://c100-e.au-syd.containers.cloud.ibm.com:31142"
odo login $SERVER --token=$TOKEN
```

## Quick Installation
Note : This is the quickest way and will run a development server

In the project directory, run:
```
odo project set myproject 
odo create nodejs hello-react --port 3000/tcp
odo url create --port 3000
odo push 
```
The first push takes quite long, about 2min for the app to deploy using s2i and start

## Production 
See the branch *prod*
In the project directory, run:
```
odo project set prod
odo create nodejs hello-react --port 3000/tcp
odo config set --env NODE_ENV=production
odo url create --port 3000
odo push 
```

## Uninstall 
```
odo app delete app -f
rm -rf .odo
```


## Further Work
* Hot debugging
* CORS only for server
* App with express back-end too
* Client-side routing based on https://create-react-app.dev/docs/deployment/ (Serving Apps with Client-Side Routing)

Comments are welcome!