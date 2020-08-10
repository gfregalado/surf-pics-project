'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  spot: {
    type: String,
    required: true,
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
    enum: ['morning', 'afternoon', 'full-day'],
  },
  watersports: {
    type: Array,
    required: true,
  },
  imagesUrls: {
    type: Array,
    required: true,
  },

  //   timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.exports = mongoose.model('session', schema);
