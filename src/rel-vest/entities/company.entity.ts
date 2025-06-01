import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from 'typeorm';
import { Event } from './event.entity';
import { Investor } from './investor.entity';

@Entity('company')
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    industry: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    headquarters: string;

    @Column({ type: 'varchar', length: 100 })
    contactEmail: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phoneNumber: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    website: string;

    @Column({ type: 'varchar', length: 50, default: 'active' })
    status: 'active' | 'inactive';

    @OneToMany(() => Event, (event) => event.company, { cascade: true })
    events: Event[];

    @ManyToMany(() => Investor, (investor) => investor.companies)
    investors: Investor[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
