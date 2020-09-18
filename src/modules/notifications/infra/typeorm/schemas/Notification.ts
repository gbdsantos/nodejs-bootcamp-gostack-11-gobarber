import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  ObjectID,
  UpdateDateColumn,
} from 'typeorm';

@Entity('notifications')
class Notification {
  @Column()
  content: string;

  @ObjectIdColumn()
  object_id: ObjectID;

  @Column({ default: false })
  read: boolean;

  @Column('uuid')
  recipient_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Notification;
