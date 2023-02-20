import prismaClient from "../../prisma";

class CreateCategoryService {
	async execute(name: string) {
		if (!name) {
			throw new Error("Name category does not inform");
		}

		const category = await prismaClient.category.create({
			data: { name },
			select: {
				id: true,
				name: true,
			},
		});

		return category;
	}
}

export { CreateCategoryService };
