import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity({ name: 'kdl_category' })
export class Category {

    @PrimaryGeneratedColumn()
    id_category: number;
    
    @Column({ type: 'varchar', nullable: false })
    img: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    name_category: string;

    @Column({ type: 'varchar', nullable: false })
    desc_category: string;

    @Column({ type: 'boolean', nullable: false }) 
    is_active: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'high_date', default: () => 'CURRENT_TIMESTAMP' })
    high_date: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'modification_date', default: () => 'CURRENT_TIMESTAMP' })
    modificationDate: Date;
}
