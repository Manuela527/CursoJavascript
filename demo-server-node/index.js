const http = require("http");

const HOST = "localhost";
const PORT = 8000;

const writeHTMLResponse = (res, htmlcode) => {
    res.setHeader("Content-Type", "text/html"); //Responder un html tipo de contenido
    res.writeHead(200); // Codigo status de respuesta
    res.end("<p> Esto es HTML </P>")
}

const server = http.createServer((req,res) => {
    const url = req.url;
    console.log("URL es",url);

    if(url === "/other"){
        writeHTMLResponse(res,"<p> Esta es otra ruta </p>");
    }else{
        writeHTMLResponse(res,"<p> codigo HTML </p>");
    }
});

server.listen(PORT,HOST,() => {
 console.log(`servidor corriendo en +
    http://${HOST}:${PORT}`);
});