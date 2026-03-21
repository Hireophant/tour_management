import { Request, Response } from "express";
import Category from "../../models/category.model";


// [Get] /category
export const index = async (req: Request, res: Response) => {
    // SELECT * FROM categories WHERE deleted = false AND status = "active";
    const categories = await Category.findAll({ raw: true, where: { deleted: false, status: "active" } });
    res.render("client/pages/categories/index", {
        pageTitle: "Danh sách danh mục",
        categories: categories
    });
}