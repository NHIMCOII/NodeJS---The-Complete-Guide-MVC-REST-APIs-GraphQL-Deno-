const fs=require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    
    if (url === '/'){
        res.write('<html>');
        res.write('<head> <title> My first project </title> <head>');
        res.write('<body>');
        res.write('<h1>Hello from my NodeJS server.</h1>');
        res.write('<h1>This is Duy Anh your friendly neighbor.</h1>');
        res.write('<form action = "/create-user" method="POST"> <input type = "text" name="username"> <button type="submit">SEND</button> </input> </form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
            
        return req.on('end',() => { 
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('users.txt',message, (err) => {
                res.statusCode = 302;               //Rediretion code http
                res.setHeader('Location', '/');
                return res.end();               
            });
        });
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users list</title></head>')
        res.write('<body>');
        res.write('<h1>Here is an users list:</h1>');
        res.write('<ul>');
        res.write('<li>John Mayer</li>');
        res.write('<li>Justin Bieber</li>');
        res.write('<li>Bruno Mars</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    res.write("<head><title>Page not found</title></head>");
    res.write('<body><h1>ERROR 404</h1></body>');
    res.end();
    
}

module.exports = {
    handler: requestHandler
};