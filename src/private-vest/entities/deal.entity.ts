import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { InvestorTracking } from './investorTracking.entity';

@Entity('deal')
export class Deal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'varchar', length: 255 })
    industry: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    requiredInvestment: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    currentInvestment: number;

    @Column({ type: 'varchar', length: 50, default: 'open' })
    status: string;

    @Column({ 
        type: 'varchar', 
        length: 100, 
        nullable: true, 
        default: 'Idea',
    })
    lifecycleStage: 'Idea' | 'Funding' | 'Growth' | 'Exit';

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => InvestorTracking, investorTracking => investorTracking.deal)
    investorTrackings: InvestorTracking[];

    @BeforeInsert()
    @BeforeUpdate()
    validateStatusAndStage() {
        const validStatuses = ['open', 'closed', 'pending'];
        if (!validStatuses.includes(this.status)) {
            throw new Error('Invalid status. Valid statuses are: ' + validStatuses.join(', '));
        }

        const validStages = ['Idea', 'Funding', 'Growth', 'Exit'];
        if (this.lifecycleStage && !validStages.includes(this.lifecycleStage)) {
            throw new Error('Invalid lifecycle stage. Valid stages are: ' + validStages.join(', '));
        }
    } 
}
