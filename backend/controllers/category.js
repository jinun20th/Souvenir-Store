import Category from '../models/Category.js'

export const createCategory = async (req, res, next) => {
    const newCategory = new Category(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateCategory = async (req, res, next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Category has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getCategory = async (req, res, next) => {
    try {
        const Category = await Category.findById(req.params.id);
        res.status(200).json(Category);
    } catch (err) {
        res.status(500).json(err);
    }
}