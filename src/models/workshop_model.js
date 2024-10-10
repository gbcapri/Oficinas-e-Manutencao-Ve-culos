import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
    unique: true,
  },
  specialties: {
    type: String,
    enum: ["MOTOR", "FREIOS", "SUSPENSÃO", "AMORTECEDOR", "ESCAPE"],
    required: true,
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    ref: "Maintenance",
    required: false,
  },
});
const Workshop = model("Workshop", workshopSchema);

export default Workshop;
