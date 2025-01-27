import { App, Provide, Queue } from "@midwayjs/decorator";
import { Application } from "@midwayjs/koa";

@Queue()
@Provide()
export class QueueTask{

  @App()
  app: Application;

  async excute(params){
    this.app.getApplicationContext().registerObject(`queueConfig`, JSON.stringify(params));
  }
}
