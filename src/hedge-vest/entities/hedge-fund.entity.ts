import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, BeforeUpdate, BeforeInsert } from 'typeorm';
import { Investment } from './investment.entity';
import { PerformanceMetric } from './Performance-metric.entity';
@Entity()
@Index(['name', 'manager'])
export class HedgeFund {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    manager: string;

    @Column('text', { nullable: true })
    description: string;

    @Column()
    strategy: string;

    @Column('decimal', { precision: 10, scale: 2, default: 0.00})
    totalAssets: number;

    @Column('decimal', { precision: 10, scale: 2, default: 0.00})
    investedAmount: number;

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    inceptionDate: Date;

    @Column('decimal', { precision: 5, scale: 2, default: 1.00 })
    managementFees: number;

    @Column('decimal', { precision: 5, scale: 2, default: 20.00 })
    performanceFees: number;

    @Column('text', { nullable: true })
    status: string; 

    @OneToMany(() => Investment, investment => investment.hedgeFund)
    investments: Investment[];

    @OneToMany(() => PerformanceMetric, metric => metric.hedgeFund)
    performanceMetrics: PerformanceMetric[];


    @BeforeInsert() 
    @BeforeUpdate() 
    validateFees() {
        if (this.managementFees < 0 || this.managementFees > 100) {
            throw new Error('Management fees must be between 0 and 100');
        }
        if (this.performanceFees < 0 || this.performanceFees > 100) {
            throw new Error('Performance fees must be between 0 and 100');
        }
    }
}
