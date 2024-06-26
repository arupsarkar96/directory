const { getConnection } = require("../config/db")


const getHome = async (user) => {
    const sql = 'SELECT * FROM `Menus` ORDER BY `sequence` ASC; SELECT * FROM `Banners` ORDER BY `sequence` ASC; SELECT * FROM `Messages` ORDER BY `sequence` ASC; SELECT Users.uid, Users.name, Users.image, Users.mobile, Users.email, Users.designation, Users.role, Clubs.club_name AS club FROM `Users` LEFT JOIN Clubs ON Users.club_id = Clubs.cid WHERE Users.mobile = ?'
    const connection = await getConnection()
    const [result, fields] = await connection.query(sql, [user])
    connection.release()
    return result
}

module.exports = { getHome }
