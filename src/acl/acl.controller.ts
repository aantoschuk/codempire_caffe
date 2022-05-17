import { Controller, Get } from '@nestjs/common';

import { ACLService } from './acl.service';

@Controller()
export class ACLController {
  constructor(private readonly aclService: ACLService) { }

  @Get()
  public getHello(): string {
    return this.aclService.getHello();
  }
}
