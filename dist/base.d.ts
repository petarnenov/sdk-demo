export type Config = {
    apiKey: string;
    baseUrl: string;
};
export declare abstract class Base {
    private config;
    constructor(config: Config);
    protected fetch(path: string, options?: RequestInit): Promise<Response>;
}
