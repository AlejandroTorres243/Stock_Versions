import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema({
 nombre: String,
 edad: Number,
});
