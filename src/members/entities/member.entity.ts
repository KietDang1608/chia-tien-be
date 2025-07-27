import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('members')
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;
}
