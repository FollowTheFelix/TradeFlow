const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./item');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: {type: Schema.Types.ObjectId, ref: "Item",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  });

  lineItemSchema.virtual('extPrice').get(function() {
    return this.qty * this.item.wholesalePrice;
  });


  const orderSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false } 
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });


orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
  });
  
  orderSchema.virtual('orderQty').get(function() {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
  });
  
  orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
  });
  
  orderSchema.statics.getCart = async function(userId) {
    try{
    const cart = await this.findOneAndUpdate(
      { user: userId, isPaid: false },
      { user: userId },
      { upsert: true, new: true }
    );
    console.log('Cart already exists:', cart);
    return cart
    
  } catch (error) {
    console.error('Error occurred while getting cart:', error);
  }
};
  
  orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem) {
      lineItem.qty += 1;
    } else {
      const Item = mongoose.model('Item');
      const item = await Item.findById(itemId);
      console.log('itemsAdded', item)
      cart.lineItems.push({ item });
    }
    await cart.save();
    return cart
  };
  
  orderSchema.methods.setItemQty = function(itemId, newQty) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem && newQty < Item.minOrderQty) {
      lineItem.deleteOne();
    } else if (lineItem) {
      lineItem.qty = newQty;
    }
    return cart.save();
  };
  
  module.exports = mongoose.model('Order', orderSchema);
  