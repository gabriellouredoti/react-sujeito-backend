import prismaClient from "../../prisma";

interface OrderItemRequest {
	item_id: string;
}

class RemoveItemService {
	async execute({ item_id }: OrderItemRequest) {
		const order = await prismaClient.item.delete({
			where: {
				id: item_id,
			},
		});

		return order;
	}
}

export { RemoveItemService };
