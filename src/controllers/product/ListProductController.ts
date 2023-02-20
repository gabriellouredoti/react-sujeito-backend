import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductController {
	async handle(req: Request, res: Response) {
		const listProductService = new ListProductService();

		const product = await listProductService.execute();

		return res.json(product);
	}
}

export { ListProductController };
