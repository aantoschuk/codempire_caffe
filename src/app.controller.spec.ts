import { Test, TestingModule } from '@nestjs/testing';

import { ACLController } from './acl/acl.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: ACLController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ACLController],
      providers: [AppService],
    }).compile();

    appController = app.get<ACLController>(ACLController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
