import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity('permissions')
export class Permission {  
  @PrimaryGeneratedColumn('uuid')
  id: string;

    @Column()
    name: string;

    @ManyToOne(() => Role, (role) => role.permissions)
    role: Role;

}
