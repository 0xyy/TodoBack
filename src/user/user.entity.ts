import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from '../types';

@Entity()
export class User extends BaseEntity implements UserInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    pwdHash: string;

    @Column()
    name: string;

    @Column()
    salt: string;

    @Column()
    currentTokenId: string | null;
}
