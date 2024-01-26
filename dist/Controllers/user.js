import { User } from "../Models/user.model.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, gender, _id, dob, photo } = req.body;
        const user = await User.create({
            name,
            email,
            gender,
            _id,
            dob,
            photo
        });
        res.status(200).json({ success: true, message: `Welcome ${user.name}` });
    }
    catch (error) {
    }
};
