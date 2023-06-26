import { CheckIn, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { CheckInsRepository } from '../check-ins-respository'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: CheckIn[] = []
  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validade_at ? new Date(data.validade_at) : null,
      created_at: new Date(),
    }
    this.items.push(checkIn)
    return checkIn
  }
}
