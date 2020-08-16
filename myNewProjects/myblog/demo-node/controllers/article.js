const { mysql } = require('../mysql')

  
async function getArticle(ctx) {
  const cardData = await mysql('article_list').select()

  var dataString = JSON.stringify(cardData);
  var data = JSON.parse(dataString);

  ctx.body = {
    'data': data
  }
  console.log(data)
}

async function getNewestArticle(ctx) {

}

async function getArticleById(ctx) {
  // const id = ctx.query.id
  const { id: id } = ctx.query
  const articleData = await mysql('article_list').where({
    'article_id': id
  }).select()

  var dataString = JSON.stringify(articleData);
  var data = JSON.parse(dataString);

  ctx.body = {
    'data': data
  }
  console.log(data)
}

async function getMyMess(ctx) {

}

async function getArticleByType(ctx) {

}

module.exports = {
  getArticle,
  getNewestArticle,
  getArticleById,
  getMyMess,
  getArticleByType
}