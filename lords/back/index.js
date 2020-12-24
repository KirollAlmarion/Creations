const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 4000
const app = express();

const corsOptionsEnLigne = {
	origin: "https://test-lords.loca.lt",
	methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
	optionsSuccessStatus: 200,
	credentials: true,
	allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
	preflightContinue: true
};

const corsOptionsEnLocal = {
	origin: "http://localhost:3000",
	methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
	optionsSuccessStatus: 200,
	credentials: true,
	allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
	preflightContinue: true
};

app.use(cors(corsOptionsEnLocal));
app.options("*", cors(corsOptionsEnLocal));


app.use(bodyParser.json());

//import de la database:
require("./database")(app);

//import des modèles:
require("./modeles")(app);

//import des contrôleurs:
require("./controles")(app);

//import des routes:
require("./routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//initialisation de la BdD cartes
//  const Carte = app.modeles.Carte;
//  for (let leClan=1;leClan<9;leClan++){
//      for (let i=0;i<12;i++){
//          let newCarte = new Carte(
//              {
//                  clan: leClan,
//                  force: i+1,
//                  rang: leClan + 8*i
//              }
//          );
//          newCarte.save();
//      }
//  }