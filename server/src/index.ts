import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "../.env" });

const PORT = Number(process.env.PORT ?? 8081);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/health", (req, res)=> {
    res.json({status:"ok"});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});