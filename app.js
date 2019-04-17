var express = require('express')
const bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.json())

/*app.get('/', (req, res) => {
    console.log('hello from console')
    res.send({ message: 'Hello World' })
})
*/

function verifMail(mail) {
    var p = mail.split('@')
    var r1 = /\w+([\.-]?\w+)*/;
    var r2 = /\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((r1.test(p[0])) && (r2.test(p[1]))) {
        return "Email correct"
    }
    else return "Email incorrect"
}

function verifPwd(pwd) {

    var r1 = /[a-z]/
    var r2 = /[A-Z]/
    var r3 = /[0-9]/
    var sc = 0;
    if (r1.test(pwd)) {
        sc = sc + 1;
    }
    if (r2.test(pwd)) {
        sc = sc + 1;
    }
    if (r3.test(pwd)) {
        sc = sc + 1;
    }
    if (pwd.length < 8) {
        return "password is invalid"
    }
    else if (sc == 1) {
        return "password is weak"
    }
    else if (sc == 2) {
        return "password is medium"
    }

    else if (sc == 3) {
        return "password is strong"
    }

}
app.post('/', (req, res) => {
    console.log(req.body.email)
    console.log(req.body.pwd)
    res.send(

        {
            email: req.body.email,
            pwd: req.body.pwd,
            verifmail: verifMail(req.body.email),
            verifpwd: verifPwd(req.body.pwd)
        }
    )

})

app.listen(3000)