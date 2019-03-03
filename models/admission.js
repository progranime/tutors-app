const db = require('../db')

const self = {
    get: () => {},
    getAll: () => {
        let GET = `SELECT * FROM admission`

        return new Promise(resolve => {
            db.getConnection((err, connection) => {
                if (err) console.log(err)

                connection.query(GET, (err, results) => {
                    if (err) console.log(err)
                    resolve(results)
                    connection.release()
                })
            })
        })
    },
    store: () => {},
    update: () => {},
    destroy: () => {}
}

module.exports = self
