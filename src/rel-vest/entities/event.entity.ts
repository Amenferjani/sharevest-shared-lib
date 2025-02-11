import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    JoinColumn,
} from 'typeorm';
import { Company } from './company.entity';
import { Investor } from './investor.entity';

@Entity('event')
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 100 })
    eventType: 'Webinar' | 'Annual Meeting' | 'Q&A Session';

    @Column({ type: 'timestamp' })
    date: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    location: string;

    @Column({ type: 'varchar', length: 50, default: 'upcoming' })
    status: 'upcoming' | 'completed' | 'cancelled';

    @Column({ type: 'uuid' })
    companyId: string;

    @ManyToOne(() => Company, (company) => company.events, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'companyId' })
    company: Company;

    @ManyToMany(() => Investor, (investor) => investor.events, { onDelete: 'CASCADE' })
    @JoinTable({
        name: 'event_investors',
        joinColumn: { name: 'event_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'investor_id', referencedColumnName: 'id' },
    })
    investors: Investor[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
