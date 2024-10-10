import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });
const maintenanceSchema = new Schema({
  workshop: {
    type: Schema.Types.ObjectId,
    ref: "Workshop",
    required: true
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true
  },
  services: {
    type: [serviceSchema],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
    default: 0,
  }
});

maintenanceSchema.methods.calculateTotalCost = function() {
  this.totalCost = this.services.reduce((total, service) => total + service.price, 0);
};

maintenanceSchema.pre("save", function (next) {
  this.calculateTotalCost();
  next();
});

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;