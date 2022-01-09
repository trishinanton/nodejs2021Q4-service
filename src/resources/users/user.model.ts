import { v1 as uuid } from 'uuid';
import { UserType } from './user_repository';

/**
 * This class model for user
 * @param id first term string
 * @param name second term string
 * @param login second term string
 * @param password second term string
 */
export class User {
  id:string

  name: string

  login: string

  password: string

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user:UserType) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

