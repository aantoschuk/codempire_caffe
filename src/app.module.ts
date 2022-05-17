import { Module } from '@nestjs/common';
import { ACLModule } from './acl/acl.module';
import { AppService } from './app.service';

@Module({
  imports: [ACLModule],
  providers: [AppService],
})
export class AppModule { }
