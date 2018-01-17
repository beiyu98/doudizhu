let db = require('../unitily/db');
const Logger = require('../untils/logger');
let logger = new Logger("playerModel: ").info;

exports.checkPlayer = (uniqueID, callback) => {
    let sql = `SELECT * FROM player_info WHERE unique_id=${uniqueID};`;
    db.query(sql, (err, data) => {
        if (err) {
            logger(`checkPlayer err: ${err}`)
        }
        callback(err, data);
    });
}

exports.insertPlayerInfo = (data, callback) => {
    let sql = `INSERT INTO player_info 
                (unique_id,uid,nick_name,avatar_url,house_card_count)
                VALUES (
                    ${data.uniqueID},
                    ${data.uid},
                   "${data.nickname}",
                   "${data.avatar_url}",
                    ${data.house_card_count}
                );`;
    db.query(sql, (err, data) => {
        if (err) {
            logger(`insertPlayerInfo err: ${err}`)
        }
        callback(err, data);
    });
}