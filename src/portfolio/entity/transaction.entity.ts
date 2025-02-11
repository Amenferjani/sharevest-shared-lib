import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from 'typeorm';
import { Asset } from './asset.entity';
import { Portfolio } from './portfolio.entity';
export enum TransactionType {
    BUY = 'buy',
    SELL = 'sell',
}

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Asset, (asset) => asset.id, { onDelete: 'CASCADE' })
    asset: Asset;

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.id, { onDelete: 'CASCADE' })
    portfolio: Portfolio;

    @Column({
        type: 'enum',
        enum: TransactionType,
    })
    type: TransactionType;

    @Column('decimal', { precision: 10, scale: 2 })
    quantity: number;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    transactionDate: Date;

    @Column('decimal', { precision: 5, scale: 2, nullable: true })
    transactionRiskImpact: number;

    @BeforeInsert()
    calculateTransactionRiskImpact() {
        const baseRisk = 0.1;
        const typeModifier = this.type === TransactionType.BUY ? 1.1 : 0.9;
        const volumeImpact = Math.log(this.quantity + 1);
        const priceImpact = this.price / 100;

        this.transactionRiskImpact = baseRisk * typeModifier * volumeImpact * priceImpact;
    }
}
