const db = require('../db')

const self = {
    get: () => {},
    store: async data => {
        let INSERT = `INSERT INTO user SET ?`
        let formData = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            cellphone: data.cellphone,
            birth_date: data.birthDate || '',
            user_type_id: data.userTypeId
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
        let GET = `SELECT * FROM user WHERE email = ? AND password = ?`
        let formData = {
            email: data.email,
            password: data.password
        }

        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(
                    GET,
                    [formData.email, formData.password],
                    (err, results) => {
                        if (err) console.log(err)
                        resolve(results)
                        connection.release()
                    }
                )
            })
        })
    }
}

module.exports = self
