import { Base, Config } from "src/base";

export class Post extends Base {
  public constructor(config: Config) {
    super(config);
  }
  async getPosts(): Promise<Post[]> {
    const response = await this.fetch("/posts");
    return response.json();
  }
}
