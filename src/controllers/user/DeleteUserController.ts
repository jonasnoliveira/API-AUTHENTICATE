import { BadRequestError } from "../../helpers/api-errors"
import { RequestResponseInterface } from "../../interfaces"
import { userRepository } from "../../repositories/userRepository"

export class DeleteUserController {
    async handle({ req, res }: RequestResponseInterface) {
        const { email } = req.body

        const userExists = await userRepository.findOneBy({ email })

        if (!userExists) {
            throw new BadRequestError('Usuário não exite')
        }

        await userRepository.delete(userExists)

        return res.json({
            message: 'Usuário excluído com sucesso'
        })
    }
}