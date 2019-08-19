const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', async(req, res, next) => {
    try {
        if (User.isAdmin === true) {
            const users = await User.findAll()
            res.json(users)
        }
        else {
            next
        }
    } catch(err) {
        next(err)
    }
})