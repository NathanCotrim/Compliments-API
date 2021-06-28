import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	BeforeInsert,
	JoinColumn,
	ManyToOne,
} from 'typeorm';

import { Tag } from './Tag';

import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('compliments')
class Compliment {
	@PrimaryColumn()
	id: string;

	@Column()
	user_sender: string;

	@JoinColumn({ name: 'user_sender' })
	@ManyToOne(() => User)
	userSender: User;

	@Column()
	user_receiver: string;

	@JoinColumn({ name: 'user_receiver' })
	@ManyToOne(() => Tag)
	userReceiver: User;

	@Column()
	tag_id: string;

	@JoinColumn({ name: 'tag_id' })
	@ManyToOne(() => Tag)
	tag: Tag;

	@Column()
	message: string;

	@CreateDateColumn()
	created_at: Date;

	@BeforeInsert()
	generateId() {
		this.id = uuid();
	}
}

export { Compliment };
