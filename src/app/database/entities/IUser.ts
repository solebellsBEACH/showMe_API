import { Role } from "@/app/enums/Roles";

export type IUser = {
    id: number;
    name: string;
    role:Role;
    image_url?:string;
    created_at: Date;
    updated_at: Date;
  };
  