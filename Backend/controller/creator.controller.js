import Creator from "../model/creator.model.js";

export const getcreator = async(req, res) => {
    try {
        const creator = await Creator.find();
        res.status(200).json(creator);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};