import { EnvService } from '@/infra/env/env.service'
import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { Redis } from 'ioredis'

@Injectable()
export class RedisService extends Redis implements OnModuleDestroy {
  del(key: string) {
    throw new Error('Method not implemented.')
  }
  get(key: string): Promise<string | null> {
    throw new Error('Method not implemented.')
  }
  set(key: string, value: string, arg2: string, arg3: number) {
    throw new Error('Method not implemented.')
  }
  constructor(envService: EnvService) {
    super({
      host: envService.get('REDIS_HOST'),
      port: envService.get('REDIS_PORT'),
      db: envService.get('REDIS_DB'),
    })
  }

  onModuleDestroy() {
    return this.disconnect()
  }
  disconnect() {
    throw new Error('Method not implemented.')
  }
}
