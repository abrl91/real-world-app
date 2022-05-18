import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProfileModule } from './modules/profile/profile.module';
import { TagModule } from './modules/tag/tag.module';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { PrismaModule } from './core/prisma/prisma.module';

@Module({
  imports: [UserModule, ProfileModule, TagModule, ArticleModule, AuthorModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
