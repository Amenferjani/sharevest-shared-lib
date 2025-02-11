import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Asset } from './asset.entity';
import { Transaction } from './transaction.entity';

export enum InvestmentStrategy {
    CONSERVATIVE = 'conservative',
    BALANCED = 'balanced',
    AGGRESSIVE = 'aggressive',
    INCOME = 'income',
    GROWTH = 'growth',
    INDEX = 'index',
    VALUE = 'value',
    MOMENTUM = 'momentum',
}

@Entity()
export class Portfolio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({
        type: 'enum',
        enum: InvestmentStrategy,
        nullable: true,
        default: InvestmentStrategy.BALANCED
    })
    investmentStrategy: InvestmentStrategy;
}

