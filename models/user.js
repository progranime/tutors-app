const db = require('../db')
const randtoken = require('rand-token')

const self = {
    get: data => {
        let GET = `SELECT * FROM user WHERE email = ?`
        let formData = {
            email: data.email
        }

        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(GET, [formData.email], (err, results) => {
                    if (err) console.log(err)
                    resolve(results)
                    connection.release()
                })
            })
        })
    },
    store: async data => {
        let INSERT = `INSERT INTO user SET ?`
        let formData = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            cellphone: data.cellphone,
            birth_date: data.birthDate || '',
            user_type_id: data.userTypeId,
            university_id: data.universityId,
            token: randtoken.generate(32),
            is_activate: data.isActivate || 0
        }

        // check if the email is existing
        const emailExists = await self.emailExists(formData.email)

        if (emailExists)
            return {
                error: 'Email Already exists!'
            }

        // proceed if the email not yet existing
        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(INSERT, [formData], (err, results) => {
                    if (err) console.log(err)
                    resolve(results)
                    connection.release()
                })
            })
        })
    },
    update: () => {},
    destroy: () => {},
    emailExists: data => {
        let SELECT = `SELECT * FROM user WHERE email = ?`

        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(SELECT, [data], (err, results) => {
                    if (err) console.log(err)
                    resolve(results[0])
                    connection.release()
                })
            })
        })
    },
    verifyUser: data => {
        let GET = `SELECT * FROM user WHERE (email = ? AND password = ?) AND (is_activate = ?)`
        let formData = {
            email: data.email,
            password: data.password,
            is_activate: 1
        }

        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(
                    GET,
                    [formData.email, formData.password, formData.is_activate],
                    (err, results) => {
                        if (err) console.log(err)
                        resolve(results)
                        connection.release()
                    }
                )
            })
        })
    },
    activateEmail: data => {
        let UPDATE = `UPDATE user SET ? WHERE id = ? AND token = ?`
        let formData = {
            is_activate: 1
        }

        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(
                    UPDATE,
                    [formData, data.id, data.token],
                    (err, result) => {
                        if (err) console.log(err)
                        resolve(result)
                        connection.release()
                    }
                )
            })
        })
    }
}

module.exports = self
