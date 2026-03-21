import { Request, Response } from "express";
import Tour from "../../models/tour.model";


// [Get] /tour
export const index = async (req: Request, res: Response) => {
    // SELECT * FROM tours WHERE deleted = false AND status = "active";
    const tours = await Tour.findAll({ raw: true, where: { deleted: false, status: "active" } });
    res.render("client/pages/tours/index", {
        pageTitle: "Danh sách tour",
        tours: tours
    });
}