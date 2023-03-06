import { QueryInterface } from 'sequelize';
import { userSeedValues } from '../common/constants/seeds/users';

export async function up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.bulkInsert('user', userSeedValues , {})
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.bulkDelete('user', null, {})
}