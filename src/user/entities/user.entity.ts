import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';

export enum RiskToleranceLevel {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}
export enum SubscriptionPlan {
    FREE = 'FREE',
    SILVER = 'SILVER',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
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

    @Column({ type: 'enum', enum: SubscriptionPlan, default: SubscriptionPlan.FREE })
    subscriptionPlan: SubscriptionPlan;

    @Column({ type: 'timestamp', nullable: true })
    subscriptionExpiresAt: Date;

}
