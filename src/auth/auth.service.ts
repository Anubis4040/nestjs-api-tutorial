import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2'

Injectable();
export class AuthService {
  constructor(private prismaService: PrismaService){}

  login() {
    return 'You have loged in';
  }

  async signup(authDto: AuthDto) {
    console.log(this.prismaService, 'prismaService')
    // Generate password hash
    const hash = await argon.hash(authDto.password);
    // Save new user with prisma
    const user = this.prismaService.user.create({
      data: {
        email: authDto.email,
        password: hash
      }
    })
    // Return saved user
    return user;
  }
}
