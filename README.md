
# PBL Frontend

Frontend of PBL's members portal
![PBL Logo](./images/logo.png)

## Dependencies

see ./lib
- angular
  - the big momma
  - angular.min.js, angular-route.js
- styles
  - bootstrap
  - bootstrap material design
- authentication
  - google auth script
  - see protocol.js 
- other
  - jquery
  - md5 (for gravatar md5 hash)
  - parse-1.6.7.js for using parse apis directly (this is mostly unused)

## Getting started developing

### 1) Set up the PBL API Server 

- get http://pbl.link/flask-portal
  - clone the repo: `git clone https://github.com/davidbliu/flask-portal.git`
  - install the dependencies
  - `python run.py`
    - do this from the root of the flask-portal directory

### 2) Run this project
- clone this repo
  - `git clone https://github.com/echang9/pbl-front-end.git`
- start the frontend server
  - `sh run.sh` from the root of this directory
- visit localhost:8000

# Using the PBL API

## Tokens
- must submit token on all api requests
- see tokenizedURL method
- convention: api requests all in ./services

# TODO

Working on fancifying everything. Switching over to this Fall 2015. 



