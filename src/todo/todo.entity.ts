import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoInterface } from '../types';

@Entity()
export class Todo extends BaseEntity implements TodoInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 30,
    })
    todo: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null,
    })
    description: string | null;

    @Column()
    isImportant: boolean;

    @Column({
        default: false,
    })
    isFinished: boolean;

    @Column()
    expiresIn: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
    })
    createdAt: Date;
}