// import React, { useState, useEffect } from 'react';

const {
  models: { Order, Parcel, Location },
} = require("../models/");
const { where } = require("sequelize");
const orderController = {
  // [GET] get All
  getAllOrders: async (req, res) => {
    try {
      const order = await Order.findAll();
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json(error);
    }
  },


  // [GET] get by location_ID
  getOrderByLocation  : async (req, res) => {

    // const [urlData, setUrlData] = useState(null);
    // useEffect(() => {
    //     // Lấy đối tượng URL từ window.location
    //     const url = new URL(window.location.href);

    //     // Lấy giá trị từ query parameter có tên là "data"
    //     const dataFromUrl = url.searchParams.get('id');

    //     // Đặt giá trị vào state
    //     setUrlData(dataFromUrl);
    //   }, []); 

    // console.log(urlData);

    try {
      const location_id = req.query.id;
      const order1 = await Order.findAll({
        where: { receiving_location: location_id },
      });
      const order2 = await Order.findAll({
        where: { sending_location: location_id },
      });

      if (!order1) {
        res.status(400).json({
          msg: "Order_ID didn't exist!!!",
        });
      } else {
        res.status(200).json({
          msg: "Find successfully!!",
          order1,
          order2
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // [GET] get by ID
  getOrderByID: async (req, res) => {
    try {
      const order = await Order.findOne({
        where: { order_id: req.body.id },
      });
      if (!order) {
        res.status(400).json({
          msg: "Order_ID didn't exist!!!",
        });
      } else {
        res.status(200).json({
          msg: "Find successfully!!",
          order,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // [GET] get Status by ID
  getStatusOrderByID: async (req, res) => {
    try {
      const order = await Order.findOne({
        where: { order_id: req.body.id },
      });
      if (!order) {
        res.status(400).json({
          msg: "Order_ID didn't exist!!!",
        });
      } else {
        res.status(200).json({
          msg: "Find successfully!!",
          status: order.status,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // [GET] get All Order by Status
  getAllOrderByStatus: async (req, res) => {
    try {
      const order = await Order.findAll({
        where: { status: req.body.status },
      });
      if (!order) {
        res.status(400).json({
          msg: "No order!!!",
        });
      } else {
        res.status(200).json({
          msg: "Find successfully!!",
          order,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //[POST] create new order
  createNewOrder: async (req, res) => {
    try {
      const { status, sendLoc, recLoc, code } = req.body;
      const time = new Date();
      const sendLocation = await Location.findOne({
        where: { address: sendLoc },
      });
      const receiveLocation = await Location.findOne({
        where: { address: recLoc },
      });
      const parcel = await Parcel.findOne({
        where: { parcel_code: code },
      });
      if (!parcel) {
        return res.status(400).json({
          msg: "Parcel code didn't exist!!",
        });
      } else {
        const newOrder = await Order.create({
          order_date: time,
          status: status,
          sending_location: sendLocation.location_id,
          receiving_location: receiveLocation.location_id,
          parcel_id: parcel.parcel_id,
        });
        return res.status(200).json({
          msg: "Create successfully!!",
          newOrder,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = orderController;
