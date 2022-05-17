import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { ArticleModule } from './article/article.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [UserModule, ProfileModule, TagModule, ArticleModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
