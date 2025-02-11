import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, BeforeInsert, BeforeUpdate, JoinColumn } from 'typeorm';
import { Deal } from './deal.entity';

@Entity('investor_tracking')
export class InvestorTracking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    investorId: string;

    @Column({ type: 'uuid' })
    dealId: string;

    @ManyToOne(() => Deal, deal => deal.investorTrackings, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'dealId' })
    deal: Deal;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    investmentAmount: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    investmentDate: Date;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    roi: number; 

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    valuationChange: number;  

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    irr: number;  

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    profitLoss: number; 

    @Column({ type: 'boolean', default: false })
    exitCompleted: boolean;  

    @BeforeInsert()
    @BeforeUpdate()
    validateInvestment() {
        if (this.investmentAmount <= 0) {
            throw new Error('Investment amount must be greater than zero.');
        }
    }
}
