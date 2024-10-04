const { Router } = require('express')
const rootController=require('../controllers/rootController')

const rootRouter=Router()

rootRouter.get('/',rootController.categoriesGet)
rootRouter.get('/create', rootController.categoryCreateGet)
rootRouter.post('/create',rootController.categoryCreatePost)
rootRouter.get('/update/:name',rootController.categoryUpdateGet)
rootRouter.post('/update/:name',rootController.categoryUpdatePost)
rootRouter.post('/delete/:name', rootController.categoryDeletePost)
rootRouter.get('/category/:name',rootController.itemsGet)

module.exports=rootRouter