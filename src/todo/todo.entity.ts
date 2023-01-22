import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TodoInterface } from '../types';
import { User } from '../user/user.entity';

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

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.todos)
    user: User;
}