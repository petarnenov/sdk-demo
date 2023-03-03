import { Base, Config } from "src/base";
export declare class Post extends Base {
    constructor(config: Config);
    getPosts(): Promise<Post[]>;
}
