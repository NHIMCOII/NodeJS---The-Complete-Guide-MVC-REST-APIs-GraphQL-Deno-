# INITIALIZE A NEW PROJECT
 ``` npm install ```
 ``` npm init ```
 - "start": "node app.js" script in .json file
 ``` npm install nodemon --save-dev ```
 - ( npm install for latest version )
 ## ======== Auto-restart ===========
 - change script in .json "start": "node"->"nodemon"
 ## ======== Install Express ========
```
    npm install --save express 
    npm install --save body-parser
    npm install --save ejs || pug express-handlebars // templatting engine install
```
 ## ======== Install Mysql ========
 ``` npm install --save mysql2```
 ## ======== Install Sequelize ========
``` npm install --save sequelize```

``` 
    git checkout -b [new_branch]
    git push origin [new_branch]
    git branch --set-upstream-to=origin/<local_branch> 
    git merge master
```


# ---------------------------------------------------------

## ====================== REST API ==========================

```
    npm install --save express
    npm install --save-dev nodemon
```
 - Add "start" :"nodemon app.js"

 ```
    npm install --save body-parser
    npm install --save express-validator
    npm install --save mongoose
    npm install --save multer
    npm install --save uuid <for Windows>
    npm install --save bcryptjs
    npm install --save jsonwebtoken
    npm install --save nodemailer
    npm install --save socket.io
 ```