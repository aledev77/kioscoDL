import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'kdl_product' })
export class Product {

    @PrimaryGeneratedColumn()
    id_product: number;

    @Column({ type: 'varchar', nullable: false })
    img_product: string;

    @Column({ type: 'varchar', nullable: false })
    name_product: string;

    @Column({ type:'numeric', nullable: false })
    id_brand: number;

    @Column({ type:'numeric', nullable: false })
    id_category: number;

    @Column({type: 'numeric', nullable: false})
    price_product: number;

    @Column({type: 'numeric', nullable: false})
    price_offer: number;

    @Column({ type: 'boolean', nullable: false }) 
    stock: boolean;

    @Column({ type: 'boolean', nullable: false }) 
    is_active: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'high_date', default: () => 'CURRENT_TIMESTAMP' })
    high_date: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'modification_date', default: () => 'CURRENT_TIMESTAMP' })
    modificationDate: Date;

}
