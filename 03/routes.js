const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    /* every time node gets a new chunk of data, 
      it pushes it to the "body" array */
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    /* when I finally have all the chunks of data (the request is over),
      I can work with them inside req.on("end") */
    req.on("end", () => {
      // I add my body data to a buffer, and then convert it to string (as I know the content of the request is text)
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
        if (error) {
          console.error("There was an issue creating message.txt, ", error);
        }
      });
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello my friends from node.js server!</h1></body>");
  res.write("</html>");
  res.end();
}

module.exports = requestHandler;
