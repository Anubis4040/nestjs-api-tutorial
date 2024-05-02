import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, CatsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
