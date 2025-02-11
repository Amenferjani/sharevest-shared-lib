import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate, JoinColumn } from 'typeorm';
import { HedgeFund } from './hedge-fund.entity';
@Entity()
export class Investment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    investorName: string;

    @Column()
    investorId: string;

    @Column('decimal', { precision: 10, scale: 2, default: 0.00 })
    amount: number;

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    investmentDate: Date;

    @Column()
    status: string;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    returns: number;

    @Column({ type: 'uuid' })
    hedgeFundId: string;

    @ManyToOne(() => HedgeFund, hedgeFund => hedgeFund.investments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'hedgeFundId' })
    hedgeFund: HedgeFund;

    @BeforeInsert()
    @BeforeUpdate()
    validateAmount() {
        if (this.amount <= 0) {
            throw new Error('Investment amount must be greater than zero');
        }
    }

    @BeforeInsert()
    @BeforeUpdate() 
    setDefaults() { 
        if (!this.status) { 
            this.status = 'pending'; 
        } 
    }
}
