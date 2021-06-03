const express = require('express');
const app = express();
const PORT = process.env.PORT | 4000;

app.use(express.json());
app.use(express.urlencoded())



app.use("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

