const shipment = require("../models/shipmentModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getAll = async (req, res) => {
  try {
    const features = new APIFeatures(shipment.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const allShipments = await features.query;

    res.status(201).json({
      status: "success",
      data: {
        allShipments,
      },
    });
  } catch (err) {
    console.log(res.query);
    res.status(400).json({
      status: "Bad request.",
    });
  }
};
exports.getById = async (req, res) => {
  try {
    const order = await shipment.findById(req.params.id);
    if (!order)
      throw new Error();
      
    res.status(200).json({
        data: order
    });
    
  } catch (error) {
    res.status(400).json({
      status: "Bad request.",
    });
  }



}


exports.createShipment = async (req, res) => {
  try {
    const newShipment = await shipment.create(req.body);
    res.status(201).json({
      status: "Successfully created new shipment",
      data: { newShipment },
    });
  } catch (error) {
    res.status(400).json({
      status: "Bad request.",
      data: {},
    });
  }
};

exports.deleteShipment = async (req, res) =>{
  try {
    templateId = JSON.parse(req.id);

    const data = await shipment.findByIdAndUpdate(templateId,{
      shipmentStatus:"CANCELED"
    },{
      new: true,
      runValidators: true
    })
    
    
    
    res.status(200).json({
      status:"Successfully deleted shipment",
      data

    })
  } catch (error) {
    res.status(400).json({
      status:"Bad request",
      message: error.message
    })
  }
};