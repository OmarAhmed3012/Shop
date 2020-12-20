import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// Create New Order
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddres,
    paymetMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      shippingAddres,
      user: req.user._id,
      paymetMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

export { addOrderItems }
