const pool = require('../db/db')
const mysql = require('mysql')

let contactForm = {}

contactForm.insert = (body) => {
    return new Promise((resolve, reject) => {
        let insertQuery = 'INSERT INTO ?? (??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?)';
        let query = mysql.format(insertQuery, ["enquiry", "e_name", "e_email", "e_contact", "e_city", "e_type", "e_enquiry", "e_date", "e_status", body.name, body.email, body.contact, body.city, body.type, body.enquiry, body.date, body.status]);
        pool.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results)
        })
    })
}


module.exports = contactForm