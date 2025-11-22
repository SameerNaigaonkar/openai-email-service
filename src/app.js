// const express = require("express")
// const aiRoutes = require('../src/routes/ai.routes');



// const app= express();
// app.use(express.json())

// app.use("/api/ai",aiRoutes);



// module.exports = app;



const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express();
app.use(express.json());

app.use("/api/ai", aiRoutes);

module.exports = app;
