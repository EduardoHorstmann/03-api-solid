export class ResourceNotFoundError extends Error {
  constructor() {
    super('IResource not found')
  }
}
