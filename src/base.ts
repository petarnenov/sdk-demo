export type Config = {
  apiKey: string;
  baseUrl: string;
};

export abstract class Base {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  protected fetch(path: string, options: RequestInit = {}): Promise<Response> {
    const url = `${this.config.baseUrl}${path}`;
    const headers = {
      "Content-Type": "application/json",
      "X-Api-Key": this.config.apiKey,
    };

    return fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    });
  }
}
