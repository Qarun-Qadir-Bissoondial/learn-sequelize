# Learn Sequelize 

This repo contains my run-through of the Sequelize tutorial [here](https://www.youtube.com/watch?v=pxo7L5nd1gA). 
The tutorial uses Node.js, Express and MySQL database. I used a MySQL Server running inside of a docker container.

## Steps to reproduce repo
 - `npm install`
 - `./launch-db-server.sh`
 - If it's the first time launching, then the password for the MySQL server needs to be reset
   - Get the randomly password by running `docker logs mysql1 2>&1 | grep GENERATED`
   - Copy the password and then run `./db-login.sh`
   - Paste the password into the command line and press `Enter`.
   - The mysql shell should be open now and this is where you have to alter the password. THIS IS CRUCIAL.
    - `ALTER USER 'root'@'localhost' IDENTIFIED BY 'your-password-here';` (DO NOT FORGET THAT SEMICOLON AT THE END)
  - 

## Sequelize Notes

 1. Install sequelize and sequelize-cli
 2.  