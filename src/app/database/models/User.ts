import { DataTypes, Model, Sequelize } from 'sequelize';

import { IUser } from '../entities/IUser';

export class User extends Model implements IUser {

  id: number;
  name: string;
  role:string;
  created_at: Date;
  updated_at: Date;

  static initialize(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING(),
          allowNull: false,
        },
        role: {
          type: new DataTypes.STRING(),
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
        },
        updated_at: {
          type: DataTypes.DATE,
        },
      },

      {
        tableName: 'users',
        underscored: true,
        sequelize,
      },
    );
  }

  static association(): void {
    return;
  }
};
