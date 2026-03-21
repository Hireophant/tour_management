import { Request, Response } from "express";


// [Get] /cart
export const index = async (req: Request, res: Response) => {
    res.render("client/pages/cart/index", {
        pageTitle: "Giỏ hàng",
    });
}