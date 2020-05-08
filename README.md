# Coffe Shop
 E-comm website using MERN stack


By default all users are Non-admin.
Admin user can be set in database.

Admin user:
    Email : admin@gmail.com
    Password : Admin@123

Normal user:
    Email : user@gmail.com 
    Password : Password@123

    Email : user2@gmail.com 
    Password : Password@123


React Commands:
    npm install -g create-react-app
    npx crete-react-app frontend
    npm install axios --save
    cd frontend
    Add 
    "proxy": "http://localhost:3001",
    to package.json of frontend/

    npm install redux
    npm install react-redux
    npm install react-router-dom
    npm run build 


Express Commands:
    npm install -g express-generator
    express backend
    cd backend
    npm install -D nodemon
    npm install mongoose --save
    npm install bcryptjs --save
    npm install jsonwebtoken
    npm install config
    npm install 
    nodemon backend.js
    //Since both React and express run on Port 3000, let us change express to run on Port 5000 instead
    // app.listen(process.env.PORT || 5000)

    //If cors Error
    npm install --save cors
    
    //Every backend package need to be in outer package.json for execution and not in backend/package.json

Concurrent Execution of React and node:
    npm install -D concurrently
    //Make changes to start both React and node from the same place
    npm run dev





Deploy to Heroku
    npm run production

.gitignore
    Add all the node_modules to this file to ignore pushing them to Github






MongoDB commands:

	md \data\db
	cd “C:\Program Files\MongoDB\Server\3.0\bin” (or wherever you installed MongoDB)
	mongod









Error resolve:
    1. nodemon : File C:\Users\Kapil Gautam\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is 
    disabled on this system. For more information, see about_Execution_Policies at 
    https:/go.microsoft.com/fwlink/?LinkID=135170.

    In this case for Windows, Run as Administrator and type:
    > Set-ExecutionPolicy -ExecutionPolicy Unrestricted
    and then select Y
    After that nodemon can run on the machine	


References :
https://daveceddia.com/create-react-app-express-backend/
https://dev.to/numtostr/running-react-and-node-js-in-one-shot-with-concurrently-2oac
https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
https://www.freecodecamp.org/news/deploy-a-react-node-app-to/
