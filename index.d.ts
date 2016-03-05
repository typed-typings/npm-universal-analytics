declare function ua (tid: string, cid?: string, options?: ua.Options): ua.Visitor;

declare namespace ua {
  export interface Options {
    strictCidFormat?: boolean;
    https?: boolean;
  }

  export interface MiddlewareOptions {
    cookieName?: string;
  }

  export function middleware (tid: string, options: MiddlewareOptions): (req: any, res: any, next: (err: Error) => any) => void;

  export function createFromSession (session: any): ua.Visitor;

  export type Callback = (err?: Error, count?: number) => any;

  export class Visitor {
    constructor (tid: string, cid?: string, options?: Options);
    debug (debug: boolean): this;
    reset (): this;

    send (callback: Callback): void;

    pageview (path: string, callback?: Callback): this;
    pageview (params: Object, callback?: Callback): this;
    pageview (path: string, hostname: string, callback?: Callback): this;
    pageview (path: string, title: string, hostname: string, callback?: Callback): this;

    event (category: string, action: string, callback?: Callback): this;
    event (category: string, action: string, label: string, callback?: Callback): this;
    event (category: string, action: string, label: string, value: any, callback?: Callback): this;
    event (category: string, action: string, label: string, value: any, params: Object, callback?: Callback): this;
    event (params: Object, callback: Callback): this;

    transaction (id: string, callback?: Callback): this;
    transaction (id: string, revenue: number, callback?: Callback): this;
    transaction (id: string, revenue: number, shipping: number, callback?: Callback): this;
    transaction (id: string, revenue: number, shipping: number, taxping: number, callback?: Callback): this;
    transaction (id: string, revenue: number, shipping: number, taxping: number, affiliation: string, callback?: Callback): this;
    transaction (params: Object, callback?: Callback): this;

    item (price: number, callback?: Callback): this;
    item (price: number, quantity: number, callback?: Callback): this;
    item (price: number, quantity: number, sku: number, callback?: Callback): this;
    item (price: number, quantity: number, sku: number, name: string, callback?: Callback): this;
    item (price: number, quantity: number, sku: number, name: string, variation: string, callback?: Callback): this;
    item (price: number, quantity: number, sku: number, name: string, variation: string, params: Object, callback?: Callback): this;
    item (params: Object, callback?: Callback): this;

    exception (description: string, callback?: Callback): this;
    exception (description: string, fatal:boolean, callback?: Callback): this;
    exception (params: Object, callback?: Callback): this;

    timing (category: string, callback?: Callback): this;
    timing (category: string, variable: string, callback?: Callback): this;
    timing (category: string, variable: string, time: number, callback?: Callback): this;
    timing (category: string, variable: string, time: number, label: string, callback?: Callback): this;
    timing (params: Object, callback?: Callback): this;
  }
}

export = ua;