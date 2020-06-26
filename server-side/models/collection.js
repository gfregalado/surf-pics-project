'use strict';

const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  location: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  period: {
    type: String,
    required: true,
    trim: true,
    enum: ['morning', 'afternoon'],
  },
  sports: {
    type: String,
    required: true,
    trim: true,
    enum: ['surf', 'bodyboard', 'wakeboard', 'kite surf'],
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    enum: ['surf', 'bodyboard', 'wakeboard', 'kite surf'],
  },
  timestamps: {
    createdAt: 'dateCreated',
    updatedAt: 'dateUpdated',
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
