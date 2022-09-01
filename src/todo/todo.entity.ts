import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}