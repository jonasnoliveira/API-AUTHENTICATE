import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { LoginController } from "./controllers/login/LoginController"
import { authMiddleware } from "./middlewares/authMiddleware"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { DeleteUserController } from "./controllers/user/DeleteUserController"

const routes = Router()

routes.post('/register', new CreateUserController().handle)
routes.post('/delete', new DeleteUserController().handle)
routes.post('/user', new UserController().create)
routes.post('/login', new LoginController().login)

routes.use(authMiddleware)

routes.get('/profile', new LoginController().getProfile)

export default routes