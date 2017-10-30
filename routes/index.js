const express = require('express')
const router = express.Router()

const AS2 = 'https://www.w3.org/ns/activitystreams'

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

/* GET tag */
router.get('/tag/:tag', (req, res, next) => {
  const {tag} = req.params
  res.json({
    '@context': AS2,
    type: 'Hashtag',
    id: req.app.makeURL(`/tag/${tag}`),
    name: `#${tag}`
  })
})

module.exports = router
