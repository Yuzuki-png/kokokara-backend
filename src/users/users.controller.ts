import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'ユーザーを作成' })
  @ApiResponse({
    status: 201,
    description: 'ユーザーが正常に作成されました。',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: '無効なリクエストデータ' })
  create(@Body() createUserDto: CreateUserDto) {
    // パスワードのハッシュ化などの処理は省略
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email,
      password_hash: createUserDto.password, // 実際には適切なハッシュ化が必要
      parent_consent: createUserDto.parent_consent,
    };
    return this.usersService.create(data);
  }

  @Get()
  @ApiOperation({ summary: '全ユーザーを取得' })
  @ApiResponse({ status: 200, description: '成功', type: [UserResponseDto] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'IDによるユーザー取得' })
  @ApiParam({ name: 'id', type: 'number', description: 'ユーザーID' })
  @ApiResponse({ status: 200, description: '成功', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'ユーザーが見つかりません' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ユーザー情報の更新' })
  @ApiParam({ name: 'id', type: 'number', description: 'ユーザーID' })
  @ApiResponse({ status: 200, description: '成功', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'ユーザーが見つかりません' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ユーザーの削除' })
  @ApiParam({ name: 'id', type: 'number', description: 'ユーザーID' })
  @ApiResponse({ status: 200, description: '成功', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'ユーザーが見つかりません' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
