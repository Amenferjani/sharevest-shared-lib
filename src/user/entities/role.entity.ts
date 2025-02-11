import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Permission } from './permission.entity';
import { User } from './user.entity';
@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => User, user => user.role) // Add this relationship
    users: User[]; // Add this field

    @OneToMany(() => Permission, (permission) => permission.role)
    permissions: Permission[];
}
