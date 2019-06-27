const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
const { ensureAuthenticated } = require('../config/auth')



//Database 
const projectData =  db.project.findAll()
const industryData =  db.industry.findAll()
const skillsData = db.projectSkills.findAll()


//Routing get request
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    Promise
    .all([projectData, industryData, skillsData])
        .then(records => {
            res.render('dashboard', {
                project: records[0],
                industry: records[1],
                skills: records[2]
            })
        })

        .catch((error) => {
        res.send(error)
        })
    })

module.exports = router;