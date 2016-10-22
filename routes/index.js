/**
 * Created by chenyihui on 2016/10/19.
 */
exports.user = require('./user.js');
exports.article = require('./article.js');

exports.index = function (req, res, next) {
    req.collections.articles.find({published:true},{sort:{id:-1}}).toArray(function (error, articles) {
        if(error) return next(error);
        res.render('index',{articles:articles});
    })
}