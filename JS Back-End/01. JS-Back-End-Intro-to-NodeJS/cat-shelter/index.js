const http = require('http');
const { homeTemplate, catTemplate } = require('./views/home/index');
const siteCss = require('./content/styles/site');
const addBreedHtml = require('./views/addBreed');
const addCatHtml= require('./views/addCat');
const port= 5555
const cats = [
    {
        id: 1,
        name: 'Navcho',
        breed: 'Persian',
        description: 'Very cute cat',
    },
    {
        id: 2,
        name: 'Mishi',
        breed: 'Angora',
        description: 'Fluffy cat',
    },
    {
        id: 3,
        name: 'Garry',
        breed: 'Angora',
        description: 'Fat cat',
    },
];

const server = http.createServer(async (req, res) => {
    console.log(req.url);

    if (req.url == '/') {

        
        const catsHtml = cats.map(cat => catTemplate.replace('{{catName}}', cat.name));
        const homeHtml = homeTemplate.replace('{{cats}}', catsHtml);

        // res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homeHtml);
    } else if (req.url == '/styles/site.css') {
        // res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(siteCss);
    }else if(req.url== 'https://use.fontawesome.com/releases/v5.0.7/css/all.css'){
        // res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(siteCss);
    } else if (req.url == '/cats/add-breed') {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addBreedHtml);
    }else if(req.url== '/cats/add-cat'){
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addCatHtml);
    }

    res.end();
});

server.listen(port, () => console.log(`This server is running on port ${port}...`));
