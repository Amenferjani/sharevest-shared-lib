    import {
        Entity,
        PrimaryGeneratedColumn,
        Column,
        ManyToMany,
        CreateDateColumn,
        UpdateDateColumn,
        JoinTable,
        ManyToOne,
        JoinColumn,
    } from 'typeorm';
    import { Event } from './event.entity';
    import { Company } from './company.entity';

    @Entity('investor')
    export class Investor {
        @PrimaryGeneratedColumn('uuid')
        id: string;

        @Column()
        userId: string;

        @Column({ type: 'varchar', length: 255 })
        name: string;

        @Column({ type: 'varchar', length: 100 })
        email: string;

        @Column({ type: 'varchar', length: 20, nullable: true })
        phoneNumber: string;

        @Column({ type: 'varchar', length: 255, nullable: true })
        investmentInterest: string;

        @Column({ type: 'varchar', length: 50, default: 'active' })
        status: 'active' | 'inactive';

        @Column({ type: 'uuid' })
        companyId: string;

        @ManyToOne(() => Company, (company) => company.investors, { onDelete: 'CASCADE' })
        @JoinColumn({ name: 'companyId' })
        company: Company;

        @ManyToMany(() => Event, (event) => event.investors, { onDelete: 'CASCADE' })
        @JoinTable()
        events: Event[];

        @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
        createdAt: Date;

        @UpdateDateColumn()
        updatedAt: Date;
    }
