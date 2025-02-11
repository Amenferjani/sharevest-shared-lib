import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate, JoinColumn } from 'typeorm';
import { Portfolio } from './portfolio.entity';

@Entity()
export class Asset {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ticker: string;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column('decimal', { precision: 10, scale: 2 })
    currentPrice: number;

    @Column('decimal', { precision: 5, scale: 2, nullable: true })
    riskFactor: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.id, { onDelete: 'CASCADE' })
    portfolio: Portfolio;

    @BeforeInsert()
    @BeforeUpdate()
    calculateRiskFactor() {
        const baseRisk = 1;
        const priceImpact = this.currentPrice / 100; 
        const quantityImpact = Math.log(this.quantity + 1); 

        this.riskFactor = baseRisk * priceImpact * quantityImpact;
    }
}
