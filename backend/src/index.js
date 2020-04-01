const port = 3006
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(port, () => {
    console.log(`A aplicação está rodando na porta ${port}`)
})
