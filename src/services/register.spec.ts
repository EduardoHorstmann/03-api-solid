import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists'

describe('Register Use Case', () => {
  let usersRepository: InMemoryUserRepository
  let sut: RegisterUseCase

  beforeEach(() => {
    usersRepository = new InMemoryUserRepository()
    sut = new RegisterUseCase(usersRepository)
  })
  it('should be able to register', async () => {
    const userPassword = '123456'
    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: userPassword,
    })
    expect(user.id).toEqual(expect.any(String))
  })
  it('should hash user password upon registration', async () => {
    const userPassword = '123456'
    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: userPassword,
    })
    const isPasswordCorrectlyHashed = await compare(
      userPassword,
      user.password_hash,
    )
    expect(isPasswordCorrectlyHashed).toBe(true)
  })
  it('should not be able register with sma email twice', async () => {
    const email = 'johndoe@example.com'

    const userPassword = '123456'
    await sut.execute({
      name: 'John Doe',
      email,
      password: userPassword,
    })
    await expect(() =>
      sut.execute({
        name: 'John Doe',
        email,
        password: userPassword,
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
