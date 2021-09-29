import { Service } from 'egg';

interface itemType {
  title: string;
  url: string;
}

/**
 * Test Service
 */
export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getList(name: string) {
    const list: Array<itemType> = [];
    for (let a = 0; a < 100; a++) {
      list.push({
        title: `${name}_${Math.random()}`,
        url: '',
      });
    }
    return list;
  }
}
