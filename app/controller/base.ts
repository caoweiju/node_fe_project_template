import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const dataList = await ctx.service.base.getList('base');
    await ctx.render('base/base.tpl', { list: dataList });
  }
}
