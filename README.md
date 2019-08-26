# Branch Visualiser
Spike into visualising version control branches

## Pre-requisites
node 8+

## Installation
```
git clone https://github.com/numical/branch-visualiser.git
cd branch-visualiser
npm install
```

## Development
With hot module replacement:
```
npm run:dev
```
Then point browser at http://localhost:8080 (if it does not open automatically).
  
Note this starts ***two*** servers:
* webpack-dev-server (port 8080)
* data server (port 1971) 

## Build
```
npm run build
```

## Deploy
Copy contents of ```public``` to your server's webroot.
