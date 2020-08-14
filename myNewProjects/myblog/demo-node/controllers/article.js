const { mysql } = require('../mysql')

async function getArticle(ctx) {
  const cardData = await mysql('article_list').select()
  var dataString = JSON.stringify(cardData);
  var card = JSON.parse(dataString);
  ctx.body = {
    'card': card
  }
  console.log(card)
}

async function getNewestArticle(ctx) {

}

async function getArticleById(ctx) {
  const id = ctx.query.id
  const articleData = await mysql('article_list').where({
    'article_id': id
  }).select()
  var dataString = JSON.stringify(articleData);
  var article = JSON.parse(dataString);
  ctx.body = {
    'article': article
  }
  console.log(article)
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