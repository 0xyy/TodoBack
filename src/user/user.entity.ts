import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from '../types';

@Entity()
export class User extends BaseEntity implements UserInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 30,
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    pwdHash: string;

    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
    })
    name: string;

    @Column()
    salt: string;

    @Column({
        nullable: true,
        default: null,
    })
    currentTokenId: string | null;
}
