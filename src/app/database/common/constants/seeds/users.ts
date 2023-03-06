import { IUser } from "@/app/database/entities/IUser";
import { Role } from "../../../../enums/Roles";

export const userSeedValues: IUser[] = [
    {
        id: 1,
        name: 'Lucas Xavier',
        role: Role.ADMIN,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: 2,
        name: 'Cliente',
        role: Role.CLIENT,
        created_at: new Date(),
        updated_at: new Date(),
    }
]