import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { User } from '../entities/User'
import bcrypt from 'bcrypt'

export class UserSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<void> {
        const userRepository = dataSource.getRepository(User)

        const userData = {
            name: 'seed_name',
            email: 'seed@email.com',
            password: await bcrypt.hash('123456', 10),
        }

        const userExists = await userRepository.findOneBy({ email: userData.email })

        if (!userExists) {
            const newUser = userRepository.create(userData)
            await userRepository.save(newUser)
        }
    }
}