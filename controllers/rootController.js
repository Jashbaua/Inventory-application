const db = require("../db/queries");

module.exports = {
	async categoriesGet(req, res) {
		res.render("categories", { categories: await db.getAllCategories() });
	},
	categoryCreateGet(req, res) {
		res.render("createCategory");
	},
	async categoryCreatePost(req, res) {
		try {
			await db.createCategory(req.body["category-name"]);
			res.redirect("/");
		} catch (error) {
			res.render("error", { message: "Oops, category already exists!" });
		}
	},
	categoryUpdateGet(req, res) {
		res.render("updateCategory", { oldName: req.params.name });
	},
	async categoryUpdatePost(req, res) {
		try {
			await db.updateCategory(req.params.name, req.body["category-name"]);
			res.redirect("/");
		} catch (error) {
			res.render("error", { message: "Oops, category already exists!" });
		}
	},
	async categoryDeletePost(req, res) {
		await db.deleteCategory(req.params.name);
		res.redirect("/");
    },
    async itemsGet(req, res) {
        res.render('items', { items: await db.getItems(req.params.name), category:req.params.name })
    }
};
