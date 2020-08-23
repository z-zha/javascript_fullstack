const { mysql } = require('../mysql')


async function getArticle(ctx) {
  const cardData = await mysql('article_list').orderBy('article_id', 'desc').select()

  var dataString = JSON.stringify(cardData);
  var data = JSON.parse(dataString);

  ctx.body = {
    'data': data
  }
  // console.log(data)
}

async function getNewestArticle(ctx) {
  // const newestArticles = await mysql('article_list').orderBy([
  //   { column: 'add_time', order: 'desc' }
  // ]).limit(5).select()
  const newestArticles = await mysql('article_list').orderBy('article_id', 'desc').limit(5).select()

  var dataString = JSON.stringify(newestArticles);
  var data = JSON.parse(dataString);

  ctx.body = {
    'data': data
  }

  console.log(data)
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
  // console.log(data)
}

async function getMyMess(ctx) {

}

async function getArticleByType(ctx) {
  const { type: type } = ctx.query

  const typeData = await mysql("article_list").where({
    'category': type
  }).select()

  var dataString = JSON.stringify(typeData);
  var data = JSON.parse(dataString);

  ctx.body = {
    'data': data
  }

}

module.exports = {
  getArticle,
  getNewestArticle,
  getArticleById,
  getMyMess,
  getArticleByType
}