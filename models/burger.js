var orm = require('../config/orm.js');


var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },

    create: function(cols, vals, callBack) {
        orm.create("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },

    update: function(objColVals, condition, callBack) {
        orm.update("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    }
};



module.exports = burger;