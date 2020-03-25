const pool = require('../db/db')
const mysql = require('mysql')


let testimonial = {}

testimonial.all = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM all_testimonial', (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results)
        })
    })
}

testimonial.insert = (body) => {
    return new Promise((resolve, reject) => {
        let insertQuery = 'INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)';
        let query = mysql.format(insertQuery, ["all_testimonial", "name", "email", "testimonial_content", "show_on_home", "status", "d_status", "post_date", body.name, body.email, body.testimonial_content, 0, 0, 1, body.post_date]);
        pool.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results)
        })
    })
}

module.exports = testimonial