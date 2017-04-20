'use strict'

const express = require('express');
const router = express.Router();
const ComprasModel = require('../models/ComprasModel')

router.post('/create', (req, res) => {
  const body = req.body
  ComprasModel.create(body, (err, data) => {
    if (err) return res.json(err)
      return res.json(data)
  })
})

module.exports = router;
