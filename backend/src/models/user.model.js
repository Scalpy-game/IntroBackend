import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trin: true, //Permet de gérer les espaces
            minLenght: 1,
            maxLenght: 30
        },

        password: {
            type:String,
            required: true,
            minLenght: 6,
            maxLenght: 50
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trin: true,

        }
    },
    {
        timestamps: true
    }
)

// before saving any password we need to hash it
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});


// compare passwords

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)