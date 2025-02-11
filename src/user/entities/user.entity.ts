import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';

export enum RiskToleranceLevel {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Role, role => role.users, { onDelete: 'CASCADE' }) // Add inverse relationship
    @JoinTable() // Ensure this decorator is present
    role: Role[];

    @Column({ nullable: true })
    googleId: string; 

    @Column({ nullable: true })
    picture?: string;

    @Column({
        type: 'enum',
        enum: RiskToleranceLevel,
        default: RiskToleranceLevel.MEDIUM,
        nullable: true,
    })
    riskTolerance: RiskToleranceLevel;

    @Column('decimal', { precision: 5, scale: 2, default: 0.5 })
    overallRiskScore: number;

}
