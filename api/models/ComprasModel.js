'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {

  comprador: String,
  produto: String,
  valor_total: String,
  data_log: {
    type: Date,
    default: Date.now
  }

}

const CompraSchema = new Schema(_schema, {versionKey: false})
const CompraModel = mongoose.model('compra', CompraSchema)

module.exports = CompraModel