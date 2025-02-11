import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { HedgeFund } from './hedge-fund.entity';
@Entity()
export class PerformanceMetric {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Index()
    date: Date;

    @Column('decimal', { precision: 5, scale: 2, default: 0.00 })
    returnPercentage: number;

    @Column('decimal', { precision: 5, scale: 2, default: 0.00 })
    sharpeRatio: number;

    @Column('decimal', { precision: 5, scale: 2, default: 0.00 })
    volatility: number;

    @Column('decimal', { precision: 5, scale: 2, default: 0.00 })
    drawdown: number;

    @Column('decimal', { precision: 5, scale: 2, default: 0.00 })
    benchmarkPerformance: number;

    @Column('decimal', { precision: 5, scale: 2, default: 0.00 })
    riskScore: number;

    @Column('text', { nullable: true })
    comments: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date; 

    @Column({ type: 'uuid' })
    hedgeFundId: string;

    @ManyToOne(() => HedgeFund, hedgeFund => hedgeFund.performanceMetrics, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'hedgeFundId' })
    hedgeFund: HedgeFund;

    @BeforeInsert()
    @BeforeUpdate()
    validateMetrics() {
        if (this.returnPercentage < -100 || this.returnPercentage > 100) {
            throw new Error('Return percentage must be between -100 and 100');
        }
        if (this.sharpeRatio < -10 || this.sharpeRatio > 10) {
            throw new Error('Sharpe ratio must be between -10 and 10');
        }
        if (this.volatility < 0 || this.volatility > 100) {
            throw new Error('Volatility must be between 0 and 100');
        }
        if (this.drawdown < -100 || this.drawdown > 0) {
            throw new Error('Drawdown must be between -100 and 0');
        }
        if (this.benchmarkPerformance < -100 || this.benchmarkPerformance > 100) {
            throw new Error('Benchmark performance must be between -100 and 100');
        }
    }
}
