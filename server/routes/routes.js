import express from 'express'
import serverSideRender from '../controllers/serverSideRender'

const router = express.Router()

router.get('/', serverSideRender)
router.get('/continenthikes', serverSideRender)

module.exports = router
