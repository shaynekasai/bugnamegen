'use strict';

// Initializers
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./bugnamegen.db', sqlite3.OPEN_READONLY);

// Public API
module.exports = {
    // CODE,FAMILY,GENUS,SPECIES,AUTHORITY
    generateRandomInsectName: function(callback) {
        db.get('SELECT (SELECT genus FROM bugnames ORDER BY RANDOM() LIMIT 1) AS genus, (SELECT species FROM bugnames ORDER BY RANDOM() LIMIT 1) AS species', callback);
    }
};
