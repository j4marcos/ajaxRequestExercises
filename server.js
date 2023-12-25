const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send("ok"))

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post("/upload", (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end(`ocorreu um erro: {${err}}`)
        }

        res.end("concluido com sucesso")
    })
})

app.post('/formulario', (req, res) => {

    res.send({
        ...req.body,
        id: 1
    })
})


app.get("/parOuImpar", (req, res) => {
    // formas de receber dados
    // req.body
    // /parOuImpar/:numero (server) 
    // req.query    // /parOuImpar?numero=3 (client)
    // req.params   // /parOuImpar/3 (client)
    if (req.query.numero) {
        const par = parseInt(req.query.numero) % 2 === 0
        res.send({
            resultado: par ? 'par' : 'impar'
        })
    }
})

app.listen(7000, () => console.log("executando..."))