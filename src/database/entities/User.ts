import {
	Column,
	Entity,
	PrimaryColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
	BeforeUpdate,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	admin: boolean;

	@Exclude()
	@Column()
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword(): void {
		this.password = bcrypt.hashSync(this.password, 8);
	}

	constructor() {
		this.id = uuid();
	}
}
