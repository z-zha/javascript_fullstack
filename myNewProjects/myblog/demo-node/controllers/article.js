const { mysql } = require('../mysql')

async function getArticle(ctx) {
  const all = await mysql('article_list').select()
  ctx.body = {
    data: all
  }

  console.log(all)
}

async function getNewestArticle(ctx) {

}

async function getArticleById(ctx) {

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