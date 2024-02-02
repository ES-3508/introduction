import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ProductModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
