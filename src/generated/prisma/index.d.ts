
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Forecast
 * 
 */
export type Forecast = $Result.DefaultSelection<Prisma.$ForecastPayload>
/**
 * Model ForecastBudget
 * 
 */
export type ForecastBudget = $Result.DefaultSelection<Prisma.$ForecastBudgetPayload>
/**
 * Model BudgetTypeEntry
 * 
 */
export type BudgetTypeEntry = $Result.DefaultSelection<Prisma.$BudgetTypeEntryPayload>
/**
 * Model ForecastArticle
 * 
 */
export type ForecastArticle = $Result.DefaultSelection<Prisma.$ForecastArticlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BudgetType: {
  REVENUE: 'REVENUE',
  ESTABLISHMENT: 'ESTABLISHMENT',
  OPERATION: 'OPERATION',
  FIXED: 'FIXED',
  PERSONNEL: 'PERSONNEL',
  SOCIAL_CHARGES: 'SOCIAL_CHARGES',
  TAXES: 'TAXES',
  FINANCIAL: 'FINANCIAL',
  PREVIOUS_BALANCE: 'PREVIOUS_BALANCE'
};

export type BudgetType = (typeof BudgetType)[keyof typeof BudgetType]


export const ArticleType: {
  PRODUCT: 'PRODUCT',
  SERVICE: 'SERVICE'
};

export type ArticleType = (typeof ArticleType)[keyof typeof ArticleType]


export const CashFlowType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type CashFlowType = (typeof CashFlowType)[keyof typeof CashFlowType]

}

export type BudgetType = $Enums.BudgetType

export const BudgetType: typeof $Enums.BudgetType

export type ArticleType = $Enums.ArticleType

export const ArticleType: typeof $Enums.ArticleType

export type CashFlowType = $Enums.CashFlowType

export const CashFlowType: typeof $Enums.CashFlowType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forecast`: Exposes CRUD operations for the **Forecast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forecasts
    * const forecasts = await prisma.forecast.findMany()
    * ```
    */
  get forecast(): Prisma.ForecastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forecastBudget`: Exposes CRUD operations for the **ForecastBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForecastBudgets
    * const forecastBudgets = await prisma.forecastBudget.findMany()
    * ```
    */
  get forecastBudget(): Prisma.ForecastBudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budgetTypeEntry`: Exposes CRUD operations for the **BudgetTypeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BudgetTypeEntries
    * const budgetTypeEntries = await prisma.budgetTypeEntry.findMany()
    * ```
    */
  get budgetTypeEntry(): Prisma.BudgetTypeEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forecastArticle`: Exposes CRUD operations for the **ForecastArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForecastArticles
    * const forecastArticles = await prisma.forecastArticle.findMany()
    * ```
    */
  get forecastArticle(): Prisma.ForecastArticleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    Project: 'Project',
    Forecast: 'Forecast',
    ForecastBudget: 'ForecastBudget',
    BudgetTypeEntry: 'BudgetTypeEntry',
    ForecastArticle: 'ForecastArticle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "verificationToken" | "user" | "project" | "forecast" | "forecastBudget" | "budgetTypeEntry" | "forecastArticle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Forecast: {
        payload: Prisma.$ForecastPayload<ExtArgs>
        fields: Prisma.ForecastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForecastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForecastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          findFirst: {
            args: Prisma.ForecastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForecastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          findMany: {
            args: Prisma.ForecastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>[]
          }
          create: {
            args: Prisma.ForecastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          createMany: {
            args: Prisma.ForecastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForecastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>[]
          }
          delete: {
            args: Prisma.ForecastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          update: {
            args: Prisma.ForecastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          deleteMany: {
            args: Prisma.ForecastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForecastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForecastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>[]
          }
          upsert: {
            args: Prisma.ForecastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastPayload>
          }
          aggregate: {
            args: Prisma.ForecastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForecast>
          }
          groupBy: {
            args: Prisma.ForecastGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForecastGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForecastCountArgs<ExtArgs>
            result: $Utils.Optional<ForecastCountAggregateOutputType> | number
          }
        }
      }
      ForecastBudget: {
        payload: Prisma.$ForecastBudgetPayload<ExtArgs>
        fields: Prisma.ForecastBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForecastBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForecastBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>
          }
          findFirst: {
            args: Prisma.ForecastBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForecastBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>
          }
          findMany: {
            args: Prisma.ForecastBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>[]
          }
          create: {
            args: Prisma.ForecastBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>
          }
          createMany: {
            args: Prisma.ForecastBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForecastBudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>[]
          }
          delete: {
            args: Prisma.ForecastBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>
          }
          update: {
            args: Prisma.ForecastBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>
          }
          deleteMany: {
            args: Prisma.ForecastBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForecastBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForecastBudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>[]
          }
          upsert: {
            args: Prisma.ForecastBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastBudgetPayload>
          }
          aggregate: {
            args: Prisma.ForecastBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForecastBudget>
          }
          groupBy: {
            args: Prisma.ForecastBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForecastBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForecastBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<ForecastBudgetCountAggregateOutputType> | number
          }
        }
      }
      BudgetTypeEntry: {
        payload: Prisma.$BudgetTypeEntryPayload<ExtArgs>
        fields: Prisma.BudgetTypeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetTypeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetTypeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>
          }
          findFirst: {
            args: Prisma.BudgetTypeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetTypeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>
          }
          findMany: {
            args: Prisma.BudgetTypeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>[]
          }
          create: {
            args: Prisma.BudgetTypeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>
          }
          createMany: {
            args: Prisma.BudgetTypeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetTypeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>[]
          }
          delete: {
            args: Prisma.BudgetTypeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>
          }
          update: {
            args: Prisma.BudgetTypeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>
          }
          deleteMany: {
            args: Prisma.BudgetTypeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetTypeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetTypeEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>[]
          }
          upsert: {
            args: Prisma.BudgetTypeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetTypeEntryPayload>
          }
          aggregate: {
            args: Prisma.BudgetTypeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudgetTypeEntry>
          }
          groupBy: {
            args: Prisma.BudgetTypeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetTypeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetTypeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetTypeEntryCountAggregateOutputType> | number
          }
        }
      }
      ForecastArticle: {
        payload: Prisma.$ForecastArticlePayload<ExtArgs>
        fields: Prisma.ForecastArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForecastArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForecastArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>
          }
          findFirst: {
            args: Prisma.ForecastArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForecastArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>
          }
          findMany: {
            args: Prisma.ForecastArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>[]
          }
          create: {
            args: Prisma.ForecastArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>
          }
          createMany: {
            args: Prisma.ForecastArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForecastArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>[]
          }
          delete: {
            args: Prisma.ForecastArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>
          }
          update: {
            args: Prisma.ForecastArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>
          }
          deleteMany: {
            args: Prisma.ForecastArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForecastArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForecastArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>[]
          }
          upsert: {
            args: Prisma.ForecastArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastArticlePayload>
          }
          aggregate: {
            args: Prisma.ForecastArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForecastArticle>
          }
          groupBy: {
            args: Prisma.ForecastArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForecastArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForecastArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ForecastArticleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    user?: UserOmit
    project?: ProjectOmit
    forecast?: ForecastOmit
    forecastBudget?: ForecastBudgetOmit
    budgetTypeEntry?: BudgetTypeEntryOmit
    forecastArticle?: ForecastArticleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    forecasts: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecasts?: boolean | ProjectCountOutputTypeCountForecastsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountForecastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastWhereInput
  }


  /**
   * Count Type ForecastCountOutputType
   */

  export type ForecastCountOutputType = {
    forecastBudgets: number
    forecastArticles: number
  }

  export type ForecastCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecastBudgets?: boolean | ForecastCountOutputTypeCountForecastBudgetsArgs
    forecastArticles?: boolean | ForecastCountOutputTypeCountForecastArticlesArgs
  }

  // Custom InputTypes
  /**
   * ForecastCountOutputType without action
   */
  export type ForecastCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastCountOutputType
     */
    select?: ForecastCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForecastCountOutputType without action
   */
  export type ForecastCountOutputTypeCountForecastBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastBudgetWhereInput
  }

  /**
   * ForecastCountOutputType without action
   */
  export type ForecastCountOutputTypeCountForecastArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastArticleWhereInput
  }


  /**
   * Count Type ForecastBudgetCountOutputType
   */

  export type ForecastBudgetCountOutputType = {
    entries: number
  }

  export type ForecastBudgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | ForecastBudgetCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * ForecastBudgetCountOutputType without action
   */
  export type ForecastBudgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudgetCountOutputType
     */
    select?: ForecastBudgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForecastBudgetCountOutputType without action
   */
  export type ForecastBudgetCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetTypeEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    lastModified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    lastModified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    userId: number
    lastModified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    lastModified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    lastModified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    lastModified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string
    lastModified: Date
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    lastModified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forecasts?: boolean | Project$forecastsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    lastModified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    lastModified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    lastModified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDate" | "endDate" | "userId" | "lastModified" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forecasts?: boolean | Project$forecastsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      forecasts: Prisma.$ForecastPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startDate: Date | null
      endDate: Date | null
      userId: string
      lastModified: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    forecasts<T extends Project$forecastsArgs<ExtArgs> = {}>(args?: Subset<T, Project$forecastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly lastModified: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.forecasts
   */
  export type Project$forecastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    where?: ForecastWhereInput
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    cursor?: ForecastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Forecast
   */

  export type AggregateForecast = {
    _count: ForecastCountAggregateOutputType | null
    _avg: ForecastAvgAggregateOutputType | null
    _sum: ForecastSumAggregateOutputType | null
    _min: ForecastMinAggregateOutputType | null
    _max: ForecastMaxAggregateOutputType | null
  }

  export type ForecastAvgAggregateOutputType = {
    startYear: number | null
  }

  export type ForecastSumAggregateOutputType = {
    startYear: number | null
  }

  export type ForecastMinAggregateOutputType = {
    id: string | null
    startYear: number | null
    projectId: string | null
  }

  export type ForecastMaxAggregateOutputType = {
    id: string | null
    startYear: number | null
    projectId: string | null
  }

  export type ForecastCountAggregateOutputType = {
    id: number
    startYear: number
    projectId: number
    _all: number
  }


  export type ForecastAvgAggregateInputType = {
    startYear?: true
  }

  export type ForecastSumAggregateInputType = {
    startYear?: true
  }

  export type ForecastMinAggregateInputType = {
    id?: true
    startYear?: true
    projectId?: true
  }

  export type ForecastMaxAggregateInputType = {
    id?: true
    startYear?: true
    projectId?: true
  }

  export type ForecastCountAggregateInputType = {
    id?: true
    startYear?: true
    projectId?: true
    _all?: true
  }

  export type ForecastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forecast to aggregate.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forecasts
    **/
    _count?: true | ForecastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForecastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForecastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForecastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForecastMaxAggregateInputType
  }

  export type GetForecastAggregateType<T extends ForecastAggregateArgs> = {
        [P in keyof T & keyof AggregateForecast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForecast[P]>
      : GetScalarType<T[P], AggregateForecast[P]>
  }




  export type ForecastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastWhereInput
    orderBy?: ForecastOrderByWithAggregationInput | ForecastOrderByWithAggregationInput[]
    by: ForecastScalarFieldEnum[] | ForecastScalarFieldEnum
    having?: ForecastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForecastCountAggregateInputType | true
    _avg?: ForecastAvgAggregateInputType
    _sum?: ForecastSumAggregateInputType
    _min?: ForecastMinAggregateInputType
    _max?: ForecastMaxAggregateInputType
  }

  export type ForecastGroupByOutputType = {
    id: string
    startYear: number
    projectId: string
    _count: ForecastCountAggregateOutputType | null
    _avg: ForecastAvgAggregateOutputType | null
    _sum: ForecastSumAggregateOutputType | null
    _min: ForecastMinAggregateOutputType | null
    _max: ForecastMaxAggregateOutputType | null
  }

  type GetForecastGroupByPayload<T extends ForecastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForecastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForecastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForecastGroupByOutputType[P]>
            : GetScalarType<T[P], ForecastGroupByOutputType[P]>
        }
      >
    >


  export type ForecastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startYear?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    forecastBudgets?: boolean | Forecast$forecastBudgetsArgs<ExtArgs>
    forecastArticles?: boolean | Forecast$forecastArticlesArgs<ExtArgs>
    _count?: boolean | ForecastCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecast"]>

  export type ForecastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startYear?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecast"]>

  export type ForecastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startYear?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecast"]>

  export type ForecastSelectScalar = {
    id?: boolean
    startYear?: boolean
    projectId?: boolean
  }

  export type ForecastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startYear" | "projectId", ExtArgs["result"]["forecast"]>
  export type ForecastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    forecastBudgets?: boolean | Forecast$forecastBudgetsArgs<ExtArgs>
    forecastArticles?: boolean | Forecast$forecastArticlesArgs<ExtArgs>
    _count?: boolean | ForecastCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForecastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ForecastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ForecastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forecast"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      forecastBudgets: Prisma.$ForecastBudgetPayload<ExtArgs>[]
      forecastArticles: Prisma.$ForecastArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startYear: number
      projectId: string
    }, ExtArgs["result"]["forecast"]>
    composites: {}
  }

  type ForecastGetPayload<S extends boolean | null | undefined | ForecastDefaultArgs> = $Result.GetResult<Prisma.$ForecastPayload, S>

  type ForecastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForecastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForecastCountAggregateInputType | true
    }

  export interface ForecastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forecast'], meta: { name: 'Forecast' } }
    /**
     * Find zero or one Forecast that matches the filter.
     * @param {ForecastFindUniqueArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForecastFindUniqueArgs>(args: SelectSubset<T, ForecastFindUniqueArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forecast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForecastFindUniqueOrThrowArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForecastFindUniqueOrThrowArgs>(args: SelectSubset<T, ForecastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forecast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastFindFirstArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForecastFindFirstArgs>(args?: SelectSubset<T, ForecastFindFirstArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forecast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastFindFirstOrThrowArgs} args - Arguments to find a Forecast
     * @example
     * // Get one Forecast
     * const forecast = await prisma.forecast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForecastFindFirstOrThrowArgs>(args?: SelectSubset<T, ForecastFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forecasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forecasts
     * const forecasts = await prisma.forecast.findMany()
     * 
     * // Get first 10 Forecasts
     * const forecasts = await prisma.forecast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forecastWithIdOnly = await prisma.forecast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForecastFindManyArgs>(args?: SelectSubset<T, ForecastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forecast.
     * @param {ForecastCreateArgs} args - Arguments to create a Forecast.
     * @example
     * // Create one Forecast
     * const Forecast = await prisma.forecast.create({
     *   data: {
     *     // ... data to create a Forecast
     *   }
     * })
     * 
     */
    create<T extends ForecastCreateArgs>(args: SelectSubset<T, ForecastCreateArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forecasts.
     * @param {ForecastCreateManyArgs} args - Arguments to create many Forecasts.
     * @example
     * // Create many Forecasts
     * const forecast = await prisma.forecast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForecastCreateManyArgs>(args?: SelectSubset<T, ForecastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forecasts and returns the data saved in the database.
     * @param {ForecastCreateManyAndReturnArgs} args - Arguments to create many Forecasts.
     * @example
     * // Create many Forecasts
     * const forecast = await prisma.forecast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forecasts and only return the `id`
     * const forecastWithIdOnly = await prisma.forecast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForecastCreateManyAndReturnArgs>(args?: SelectSubset<T, ForecastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forecast.
     * @param {ForecastDeleteArgs} args - Arguments to delete one Forecast.
     * @example
     * // Delete one Forecast
     * const Forecast = await prisma.forecast.delete({
     *   where: {
     *     // ... filter to delete one Forecast
     *   }
     * })
     * 
     */
    delete<T extends ForecastDeleteArgs>(args: SelectSubset<T, ForecastDeleteArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forecast.
     * @param {ForecastUpdateArgs} args - Arguments to update one Forecast.
     * @example
     * // Update one Forecast
     * const forecast = await prisma.forecast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForecastUpdateArgs>(args: SelectSubset<T, ForecastUpdateArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forecasts.
     * @param {ForecastDeleteManyArgs} args - Arguments to filter Forecasts to delete.
     * @example
     * // Delete a few Forecasts
     * const { count } = await prisma.forecast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForecastDeleteManyArgs>(args?: SelectSubset<T, ForecastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forecasts
     * const forecast = await prisma.forecast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForecastUpdateManyArgs>(args: SelectSubset<T, ForecastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forecasts and returns the data updated in the database.
     * @param {ForecastUpdateManyAndReturnArgs} args - Arguments to update many Forecasts.
     * @example
     * // Update many Forecasts
     * const forecast = await prisma.forecast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forecasts and only return the `id`
     * const forecastWithIdOnly = await prisma.forecast.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForecastUpdateManyAndReturnArgs>(args: SelectSubset<T, ForecastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forecast.
     * @param {ForecastUpsertArgs} args - Arguments to update or create a Forecast.
     * @example
     * // Update or create a Forecast
     * const forecast = await prisma.forecast.upsert({
     *   create: {
     *     // ... data to create a Forecast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forecast we want to update
     *   }
     * })
     */
    upsert<T extends ForecastUpsertArgs>(args: SelectSubset<T, ForecastUpsertArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastCountArgs} args - Arguments to filter Forecasts to count.
     * @example
     * // Count the number of Forecasts
     * const count = await prisma.forecast.count({
     *   where: {
     *     // ... the filter for the Forecasts we want to count
     *   }
     * })
    **/
    count<T extends ForecastCountArgs>(
      args?: Subset<T, ForecastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForecastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forecast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForecastAggregateArgs>(args: Subset<T, ForecastAggregateArgs>): Prisma.PrismaPromise<GetForecastAggregateType<T>>

    /**
     * Group by Forecast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForecastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForecastGroupByArgs['orderBy'] }
        : { orderBy?: ForecastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForecastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForecastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forecast model
   */
  readonly fields: ForecastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forecast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForecastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    forecastBudgets<T extends Forecast$forecastBudgetsArgs<ExtArgs> = {}>(args?: Subset<T, Forecast$forecastBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forecastArticles<T extends Forecast$forecastArticlesArgs<ExtArgs> = {}>(args?: Subset<T, Forecast$forecastArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Forecast model
   */
  interface ForecastFieldRefs {
    readonly id: FieldRef<"Forecast", 'String'>
    readonly startYear: FieldRef<"Forecast", 'Int'>
    readonly projectId: FieldRef<"Forecast", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Forecast findUnique
   */
  export type ForecastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast findUniqueOrThrow
   */
  export type ForecastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast findFirst
   */
  export type ForecastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forecasts.
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forecasts.
     */
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Forecast findFirstOrThrow
   */
  export type ForecastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecast to fetch.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forecasts.
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forecasts.
     */
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Forecast findMany
   */
  export type ForecastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter, which Forecasts to fetch.
     */
    where?: ForecastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forecasts to fetch.
     */
    orderBy?: ForecastOrderByWithRelationInput | ForecastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forecasts.
     */
    cursor?: ForecastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forecasts.
     */
    skip?: number
    distinct?: ForecastScalarFieldEnum | ForecastScalarFieldEnum[]
  }

  /**
   * Forecast create
   */
  export type ForecastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * The data needed to create a Forecast.
     */
    data: XOR<ForecastCreateInput, ForecastUncheckedCreateInput>
  }

  /**
   * Forecast createMany
   */
  export type ForecastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forecasts.
     */
    data: ForecastCreateManyInput | ForecastCreateManyInput[]
  }

  /**
   * Forecast createManyAndReturn
   */
  export type ForecastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * The data used to create many Forecasts.
     */
    data: ForecastCreateManyInput | ForecastCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forecast update
   */
  export type ForecastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * The data needed to update a Forecast.
     */
    data: XOR<ForecastUpdateInput, ForecastUncheckedUpdateInput>
    /**
     * Choose, which Forecast to update.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast updateMany
   */
  export type ForecastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forecasts.
     */
    data: XOR<ForecastUpdateManyMutationInput, ForecastUncheckedUpdateManyInput>
    /**
     * Filter which Forecasts to update
     */
    where?: ForecastWhereInput
    /**
     * Limit how many Forecasts to update.
     */
    limit?: number
  }

  /**
   * Forecast updateManyAndReturn
   */
  export type ForecastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * The data used to update Forecasts.
     */
    data: XOR<ForecastUpdateManyMutationInput, ForecastUncheckedUpdateManyInput>
    /**
     * Filter which Forecasts to update
     */
    where?: ForecastWhereInput
    /**
     * Limit how many Forecasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forecast upsert
   */
  export type ForecastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * The filter to search for the Forecast to update in case it exists.
     */
    where: ForecastWhereUniqueInput
    /**
     * In case the Forecast found by the `where` argument doesn't exist, create a new Forecast with this data.
     */
    create: XOR<ForecastCreateInput, ForecastUncheckedCreateInput>
    /**
     * In case the Forecast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForecastUpdateInput, ForecastUncheckedUpdateInput>
  }

  /**
   * Forecast delete
   */
  export type ForecastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
    /**
     * Filter which Forecast to delete.
     */
    where: ForecastWhereUniqueInput
  }

  /**
   * Forecast deleteMany
   */
  export type ForecastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forecasts to delete
     */
    where?: ForecastWhereInput
    /**
     * Limit how many Forecasts to delete.
     */
    limit?: number
  }

  /**
   * Forecast.forecastBudgets
   */
  export type Forecast$forecastBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    where?: ForecastBudgetWhereInput
    orderBy?: ForecastBudgetOrderByWithRelationInput | ForecastBudgetOrderByWithRelationInput[]
    cursor?: ForecastBudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForecastBudgetScalarFieldEnum | ForecastBudgetScalarFieldEnum[]
  }

  /**
   * Forecast.forecastArticles
   */
  export type Forecast$forecastArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    where?: ForecastArticleWhereInput
    orderBy?: ForecastArticleOrderByWithRelationInput | ForecastArticleOrderByWithRelationInput[]
    cursor?: ForecastArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForecastArticleScalarFieldEnum | ForecastArticleScalarFieldEnum[]
  }

  /**
   * Forecast without action
   */
  export type ForecastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forecast
     */
    select?: ForecastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forecast
     */
    omit?: ForecastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastInclude<ExtArgs> | null
  }


  /**
   * Model ForecastBudget
   */

  export type AggregateForecastBudget = {
    _count: ForecastBudgetCountAggregateOutputType | null
    _min: ForecastBudgetMinAggregateOutputType | null
    _max: ForecastBudgetMaxAggregateOutputType | null
  }

  export type ForecastBudgetMinAggregateOutputType = {
    id: string | null
    budgetType: $Enums.BudgetType | null
    forecastId: string | null
  }

  export type ForecastBudgetMaxAggregateOutputType = {
    id: string | null
    budgetType: $Enums.BudgetType | null
    forecastId: string | null
  }

  export type ForecastBudgetCountAggregateOutputType = {
    id: number
    budgetType: number
    forecastId: number
    _all: number
  }


  export type ForecastBudgetMinAggregateInputType = {
    id?: true
    budgetType?: true
    forecastId?: true
  }

  export type ForecastBudgetMaxAggregateInputType = {
    id?: true
    budgetType?: true
    forecastId?: true
  }

  export type ForecastBudgetCountAggregateInputType = {
    id?: true
    budgetType?: true
    forecastId?: true
    _all?: true
  }

  export type ForecastBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastBudget to aggregate.
     */
    where?: ForecastBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastBudgets to fetch.
     */
    orderBy?: ForecastBudgetOrderByWithRelationInput | ForecastBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForecastBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForecastBudgets
    **/
    _count?: true | ForecastBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForecastBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForecastBudgetMaxAggregateInputType
  }

  export type GetForecastBudgetAggregateType<T extends ForecastBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateForecastBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForecastBudget[P]>
      : GetScalarType<T[P], AggregateForecastBudget[P]>
  }




  export type ForecastBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastBudgetWhereInput
    orderBy?: ForecastBudgetOrderByWithAggregationInput | ForecastBudgetOrderByWithAggregationInput[]
    by: ForecastBudgetScalarFieldEnum[] | ForecastBudgetScalarFieldEnum
    having?: ForecastBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForecastBudgetCountAggregateInputType | true
    _min?: ForecastBudgetMinAggregateInputType
    _max?: ForecastBudgetMaxAggregateInputType
  }

  export type ForecastBudgetGroupByOutputType = {
    id: string
    budgetType: $Enums.BudgetType
    forecastId: string
    _count: ForecastBudgetCountAggregateOutputType | null
    _min: ForecastBudgetMinAggregateOutputType | null
    _max: ForecastBudgetMaxAggregateOutputType | null
  }

  type GetForecastBudgetGroupByPayload<T extends ForecastBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForecastBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForecastBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForecastBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], ForecastBudgetGroupByOutputType[P]>
        }
      >
    >


  export type ForecastBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    budgetType?: boolean
    forecastId?: boolean
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
    entries?: boolean | ForecastBudget$entriesArgs<ExtArgs>
    _count?: boolean | ForecastBudgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastBudget"]>

  export type ForecastBudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    budgetType?: boolean
    forecastId?: boolean
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastBudget"]>

  export type ForecastBudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    budgetType?: boolean
    forecastId?: boolean
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastBudget"]>

  export type ForecastBudgetSelectScalar = {
    id?: boolean
    budgetType?: boolean
    forecastId?: boolean
  }

  export type ForecastBudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "budgetType" | "forecastId", ExtArgs["result"]["forecastBudget"]>
  export type ForecastBudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
    entries?: boolean | ForecastBudget$entriesArgs<ExtArgs>
    _count?: boolean | ForecastBudgetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForecastBudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }
  export type ForecastBudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }

  export type $ForecastBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForecastBudget"
    objects: {
      forecast: Prisma.$ForecastPayload<ExtArgs>
      entries: Prisma.$BudgetTypeEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      budgetType: $Enums.BudgetType
      forecastId: string
    }, ExtArgs["result"]["forecastBudget"]>
    composites: {}
  }

  type ForecastBudgetGetPayload<S extends boolean | null | undefined | ForecastBudgetDefaultArgs> = $Result.GetResult<Prisma.$ForecastBudgetPayload, S>

  type ForecastBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForecastBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForecastBudgetCountAggregateInputType | true
    }

  export interface ForecastBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForecastBudget'], meta: { name: 'ForecastBudget' } }
    /**
     * Find zero or one ForecastBudget that matches the filter.
     * @param {ForecastBudgetFindUniqueArgs} args - Arguments to find a ForecastBudget
     * @example
     * // Get one ForecastBudget
     * const forecastBudget = await prisma.forecastBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForecastBudgetFindUniqueArgs>(args: SelectSubset<T, ForecastBudgetFindUniqueArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForecastBudget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForecastBudgetFindUniqueOrThrowArgs} args - Arguments to find a ForecastBudget
     * @example
     * // Get one ForecastBudget
     * const forecastBudget = await prisma.forecastBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForecastBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, ForecastBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetFindFirstArgs} args - Arguments to find a ForecastBudget
     * @example
     * // Get one ForecastBudget
     * const forecastBudget = await prisma.forecastBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForecastBudgetFindFirstArgs>(args?: SelectSubset<T, ForecastBudgetFindFirstArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetFindFirstOrThrowArgs} args - Arguments to find a ForecastBudget
     * @example
     * // Get one ForecastBudget
     * const forecastBudget = await prisma.forecastBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForecastBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, ForecastBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForecastBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForecastBudgets
     * const forecastBudgets = await prisma.forecastBudget.findMany()
     * 
     * // Get first 10 ForecastBudgets
     * const forecastBudgets = await prisma.forecastBudget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forecastBudgetWithIdOnly = await prisma.forecastBudget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForecastBudgetFindManyArgs>(args?: SelectSubset<T, ForecastBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForecastBudget.
     * @param {ForecastBudgetCreateArgs} args - Arguments to create a ForecastBudget.
     * @example
     * // Create one ForecastBudget
     * const ForecastBudget = await prisma.forecastBudget.create({
     *   data: {
     *     // ... data to create a ForecastBudget
     *   }
     * })
     * 
     */
    create<T extends ForecastBudgetCreateArgs>(args: SelectSubset<T, ForecastBudgetCreateArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForecastBudgets.
     * @param {ForecastBudgetCreateManyArgs} args - Arguments to create many ForecastBudgets.
     * @example
     * // Create many ForecastBudgets
     * const forecastBudget = await prisma.forecastBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForecastBudgetCreateManyArgs>(args?: SelectSubset<T, ForecastBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForecastBudgets and returns the data saved in the database.
     * @param {ForecastBudgetCreateManyAndReturnArgs} args - Arguments to create many ForecastBudgets.
     * @example
     * // Create many ForecastBudgets
     * const forecastBudget = await prisma.forecastBudget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForecastBudgets and only return the `id`
     * const forecastBudgetWithIdOnly = await prisma.forecastBudget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForecastBudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, ForecastBudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForecastBudget.
     * @param {ForecastBudgetDeleteArgs} args - Arguments to delete one ForecastBudget.
     * @example
     * // Delete one ForecastBudget
     * const ForecastBudget = await prisma.forecastBudget.delete({
     *   where: {
     *     // ... filter to delete one ForecastBudget
     *   }
     * })
     * 
     */
    delete<T extends ForecastBudgetDeleteArgs>(args: SelectSubset<T, ForecastBudgetDeleteArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForecastBudget.
     * @param {ForecastBudgetUpdateArgs} args - Arguments to update one ForecastBudget.
     * @example
     * // Update one ForecastBudget
     * const forecastBudget = await prisma.forecastBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForecastBudgetUpdateArgs>(args: SelectSubset<T, ForecastBudgetUpdateArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForecastBudgets.
     * @param {ForecastBudgetDeleteManyArgs} args - Arguments to filter ForecastBudgets to delete.
     * @example
     * // Delete a few ForecastBudgets
     * const { count } = await prisma.forecastBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForecastBudgetDeleteManyArgs>(args?: SelectSubset<T, ForecastBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForecastBudgets
     * const forecastBudget = await prisma.forecastBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForecastBudgetUpdateManyArgs>(args: SelectSubset<T, ForecastBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastBudgets and returns the data updated in the database.
     * @param {ForecastBudgetUpdateManyAndReturnArgs} args - Arguments to update many ForecastBudgets.
     * @example
     * // Update many ForecastBudgets
     * const forecastBudget = await prisma.forecastBudget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForecastBudgets and only return the `id`
     * const forecastBudgetWithIdOnly = await prisma.forecastBudget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForecastBudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, ForecastBudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForecastBudget.
     * @param {ForecastBudgetUpsertArgs} args - Arguments to update or create a ForecastBudget.
     * @example
     * // Update or create a ForecastBudget
     * const forecastBudget = await prisma.forecastBudget.upsert({
     *   create: {
     *     // ... data to create a ForecastBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForecastBudget we want to update
     *   }
     * })
     */
    upsert<T extends ForecastBudgetUpsertArgs>(args: SelectSubset<T, ForecastBudgetUpsertArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForecastBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetCountArgs} args - Arguments to filter ForecastBudgets to count.
     * @example
     * // Count the number of ForecastBudgets
     * const count = await prisma.forecastBudget.count({
     *   where: {
     *     // ... the filter for the ForecastBudgets we want to count
     *   }
     * })
    **/
    count<T extends ForecastBudgetCountArgs>(
      args?: Subset<T, ForecastBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForecastBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForecastBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForecastBudgetAggregateArgs>(args: Subset<T, ForecastBudgetAggregateArgs>): Prisma.PrismaPromise<GetForecastBudgetAggregateType<T>>

    /**
     * Group by ForecastBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastBudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForecastBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForecastBudgetGroupByArgs['orderBy'] }
        : { orderBy?: ForecastBudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForecastBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForecastBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForecastBudget model
   */
  readonly fields: ForecastBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForecastBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForecastBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forecast<T extends ForecastDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForecastDefaultArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entries<T extends ForecastBudget$entriesArgs<ExtArgs> = {}>(args?: Subset<T, ForecastBudget$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForecastBudget model
   */
  interface ForecastBudgetFieldRefs {
    readonly id: FieldRef<"ForecastBudget", 'String'>
    readonly budgetType: FieldRef<"ForecastBudget", 'BudgetType'>
    readonly forecastId: FieldRef<"ForecastBudget", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ForecastBudget findUnique
   */
  export type ForecastBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * Filter, which ForecastBudget to fetch.
     */
    where: ForecastBudgetWhereUniqueInput
  }

  /**
   * ForecastBudget findUniqueOrThrow
   */
  export type ForecastBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * Filter, which ForecastBudget to fetch.
     */
    where: ForecastBudgetWhereUniqueInput
  }

  /**
   * ForecastBudget findFirst
   */
  export type ForecastBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * Filter, which ForecastBudget to fetch.
     */
    where?: ForecastBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastBudgets to fetch.
     */
    orderBy?: ForecastBudgetOrderByWithRelationInput | ForecastBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastBudgets.
     */
    cursor?: ForecastBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastBudgets.
     */
    distinct?: ForecastBudgetScalarFieldEnum | ForecastBudgetScalarFieldEnum[]
  }

  /**
   * ForecastBudget findFirstOrThrow
   */
  export type ForecastBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * Filter, which ForecastBudget to fetch.
     */
    where?: ForecastBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastBudgets to fetch.
     */
    orderBy?: ForecastBudgetOrderByWithRelationInput | ForecastBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastBudgets.
     */
    cursor?: ForecastBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastBudgets.
     */
    distinct?: ForecastBudgetScalarFieldEnum | ForecastBudgetScalarFieldEnum[]
  }

  /**
   * ForecastBudget findMany
   */
  export type ForecastBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * Filter, which ForecastBudgets to fetch.
     */
    where?: ForecastBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastBudgets to fetch.
     */
    orderBy?: ForecastBudgetOrderByWithRelationInput | ForecastBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForecastBudgets.
     */
    cursor?: ForecastBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastBudgets.
     */
    skip?: number
    distinct?: ForecastBudgetScalarFieldEnum | ForecastBudgetScalarFieldEnum[]
  }

  /**
   * ForecastBudget create
   */
  export type ForecastBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a ForecastBudget.
     */
    data: XOR<ForecastBudgetCreateInput, ForecastBudgetUncheckedCreateInput>
  }

  /**
   * ForecastBudget createMany
   */
  export type ForecastBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForecastBudgets.
     */
    data: ForecastBudgetCreateManyInput | ForecastBudgetCreateManyInput[]
  }

  /**
   * ForecastBudget createManyAndReturn
   */
  export type ForecastBudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * The data used to create many ForecastBudgets.
     */
    data: ForecastBudgetCreateManyInput | ForecastBudgetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastBudget update
   */
  export type ForecastBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a ForecastBudget.
     */
    data: XOR<ForecastBudgetUpdateInput, ForecastBudgetUncheckedUpdateInput>
    /**
     * Choose, which ForecastBudget to update.
     */
    where: ForecastBudgetWhereUniqueInput
  }

  /**
   * ForecastBudget updateMany
   */
  export type ForecastBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForecastBudgets.
     */
    data: XOR<ForecastBudgetUpdateManyMutationInput, ForecastBudgetUncheckedUpdateManyInput>
    /**
     * Filter which ForecastBudgets to update
     */
    where?: ForecastBudgetWhereInput
    /**
     * Limit how many ForecastBudgets to update.
     */
    limit?: number
  }

  /**
   * ForecastBudget updateManyAndReturn
   */
  export type ForecastBudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * The data used to update ForecastBudgets.
     */
    data: XOR<ForecastBudgetUpdateManyMutationInput, ForecastBudgetUncheckedUpdateManyInput>
    /**
     * Filter which ForecastBudgets to update
     */
    where?: ForecastBudgetWhereInput
    /**
     * Limit how many ForecastBudgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastBudget upsert
   */
  export type ForecastBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the ForecastBudget to update in case it exists.
     */
    where: ForecastBudgetWhereUniqueInput
    /**
     * In case the ForecastBudget found by the `where` argument doesn't exist, create a new ForecastBudget with this data.
     */
    create: XOR<ForecastBudgetCreateInput, ForecastBudgetUncheckedCreateInput>
    /**
     * In case the ForecastBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForecastBudgetUpdateInput, ForecastBudgetUncheckedUpdateInput>
  }

  /**
   * ForecastBudget delete
   */
  export type ForecastBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
    /**
     * Filter which ForecastBudget to delete.
     */
    where: ForecastBudgetWhereUniqueInput
  }

  /**
   * ForecastBudget deleteMany
   */
  export type ForecastBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastBudgets to delete
     */
    where?: ForecastBudgetWhereInput
    /**
     * Limit how many ForecastBudgets to delete.
     */
    limit?: number
  }

  /**
   * ForecastBudget.entries
   */
  export type ForecastBudget$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    where?: BudgetTypeEntryWhereInput
    orderBy?: BudgetTypeEntryOrderByWithRelationInput | BudgetTypeEntryOrderByWithRelationInput[]
    cursor?: BudgetTypeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetTypeEntryScalarFieldEnum | BudgetTypeEntryScalarFieldEnum[]
  }

  /**
   * ForecastBudget without action
   */
  export type ForecastBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastBudget
     */
    select?: ForecastBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastBudget
     */
    omit?: ForecastBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastBudgetInclude<ExtArgs> | null
  }


  /**
   * Model BudgetTypeEntry
   */

  export type AggregateBudgetTypeEntry = {
    _count: BudgetTypeEntryCountAggregateOutputType | null
    _avg: BudgetTypeEntryAvgAggregateOutputType | null
    _sum: BudgetTypeEntrySumAggregateOutputType | null
    _min: BudgetTypeEntryMinAggregateOutputType | null
    _max: BudgetTypeEntryMaxAggregateOutputType | null
  }

  export type BudgetTypeEntryAvgAggregateOutputType = {
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
    unitPrice: number | null
    productionPrice: number | null
  }

  export type BudgetTypeEntrySumAggregateOutputType = {
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
    unitPrice: number | null
    productionPrice: number | null
  }

  export type BudgetTypeEntryMinAggregateOutputType = {
    id: string | null
    title: string | null
    budgetType: $Enums.BudgetType | null
    cashFlowType: $Enums.CashFlowType | null
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
    unitPrice: number | null
    productionPrice: number | null
    articleType: $Enums.ArticleType | null
    budgetId: string | null
  }

  export type BudgetTypeEntryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    budgetType: $Enums.BudgetType | null
    cashFlowType: $Enums.CashFlowType | null
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
    unitPrice: number | null
    productionPrice: number | null
    articleType: $Enums.ArticleType | null
    budgetId: string | null
  }

  export type BudgetTypeEntryCountAggregateOutputType = {
    id: number
    title: number
    budgetType: number
    cashFlowType: number
    januaryValue: number
    februaryValue: number
    marchValue: number
    aprilValue: number
    mayValue: number
    juneValue: number
    julyValue: number
    augustValue: number
    septemberValue: number
    octoberValue: number
    novemberValue: number
    decemberValue: number
    unitPrice: number
    productionPrice: number
    articleType: number
    budgetId: number
    _all: number
  }


  export type BudgetTypeEntryAvgAggregateInputType = {
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    unitPrice?: true
    productionPrice?: true
  }

  export type BudgetTypeEntrySumAggregateInputType = {
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    unitPrice?: true
    productionPrice?: true
  }

  export type BudgetTypeEntryMinAggregateInputType = {
    id?: true
    title?: true
    budgetType?: true
    cashFlowType?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    unitPrice?: true
    productionPrice?: true
    articleType?: true
    budgetId?: true
  }

  export type BudgetTypeEntryMaxAggregateInputType = {
    id?: true
    title?: true
    budgetType?: true
    cashFlowType?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    unitPrice?: true
    productionPrice?: true
    articleType?: true
    budgetId?: true
  }

  export type BudgetTypeEntryCountAggregateInputType = {
    id?: true
    title?: true
    budgetType?: true
    cashFlowType?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    unitPrice?: true
    productionPrice?: true
    articleType?: true
    budgetId?: true
    _all?: true
  }

  export type BudgetTypeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetTypeEntry to aggregate.
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetTypeEntries to fetch.
     */
    orderBy?: BudgetTypeEntryOrderByWithRelationInput | BudgetTypeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetTypeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetTypeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetTypeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BudgetTypeEntries
    **/
    _count?: true | BudgetTypeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetTypeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetTypeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetTypeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetTypeEntryMaxAggregateInputType
  }

  export type GetBudgetTypeEntryAggregateType<T extends BudgetTypeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgetTypeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgetTypeEntry[P]>
      : GetScalarType<T[P], AggregateBudgetTypeEntry[P]>
  }




  export type BudgetTypeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetTypeEntryWhereInput
    orderBy?: BudgetTypeEntryOrderByWithAggregationInput | BudgetTypeEntryOrderByWithAggregationInput[]
    by: BudgetTypeEntryScalarFieldEnum[] | BudgetTypeEntryScalarFieldEnum
    having?: BudgetTypeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetTypeEntryCountAggregateInputType | true
    _avg?: BudgetTypeEntryAvgAggregateInputType
    _sum?: BudgetTypeEntrySumAggregateInputType
    _min?: BudgetTypeEntryMinAggregateInputType
    _max?: BudgetTypeEntryMaxAggregateInputType
  }

  export type BudgetTypeEntryGroupByOutputType = {
    id: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue: number
    februaryValue: number
    marchValue: number
    aprilValue: number
    mayValue: number
    juneValue: number
    julyValue: number
    augustValue: number
    septemberValue: number
    octoberValue: number
    novemberValue: number
    decemberValue: number
    unitPrice: number
    productionPrice: number
    articleType: $Enums.ArticleType | null
    budgetId: string
    _count: BudgetTypeEntryCountAggregateOutputType | null
    _avg: BudgetTypeEntryAvgAggregateOutputType | null
    _sum: BudgetTypeEntrySumAggregateOutputType | null
    _min: BudgetTypeEntryMinAggregateOutputType | null
    _max: BudgetTypeEntryMaxAggregateOutputType | null
  }

  type GetBudgetTypeEntryGroupByPayload<T extends BudgetTypeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetTypeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetTypeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetTypeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetTypeEntryGroupByOutputType[P]>
        }
      >
    >


  export type BudgetTypeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    budgetType?: boolean
    cashFlowType?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    articleType?: boolean
    budgetId?: boolean
    budget?: boolean | ForecastBudgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetTypeEntry"]>

  export type BudgetTypeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    budgetType?: boolean
    cashFlowType?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    articleType?: boolean
    budgetId?: boolean
    budget?: boolean | ForecastBudgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetTypeEntry"]>

  export type BudgetTypeEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    budgetType?: boolean
    cashFlowType?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    articleType?: boolean
    budgetId?: boolean
    budget?: boolean | ForecastBudgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetTypeEntry"]>

  export type BudgetTypeEntrySelectScalar = {
    id?: boolean
    title?: boolean
    budgetType?: boolean
    cashFlowType?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    articleType?: boolean
    budgetId?: boolean
  }

  export type BudgetTypeEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "budgetType" | "cashFlowType" | "januaryValue" | "februaryValue" | "marchValue" | "aprilValue" | "mayValue" | "juneValue" | "julyValue" | "augustValue" | "septemberValue" | "octoberValue" | "novemberValue" | "decemberValue" | "unitPrice" | "productionPrice" | "articleType" | "budgetId", ExtArgs["result"]["budgetTypeEntry"]>
  export type BudgetTypeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | ForecastBudgetDefaultArgs<ExtArgs>
  }
  export type BudgetTypeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | ForecastBudgetDefaultArgs<ExtArgs>
  }
  export type BudgetTypeEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | ForecastBudgetDefaultArgs<ExtArgs>
  }

  export type $BudgetTypeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BudgetTypeEntry"
    objects: {
      budget: Prisma.$ForecastBudgetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      budgetType: $Enums.BudgetType
      cashFlowType: $Enums.CashFlowType
      januaryValue: number
      februaryValue: number
      marchValue: number
      aprilValue: number
      mayValue: number
      juneValue: number
      julyValue: number
      augustValue: number
      septemberValue: number
      octoberValue: number
      novemberValue: number
      decemberValue: number
      unitPrice: number
      productionPrice: number
      articleType: $Enums.ArticleType | null
      budgetId: string
    }, ExtArgs["result"]["budgetTypeEntry"]>
    composites: {}
  }

  type BudgetTypeEntryGetPayload<S extends boolean | null | undefined | BudgetTypeEntryDefaultArgs> = $Result.GetResult<Prisma.$BudgetTypeEntryPayload, S>

  type BudgetTypeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetTypeEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetTypeEntryCountAggregateInputType | true
    }

  export interface BudgetTypeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BudgetTypeEntry'], meta: { name: 'BudgetTypeEntry' } }
    /**
     * Find zero or one BudgetTypeEntry that matches the filter.
     * @param {BudgetTypeEntryFindUniqueArgs} args - Arguments to find a BudgetTypeEntry
     * @example
     * // Get one BudgetTypeEntry
     * const budgetTypeEntry = await prisma.budgetTypeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetTypeEntryFindUniqueArgs>(args: SelectSubset<T, BudgetTypeEntryFindUniqueArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BudgetTypeEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetTypeEntryFindUniqueOrThrowArgs} args - Arguments to find a BudgetTypeEntry
     * @example
     * // Get one BudgetTypeEntry
     * const budgetTypeEntry = await prisma.budgetTypeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetTypeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetTypeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BudgetTypeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryFindFirstArgs} args - Arguments to find a BudgetTypeEntry
     * @example
     * // Get one BudgetTypeEntry
     * const budgetTypeEntry = await prisma.budgetTypeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetTypeEntryFindFirstArgs>(args?: SelectSubset<T, BudgetTypeEntryFindFirstArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BudgetTypeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryFindFirstOrThrowArgs} args - Arguments to find a BudgetTypeEntry
     * @example
     * // Get one BudgetTypeEntry
     * const budgetTypeEntry = await prisma.budgetTypeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetTypeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetTypeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BudgetTypeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BudgetTypeEntries
     * const budgetTypeEntries = await prisma.budgetTypeEntry.findMany()
     * 
     * // Get first 10 BudgetTypeEntries
     * const budgetTypeEntries = await prisma.budgetTypeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetTypeEntryWithIdOnly = await prisma.budgetTypeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetTypeEntryFindManyArgs>(args?: SelectSubset<T, BudgetTypeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BudgetTypeEntry.
     * @param {BudgetTypeEntryCreateArgs} args - Arguments to create a BudgetTypeEntry.
     * @example
     * // Create one BudgetTypeEntry
     * const BudgetTypeEntry = await prisma.budgetTypeEntry.create({
     *   data: {
     *     // ... data to create a BudgetTypeEntry
     *   }
     * })
     * 
     */
    create<T extends BudgetTypeEntryCreateArgs>(args: SelectSubset<T, BudgetTypeEntryCreateArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BudgetTypeEntries.
     * @param {BudgetTypeEntryCreateManyArgs} args - Arguments to create many BudgetTypeEntries.
     * @example
     * // Create many BudgetTypeEntries
     * const budgetTypeEntry = await prisma.budgetTypeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetTypeEntryCreateManyArgs>(args?: SelectSubset<T, BudgetTypeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BudgetTypeEntries and returns the data saved in the database.
     * @param {BudgetTypeEntryCreateManyAndReturnArgs} args - Arguments to create many BudgetTypeEntries.
     * @example
     * // Create many BudgetTypeEntries
     * const budgetTypeEntry = await prisma.budgetTypeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BudgetTypeEntries and only return the `id`
     * const budgetTypeEntryWithIdOnly = await prisma.budgetTypeEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetTypeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetTypeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BudgetTypeEntry.
     * @param {BudgetTypeEntryDeleteArgs} args - Arguments to delete one BudgetTypeEntry.
     * @example
     * // Delete one BudgetTypeEntry
     * const BudgetTypeEntry = await prisma.budgetTypeEntry.delete({
     *   where: {
     *     // ... filter to delete one BudgetTypeEntry
     *   }
     * })
     * 
     */
    delete<T extends BudgetTypeEntryDeleteArgs>(args: SelectSubset<T, BudgetTypeEntryDeleteArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BudgetTypeEntry.
     * @param {BudgetTypeEntryUpdateArgs} args - Arguments to update one BudgetTypeEntry.
     * @example
     * // Update one BudgetTypeEntry
     * const budgetTypeEntry = await prisma.budgetTypeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetTypeEntryUpdateArgs>(args: SelectSubset<T, BudgetTypeEntryUpdateArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BudgetTypeEntries.
     * @param {BudgetTypeEntryDeleteManyArgs} args - Arguments to filter BudgetTypeEntries to delete.
     * @example
     * // Delete a few BudgetTypeEntries
     * const { count } = await prisma.budgetTypeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetTypeEntryDeleteManyArgs>(args?: SelectSubset<T, BudgetTypeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetTypeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BudgetTypeEntries
     * const budgetTypeEntry = await prisma.budgetTypeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetTypeEntryUpdateManyArgs>(args: SelectSubset<T, BudgetTypeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetTypeEntries and returns the data updated in the database.
     * @param {BudgetTypeEntryUpdateManyAndReturnArgs} args - Arguments to update many BudgetTypeEntries.
     * @example
     * // Update many BudgetTypeEntries
     * const budgetTypeEntry = await prisma.budgetTypeEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BudgetTypeEntries and only return the `id`
     * const budgetTypeEntryWithIdOnly = await prisma.budgetTypeEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BudgetTypeEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetTypeEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BudgetTypeEntry.
     * @param {BudgetTypeEntryUpsertArgs} args - Arguments to update or create a BudgetTypeEntry.
     * @example
     * // Update or create a BudgetTypeEntry
     * const budgetTypeEntry = await prisma.budgetTypeEntry.upsert({
     *   create: {
     *     // ... data to create a BudgetTypeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BudgetTypeEntry we want to update
     *   }
     * })
     */
    upsert<T extends BudgetTypeEntryUpsertArgs>(args: SelectSubset<T, BudgetTypeEntryUpsertArgs<ExtArgs>>): Prisma__BudgetTypeEntryClient<$Result.GetResult<Prisma.$BudgetTypeEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BudgetTypeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryCountArgs} args - Arguments to filter BudgetTypeEntries to count.
     * @example
     * // Count the number of BudgetTypeEntries
     * const count = await prisma.budgetTypeEntry.count({
     *   where: {
     *     // ... the filter for the BudgetTypeEntries we want to count
     *   }
     * })
    **/
    count<T extends BudgetTypeEntryCountArgs>(
      args?: Subset<T, BudgetTypeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetTypeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BudgetTypeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetTypeEntryAggregateArgs>(args: Subset<T, BudgetTypeEntryAggregateArgs>): Prisma.PrismaPromise<GetBudgetTypeEntryAggregateType<T>>

    /**
     * Group by BudgetTypeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetTypeEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetTypeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetTypeEntryGroupByArgs['orderBy'] }
        : { orderBy?: BudgetTypeEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetTypeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetTypeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BudgetTypeEntry model
   */
  readonly fields: BudgetTypeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BudgetTypeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetTypeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budget<T extends ForecastBudgetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForecastBudgetDefaultArgs<ExtArgs>>): Prisma__ForecastBudgetClient<$Result.GetResult<Prisma.$ForecastBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BudgetTypeEntry model
   */
  interface BudgetTypeEntryFieldRefs {
    readonly id: FieldRef<"BudgetTypeEntry", 'String'>
    readonly title: FieldRef<"BudgetTypeEntry", 'String'>
    readonly budgetType: FieldRef<"BudgetTypeEntry", 'BudgetType'>
    readonly cashFlowType: FieldRef<"BudgetTypeEntry", 'CashFlowType'>
    readonly januaryValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly februaryValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly marchValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly aprilValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly mayValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly juneValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly julyValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly augustValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly septemberValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly octoberValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly novemberValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly decemberValue: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly unitPrice: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly productionPrice: FieldRef<"BudgetTypeEntry", 'Float'>
    readonly articleType: FieldRef<"BudgetTypeEntry", 'ArticleType'>
    readonly budgetId: FieldRef<"BudgetTypeEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BudgetTypeEntry findUnique
   */
  export type BudgetTypeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetTypeEntry to fetch.
     */
    where: BudgetTypeEntryWhereUniqueInput
  }

  /**
   * BudgetTypeEntry findUniqueOrThrow
   */
  export type BudgetTypeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetTypeEntry to fetch.
     */
    where: BudgetTypeEntryWhereUniqueInput
  }

  /**
   * BudgetTypeEntry findFirst
   */
  export type BudgetTypeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetTypeEntry to fetch.
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetTypeEntries to fetch.
     */
    orderBy?: BudgetTypeEntryOrderByWithRelationInput | BudgetTypeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetTypeEntries.
     */
    cursor?: BudgetTypeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetTypeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetTypeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetTypeEntries.
     */
    distinct?: BudgetTypeEntryScalarFieldEnum | BudgetTypeEntryScalarFieldEnum[]
  }

  /**
   * BudgetTypeEntry findFirstOrThrow
   */
  export type BudgetTypeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetTypeEntry to fetch.
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetTypeEntries to fetch.
     */
    orderBy?: BudgetTypeEntryOrderByWithRelationInput | BudgetTypeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetTypeEntries.
     */
    cursor?: BudgetTypeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetTypeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetTypeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetTypeEntries.
     */
    distinct?: BudgetTypeEntryScalarFieldEnum | BudgetTypeEntryScalarFieldEnum[]
  }

  /**
   * BudgetTypeEntry findMany
   */
  export type BudgetTypeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * Filter, which BudgetTypeEntries to fetch.
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetTypeEntries to fetch.
     */
    orderBy?: BudgetTypeEntryOrderByWithRelationInput | BudgetTypeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BudgetTypeEntries.
     */
    cursor?: BudgetTypeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetTypeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetTypeEntries.
     */
    skip?: number
    distinct?: BudgetTypeEntryScalarFieldEnum | BudgetTypeEntryScalarFieldEnum[]
  }

  /**
   * BudgetTypeEntry create
   */
  export type BudgetTypeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a BudgetTypeEntry.
     */
    data: XOR<BudgetTypeEntryCreateInput, BudgetTypeEntryUncheckedCreateInput>
  }

  /**
   * BudgetTypeEntry createMany
   */
  export type BudgetTypeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BudgetTypeEntries.
     */
    data: BudgetTypeEntryCreateManyInput | BudgetTypeEntryCreateManyInput[]
  }

  /**
   * BudgetTypeEntry createManyAndReturn
   */
  export type BudgetTypeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * The data used to create many BudgetTypeEntries.
     */
    data: BudgetTypeEntryCreateManyInput | BudgetTypeEntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BudgetTypeEntry update
   */
  export type BudgetTypeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a BudgetTypeEntry.
     */
    data: XOR<BudgetTypeEntryUpdateInput, BudgetTypeEntryUncheckedUpdateInput>
    /**
     * Choose, which BudgetTypeEntry to update.
     */
    where: BudgetTypeEntryWhereUniqueInput
  }

  /**
   * BudgetTypeEntry updateMany
   */
  export type BudgetTypeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BudgetTypeEntries.
     */
    data: XOR<BudgetTypeEntryUpdateManyMutationInput, BudgetTypeEntryUncheckedUpdateManyInput>
    /**
     * Filter which BudgetTypeEntries to update
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * Limit how many BudgetTypeEntries to update.
     */
    limit?: number
  }

  /**
   * BudgetTypeEntry updateManyAndReturn
   */
  export type BudgetTypeEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * The data used to update BudgetTypeEntries.
     */
    data: XOR<BudgetTypeEntryUpdateManyMutationInput, BudgetTypeEntryUncheckedUpdateManyInput>
    /**
     * Filter which BudgetTypeEntries to update
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * Limit how many BudgetTypeEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BudgetTypeEntry upsert
   */
  export type BudgetTypeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the BudgetTypeEntry to update in case it exists.
     */
    where: BudgetTypeEntryWhereUniqueInput
    /**
     * In case the BudgetTypeEntry found by the `where` argument doesn't exist, create a new BudgetTypeEntry with this data.
     */
    create: XOR<BudgetTypeEntryCreateInput, BudgetTypeEntryUncheckedCreateInput>
    /**
     * In case the BudgetTypeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetTypeEntryUpdateInput, BudgetTypeEntryUncheckedUpdateInput>
  }

  /**
   * BudgetTypeEntry delete
   */
  export type BudgetTypeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
    /**
     * Filter which BudgetTypeEntry to delete.
     */
    where: BudgetTypeEntryWhereUniqueInput
  }

  /**
   * BudgetTypeEntry deleteMany
   */
  export type BudgetTypeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetTypeEntries to delete
     */
    where?: BudgetTypeEntryWhereInput
    /**
     * Limit how many BudgetTypeEntries to delete.
     */
    limit?: number
  }

  /**
   * BudgetTypeEntry without action
   */
  export type BudgetTypeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetTypeEntry
     */
    select?: BudgetTypeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetTypeEntry
     */
    omit?: BudgetTypeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetTypeEntryInclude<ExtArgs> | null
  }


  /**
   * Model ForecastArticle
   */

  export type AggregateForecastArticle = {
    _count: ForecastArticleCountAggregateOutputType | null
    _avg: ForecastArticleAvgAggregateOutputType | null
    _sum: ForecastArticleSumAggregateOutputType | null
    _min: ForecastArticleMinAggregateOutputType | null
    _max: ForecastArticleMaxAggregateOutputType | null
  }

  export type ForecastArticleAvgAggregateOutputType = {
    unitPrice: number | null
    productionPrice: number | null
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
  }

  export type ForecastArticleSumAggregateOutputType = {
    unitPrice: number | null
    productionPrice: number | null
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
  }

  export type ForecastArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    articleType: $Enums.ArticleType | null
    unitPrice: number | null
    productionPrice: number | null
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
    forecastId: string | null
  }

  export type ForecastArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    articleType: $Enums.ArticleType | null
    unitPrice: number | null
    productionPrice: number | null
    januaryValue: number | null
    februaryValue: number | null
    marchValue: number | null
    aprilValue: number | null
    mayValue: number | null
    juneValue: number | null
    julyValue: number | null
    augustValue: number | null
    septemberValue: number | null
    octoberValue: number | null
    novemberValue: number | null
    decemberValue: number | null
    forecastId: string | null
  }

  export type ForecastArticleCountAggregateOutputType = {
    id: number
    title: number
    articleType: number
    unitPrice: number
    productionPrice: number
    januaryValue: number
    februaryValue: number
    marchValue: number
    aprilValue: number
    mayValue: number
    juneValue: number
    julyValue: number
    augustValue: number
    septemberValue: number
    octoberValue: number
    novemberValue: number
    decemberValue: number
    forecastId: number
    _all: number
  }


  export type ForecastArticleAvgAggregateInputType = {
    unitPrice?: true
    productionPrice?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
  }

  export type ForecastArticleSumAggregateInputType = {
    unitPrice?: true
    productionPrice?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
  }

  export type ForecastArticleMinAggregateInputType = {
    id?: true
    title?: true
    articleType?: true
    unitPrice?: true
    productionPrice?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    forecastId?: true
  }

  export type ForecastArticleMaxAggregateInputType = {
    id?: true
    title?: true
    articleType?: true
    unitPrice?: true
    productionPrice?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    forecastId?: true
  }

  export type ForecastArticleCountAggregateInputType = {
    id?: true
    title?: true
    articleType?: true
    unitPrice?: true
    productionPrice?: true
    januaryValue?: true
    februaryValue?: true
    marchValue?: true
    aprilValue?: true
    mayValue?: true
    juneValue?: true
    julyValue?: true
    augustValue?: true
    septemberValue?: true
    octoberValue?: true
    novemberValue?: true
    decemberValue?: true
    forecastId?: true
    _all?: true
  }

  export type ForecastArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastArticle to aggregate.
     */
    where?: ForecastArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastArticles to fetch.
     */
    orderBy?: ForecastArticleOrderByWithRelationInput | ForecastArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForecastArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForecastArticles
    **/
    _count?: true | ForecastArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForecastArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForecastArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForecastArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForecastArticleMaxAggregateInputType
  }

  export type GetForecastArticleAggregateType<T extends ForecastArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateForecastArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForecastArticle[P]>
      : GetScalarType<T[P], AggregateForecastArticle[P]>
  }




  export type ForecastArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastArticleWhereInput
    orderBy?: ForecastArticleOrderByWithAggregationInput | ForecastArticleOrderByWithAggregationInput[]
    by: ForecastArticleScalarFieldEnum[] | ForecastArticleScalarFieldEnum
    having?: ForecastArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForecastArticleCountAggregateInputType | true
    _avg?: ForecastArticleAvgAggregateInputType
    _sum?: ForecastArticleSumAggregateInputType
    _min?: ForecastArticleMinAggregateInputType
    _max?: ForecastArticleMaxAggregateInputType
  }

  export type ForecastArticleGroupByOutputType = {
    id: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue: number
    februaryValue: number
    marchValue: number
    aprilValue: number
    mayValue: number
    juneValue: number
    julyValue: number
    augustValue: number
    septemberValue: number
    octoberValue: number
    novemberValue: number
    decemberValue: number
    forecastId: string
    _count: ForecastArticleCountAggregateOutputType | null
    _avg: ForecastArticleAvgAggregateOutputType | null
    _sum: ForecastArticleSumAggregateOutputType | null
    _min: ForecastArticleMinAggregateOutputType | null
    _max: ForecastArticleMaxAggregateOutputType | null
  }

  type GetForecastArticleGroupByPayload<T extends ForecastArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForecastArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForecastArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForecastArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ForecastArticleGroupByOutputType[P]>
        }
      >
    >


  export type ForecastArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    articleType?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    forecastId?: boolean
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastArticle"]>

  export type ForecastArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    articleType?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    forecastId?: boolean
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastArticle"]>

  export type ForecastArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    articleType?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    forecastId?: boolean
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastArticle"]>

  export type ForecastArticleSelectScalar = {
    id?: boolean
    title?: boolean
    articleType?: boolean
    unitPrice?: boolean
    productionPrice?: boolean
    januaryValue?: boolean
    februaryValue?: boolean
    marchValue?: boolean
    aprilValue?: boolean
    mayValue?: boolean
    juneValue?: boolean
    julyValue?: boolean
    augustValue?: boolean
    septemberValue?: boolean
    octoberValue?: boolean
    novemberValue?: boolean
    decemberValue?: boolean
    forecastId?: boolean
  }

  export type ForecastArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "articleType" | "unitPrice" | "productionPrice" | "januaryValue" | "februaryValue" | "marchValue" | "aprilValue" | "mayValue" | "juneValue" | "julyValue" | "augustValue" | "septemberValue" | "octoberValue" | "novemberValue" | "decemberValue" | "forecastId", ExtArgs["result"]["forecastArticle"]>
  export type ForecastArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }
  export type ForecastArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }
  export type ForecastArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forecast?: boolean | ForecastDefaultArgs<ExtArgs>
  }

  export type $ForecastArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForecastArticle"
    objects: {
      forecast: Prisma.$ForecastPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      articleType: $Enums.ArticleType
      unitPrice: number
      productionPrice: number
      januaryValue: number
      februaryValue: number
      marchValue: number
      aprilValue: number
      mayValue: number
      juneValue: number
      julyValue: number
      augustValue: number
      septemberValue: number
      octoberValue: number
      novemberValue: number
      decemberValue: number
      forecastId: string
    }, ExtArgs["result"]["forecastArticle"]>
    composites: {}
  }

  type ForecastArticleGetPayload<S extends boolean | null | undefined | ForecastArticleDefaultArgs> = $Result.GetResult<Prisma.$ForecastArticlePayload, S>

  type ForecastArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForecastArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForecastArticleCountAggregateInputType | true
    }

  export interface ForecastArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForecastArticle'], meta: { name: 'ForecastArticle' } }
    /**
     * Find zero or one ForecastArticle that matches the filter.
     * @param {ForecastArticleFindUniqueArgs} args - Arguments to find a ForecastArticle
     * @example
     * // Get one ForecastArticle
     * const forecastArticle = await prisma.forecastArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForecastArticleFindUniqueArgs>(args: SelectSubset<T, ForecastArticleFindUniqueArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForecastArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForecastArticleFindUniqueOrThrowArgs} args - Arguments to find a ForecastArticle
     * @example
     * // Get one ForecastArticle
     * const forecastArticle = await prisma.forecastArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForecastArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ForecastArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleFindFirstArgs} args - Arguments to find a ForecastArticle
     * @example
     * // Get one ForecastArticle
     * const forecastArticle = await prisma.forecastArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForecastArticleFindFirstArgs>(args?: SelectSubset<T, ForecastArticleFindFirstArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleFindFirstOrThrowArgs} args - Arguments to find a ForecastArticle
     * @example
     * // Get one ForecastArticle
     * const forecastArticle = await prisma.forecastArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForecastArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ForecastArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForecastArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForecastArticles
     * const forecastArticles = await prisma.forecastArticle.findMany()
     * 
     * // Get first 10 ForecastArticles
     * const forecastArticles = await prisma.forecastArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forecastArticleWithIdOnly = await prisma.forecastArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForecastArticleFindManyArgs>(args?: SelectSubset<T, ForecastArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForecastArticle.
     * @param {ForecastArticleCreateArgs} args - Arguments to create a ForecastArticle.
     * @example
     * // Create one ForecastArticle
     * const ForecastArticle = await prisma.forecastArticle.create({
     *   data: {
     *     // ... data to create a ForecastArticle
     *   }
     * })
     * 
     */
    create<T extends ForecastArticleCreateArgs>(args: SelectSubset<T, ForecastArticleCreateArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForecastArticles.
     * @param {ForecastArticleCreateManyArgs} args - Arguments to create many ForecastArticles.
     * @example
     * // Create many ForecastArticles
     * const forecastArticle = await prisma.forecastArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForecastArticleCreateManyArgs>(args?: SelectSubset<T, ForecastArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForecastArticles and returns the data saved in the database.
     * @param {ForecastArticleCreateManyAndReturnArgs} args - Arguments to create many ForecastArticles.
     * @example
     * // Create many ForecastArticles
     * const forecastArticle = await prisma.forecastArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForecastArticles and only return the `id`
     * const forecastArticleWithIdOnly = await prisma.forecastArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForecastArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ForecastArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForecastArticle.
     * @param {ForecastArticleDeleteArgs} args - Arguments to delete one ForecastArticle.
     * @example
     * // Delete one ForecastArticle
     * const ForecastArticle = await prisma.forecastArticle.delete({
     *   where: {
     *     // ... filter to delete one ForecastArticle
     *   }
     * })
     * 
     */
    delete<T extends ForecastArticleDeleteArgs>(args: SelectSubset<T, ForecastArticleDeleteArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForecastArticle.
     * @param {ForecastArticleUpdateArgs} args - Arguments to update one ForecastArticle.
     * @example
     * // Update one ForecastArticle
     * const forecastArticle = await prisma.forecastArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForecastArticleUpdateArgs>(args: SelectSubset<T, ForecastArticleUpdateArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForecastArticles.
     * @param {ForecastArticleDeleteManyArgs} args - Arguments to filter ForecastArticles to delete.
     * @example
     * // Delete a few ForecastArticles
     * const { count } = await prisma.forecastArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForecastArticleDeleteManyArgs>(args?: SelectSubset<T, ForecastArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForecastArticles
     * const forecastArticle = await prisma.forecastArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForecastArticleUpdateManyArgs>(args: SelectSubset<T, ForecastArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastArticles and returns the data updated in the database.
     * @param {ForecastArticleUpdateManyAndReturnArgs} args - Arguments to update many ForecastArticles.
     * @example
     * // Update many ForecastArticles
     * const forecastArticle = await prisma.forecastArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForecastArticles and only return the `id`
     * const forecastArticleWithIdOnly = await prisma.forecastArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForecastArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ForecastArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForecastArticle.
     * @param {ForecastArticleUpsertArgs} args - Arguments to update or create a ForecastArticle.
     * @example
     * // Update or create a ForecastArticle
     * const forecastArticle = await prisma.forecastArticle.upsert({
     *   create: {
     *     // ... data to create a ForecastArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForecastArticle we want to update
     *   }
     * })
     */
    upsert<T extends ForecastArticleUpsertArgs>(args: SelectSubset<T, ForecastArticleUpsertArgs<ExtArgs>>): Prisma__ForecastArticleClient<$Result.GetResult<Prisma.$ForecastArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForecastArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleCountArgs} args - Arguments to filter ForecastArticles to count.
     * @example
     * // Count the number of ForecastArticles
     * const count = await prisma.forecastArticle.count({
     *   where: {
     *     // ... the filter for the ForecastArticles we want to count
     *   }
     * })
    **/
    count<T extends ForecastArticleCountArgs>(
      args?: Subset<T, ForecastArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForecastArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForecastArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForecastArticleAggregateArgs>(args: Subset<T, ForecastArticleAggregateArgs>): Prisma.PrismaPromise<GetForecastArticleAggregateType<T>>

    /**
     * Group by ForecastArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForecastArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForecastArticleGroupByArgs['orderBy'] }
        : { orderBy?: ForecastArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForecastArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForecastArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForecastArticle model
   */
  readonly fields: ForecastArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForecastArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForecastArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forecast<T extends ForecastDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForecastDefaultArgs<ExtArgs>>): Prisma__ForecastClient<$Result.GetResult<Prisma.$ForecastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForecastArticle model
   */
  interface ForecastArticleFieldRefs {
    readonly id: FieldRef<"ForecastArticle", 'String'>
    readonly title: FieldRef<"ForecastArticle", 'String'>
    readonly articleType: FieldRef<"ForecastArticle", 'ArticleType'>
    readonly unitPrice: FieldRef<"ForecastArticle", 'Float'>
    readonly productionPrice: FieldRef<"ForecastArticle", 'Float'>
    readonly januaryValue: FieldRef<"ForecastArticle", 'Float'>
    readonly februaryValue: FieldRef<"ForecastArticle", 'Float'>
    readonly marchValue: FieldRef<"ForecastArticle", 'Float'>
    readonly aprilValue: FieldRef<"ForecastArticle", 'Float'>
    readonly mayValue: FieldRef<"ForecastArticle", 'Float'>
    readonly juneValue: FieldRef<"ForecastArticle", 'Float'>
    readonly julyValue: FieldRef<"ForecastArticle", 'Float'>
    readonly augustValue: FieldRef<"ForecastArticle", 'Float'>
    readonly septemberValue: FieldRef<"ForecastArticle", 'Float'>
    readonly octoberValue: FieldRef<"ForecastArticle", 'Float'>
    readonly novemberValue: FieldRef<"ForecastArticle", 'Float'>
    readonly decemberValue: FieldRef<"ForecastArticle", 'Float'>
    readonly forecastId: FieldRef<"ForecastArticle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ForecastArticle findUnique
   */
  export type ForecastArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * Filter, which ForecastArticle to fetch.
     */
    where: ForecastArticleWhereUniqueInput
  }

  /**
   * ForecastArticle findUniqueOrThrow
   */
  export type ForecastArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * Filter, which ForecastArticle to fetch.
     */
    where: ForecastArticleWhereUniqueInput
  }

  /**
   * ForecastArticle findFirst
   */
  export type ForecastArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * Filter, which ForecastArticle to fetch.
     */
    where?: ForecastArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastArticles to fetch.
     */
    orderBy?: ForecastArticleOrderByWithRelationInput | ForecastArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastArticles.
     */
    cursor?: ForecastArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastArticles.
     */
    distinct?: ForecastArticleScalarFieldEnum | ForecastArticleScalarFieldEnum[]
  }

  /**
   * ForecastArticle findFirstOrThrow
   */
  export type ForecastArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * Filter, which ForecastArticle to fetch.
     */
    where?: ForecastArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastArticles to fetch.
     */
    orderBy?: ForecastArticleOrderByWithRelationInput | ForecastArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastArticles.
     */
    cursor?: ForecastArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastArticles.
     */
    distinct?: ForecastArticleScalarFieldEnum | ForecastArticleScalarFieldEnum[]
  }

  /**
   * ForecastArticle findMany
   */
  export type ForecastArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * Filter, which ForecastArticles to fetch.
     */
    where?: ForecastArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastArticles to fetch.
     */
    orderBy?: ForecastArticleOrderByWithRelationInput | ForecastArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForecastArticles.
     */
    cursor?: ForecastArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastArticles.
     */
    skip?: number
    distinct?: ForecastArticleScalarFieldEnum | ForecastArticleScalarFieldEnum[]
  }

  /**
   * ForecastArticle create
   */
  export type ForecastArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a ForecastArticle.
     */
    data: XOR<ForecastArticleCreateInput, ForecastArticleUncheckedCreateInput>
  }

  /**
   * ForecastArticle createMany
   */
  export type ForecastArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForecastArticles.
     */
    data: ForecastArticleCreateManyInput | ForecastArticleCreateManyInput[]
  }

  /**
   * ForecastArticle createManyAndReturn
   */
  export type ForecastArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * The data used to create many ForecastArticles.
     */
    data: ForecastArticleCreateManyInput | ForecastArticleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastArticle update
   */
  export type ForecastArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a ForecastArticle.
     */
    data: XOR<ForecastArticleUpdateInput, ForecastArticleUncheckedUpdateInput>
    /**
     * Choose, which ForecastArticle to update.
     */
    where: ForecastArticleWhereUniqueInput
  }

  /**
   * ForecastArticle updateMany
   */
  export type ForecastArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForecastArticles.
     */
    data: XOR<ForecastArticleUpdateManyMutationInput, ForecastArticleUncheckedUpdateManyInput>
    /**
     * Filter which ForecastArticles to update
     */
    where?: ForecastArticleWhereInput
    /**
     * Limit how many ForecastArticles to update.
     */
    limit?: number
  }

  /**
   * ForecastArticle updateManyAndReturn
   */
  export type ForecastArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * The data used to update ForecastArticles.
     */
    data: XOR<ForecastArticleUpdateManyMutationInput, ForecastArticleUncheckedUpdateManyInput>
    /**
     * Filter which ForecastArticles to update
     */
    where?: ForecastArticleWhereInput
    /**
     * Limit how many ForecastArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastArticle upsert
   */
  export type ForecastArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the ForecastArticle to update in case it exists.
     */
    where: ForecastArticleWhereUniqueInput
    /**
     * In case the ForecastArticle found by the `where` argument doesn't exist, create a new ForecastArticle with this data.
     */
    create: XOR<ForecastArticleCreateInput, ForecastArticleUncheckedCreateInput>
    /**
     * In case the ForecastArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForecastArticleUpdateInput, ForecastArticleUncheckedUpdateInput>
  }

  /**
   * ForecastArticle delete
   */
  export type ForecastArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
    /**
     * Filter which ForecastArticle to delete.
     */
    where: ForecastArticleWhereUniqueInput
  }

  /**
   * ForecastArticle deleteMany
   */
  export type ForecastArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastArticles to delete
     */
    where?: ForecastArticleWhereInput
    /**
     * Limit how many ForecastArticles to delete.
     */
    limit?: number
  }

  /**
   * ForecastArticle without action
   */
  export type ForecastArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastArticle
     */
    select?: ForecastArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastArticle
     */
    omit?: ForecastArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastArticleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId',
    lastModified: 'lastModified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ForecastScalarFieldEnum: {
    id: 'id',
    startYear: 'startYear',
    projectId: 'projectId'
  };

  export type ForecastScalarFieldEnum = (typeof ForecastScalarFieldEnum)[keyof typeof ForecastScalarFieldEnum]


  export const ForecastBudgetScalarFieldEnum: {
    id: 'id',
    budgetType: 'budgetType',
    forecastId: 'forecastId'
  };

  export type ForecastBudgetScalarFieldEnum = (typeof ForecastBudgetScalarFieldEnum)[keyof typeof ForecastBudgetScalarFieldEnum]


  export const BudgetTypeEntryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    budgetType: 'budgetType',
    cashFlowType: 'cashFlowType',
    januaryValue: 'januaryValue',
    februaryValue: 'februaryValue',
    marchValue: 'marchValue',
    aprilValue: 'aprilValue',
    mayValue: 'mayValue',
    juneValue: 'juneValue',
    julyValue: 'julyValue',
    augustValue: 'augustValue',
    septemberValue: 'septemberValue',
    octoberValue: 'octoberValue',
    novemberValue: 'novemberValue',
    decemberValue: 'decemberValue',
    unitPrice: 'unitPrice',
    productionPrice: 'productionPrice',
    articleType: 'articleType',
    budgetId: 'budgetId'
  };

  export type BudgetTypeEntryScalarFieldEnum = (typeof BudgetTypeEntryScalarFieldEnum)[keyof typeof BudgetTypeEntryScalarFieldEnum]


  export const ForecastArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    articleType: 'articleType',
    unitPrice: 'unitPrice',
    productionPrice: 'productionPrice',
    januaryValue: 'januaryValue',
    februaryValue: 'februaryValue',
    marchValue: 'marchValue',
    aprilValue: 'aprilValue',
    mayValue: 'mayValue',
    juneValue: 'juneValue',
    julyValue: 'julyValue',
    augustValue: 'augustValue',
    septemberValue: 'septemberValue',
    octoberValue: 'octoberValue',
    novemberValue: 'novemberValue',
    decemberValue: 'decemberValue',
    forecastId: 'forecastId'
  };

  export type ForecastArticleScalarFieldEnum = (typeof ForecastArticleScalarFieldEnum)[keyof typeof ForecastArticleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BudgetType'
   */
  export type EnumBudgetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetType'>
    


  /**
   * Reference to a field of type 'CashFlowType'
   */
  export type EnumCashFlowTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashFlowType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ArticleType'
   */
  export type EnumArticleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleType'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    userId?: StringFilter<"Project"> | string
    lastModified?: DateTimeFilter<"Project"> | Date | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    forecasts?: ForecastListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    lastModified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    forecasts?: ForecastOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    userId?: StringFilter<"Project"> | string
    lastModified?: DateTimeFilter<"Project"> | Date | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    forecasts?: ForecastListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    lastModified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Project"> | string
    lastModified?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ForecastWhereInput = {
    AND?: ForecastWhereInput | ForecastWhereInput[]
    OR?: ForecastWhereInput[]
    NOT?: ForecastWhereInput | ForecastWhereInput[]
    id?: StringFilter<"Forecast"> | string
    startYear?: IntFilter<"Forecast"> | number
    projectId?: StringFilter<"Forecast"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    forecastBudgets?: ForecastBudgetListRelationFilter
    forecastArticles?: ForecastArticleListRelationFilter
  }

  export type ForecastOrderByWithRelationInput = {
    id?: SortOrder
    startYear?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    forecastBudgets?: ForecastBudgetOrderByRelationAggregateInput
    forecastArticles?: ForecastArticleOrderByRelationAggregateInput
  }

  export type ForecastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForecastWhereInput | ForecastWhereInput[]
    OR?: ForecastWhereInput[]
    NOT?: ForecastWhereInput | ForecastWhereInput[]
    startYear?: IntFilter<"Forecast"> | number
    projectId?: StringFilter<"Forecast"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    forecastBudgets?: ForecastBudgetListRelationFilter
    forecastArticles?: ForecastArticleListRelationFilter
  }, "id">

  export type ForecastOrderByWithAggregationInput = {
    id?: SortOrder
    startYear?: SortOrder
    projectId?: SortOrder
    _count?: ForecastCountOrderByAggregateInput
    _avg?: ForecastAvgOrderByAggregateInput
    _max?: ForecastMaxOrderByAggregateInput
    _min?: ForecastMinOrderByAggregateInput
    _sum?: ForecastSumOrderByAggregateInput
  }

  export type ForecastScalarWhereWithAggregatesInput = {
    AND?: ForecastScalarWhereWithAggregatesInput | ForecastScalarWhereWithAggregatesInput[]
    OR?: ForecastScalarWhereWithAggregatesInput[]
    NOT?: ForecastScalarWhereWithAggregatesInput | ForecastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Forecast"> | string
    startYear?: IntWithAggregatesFilter<"Forecast"> | number
    projectId?: StringWithAggregatesFilter<"Forecast"> | string
  }

  export type ForecastBudgetWhereInput = {
    AND?: ForecastBudgetWhereInput | ForecastBudgetWhereInput[]
    OR?: ForecastBudgetWhereInput[]
    NOT?: ForecastBudgetWhereInput | ForecastBudgetWhereInput[]
    id?: StringFilter<"ForecastBudget"> | string
    budgetType?: EnumBudgetTypeFilter<"ForecastBudget"> | $Enums.BudgetType
    forecastId?: StringFilter<"ForecastBudget"> | string
    forecast?: XOR<ForecastScalarRelationFilter, ForecastWhereInput>
    entries?: BudgetTypeEntryListRelationFilter
  }

  export type ForecastBudgetOrderByWithRelationInput = {
    id?: SortOrder
    budgetType?: SortOrder
    forecastId?: SortOrder
    forecast?: ForecastOrderByWithRelationInput
    entries?: BudgetTypeEntryOrderByRelationAggregateInput
  }

  export type ForecastBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForecastBudgetWhereInput | ForecastBudgetWhereInput[]
    OR?: ForecastBudgetWhereInput[]
    NOT?: ForecastBudgetWhereInput | ForecastBudgetWhereInput[]
    budgetType?: EnumBudgetTypeFilter<"ForecastBudget"> | $Enums.BudgetType
    forecastId?: StringFilter<"ForecastBudget"> | string
    forecast?: XOR<ForecastScalarRelationFilter, ForecastWhereInput>
    entries?: BudgetTypeEntryListRelationFilter
  }, "id">

  export type ForecastBudgetOrderByWithAggregationInput = {
    id?: SortOrder
    budgetType?: SortOrder
    forecastId?: SortOrder
    _count?: ForecastBudgetCountOrderByAggregateInput
    _max?: ForecastBudgetMaxOrderByAggregateInput
    _min?: ForecastBudgetMinOrderByAggregateInput
  }

  export type ForecastBudgetScalarWhereWithAggregatesInput = {
    AND?: ForecastBudgetScalarWhereWithAggregatesInput | ForecastBudgetScalarWhereWithAggregatesInput[]
    OR?: ForecastBudgetScalarWhereWithAggregatesInput[]
    NOT?: ForecastBudgetScalarWhereWithAggregatesInput | ForecastBudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForecastBudget"> | string
    budgetType?: EnumBudgetTypeWithAggregatesFilter<"ForecastBudget"> | $Enums.BudgetType
    forecastId?: StringWithAggregatesFilter<"ForecastBudget"> | string
  }

  export type BudgetTypeEntryWhereInput = {
    AND?: BudgetTypeEntryWhereInput | BudgetTypeEntryWhereInput[]
    OR?: BudgetTypeEntryWhereInput[]
    NOT?: BudgetTypeEntryWhereInput | BudgetTypeEntryWhereInput[]
    id?: StringFilter<"BudgetTypeEntry"> | string
    title?: StringFilter<"BudgetTypeEntry"> | string
    budgetType?: EnumBudgetTypeFilter<"BudgetTypeEntry"> | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFilter<"BudgetTypeEntry"> | $Enums.CashFlowType
    januaryValue?: FloatFilter<"BudgetTypeEntry"> | number
    februaryValue?: FloatFilter<"BudgetTypeEntry"> | number
    marchValue?: FloatFilter<"BudgetTypeEntry"> | number
    aprilValue?: FloatFilter<"BudgetTypeEntry"> | number
    mayValue?: FloatFilter<"BudgetTypeEntry"> | number
    juneValue?: FloatFilter<"BudgetTypeEntry"> | number
    julyValue?: FloatFilter<"BudgetTypeEntry"> | number
    augustValue?: FloatFilter<"BudgetTypeEntry"> | number
    septemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    octoberValue?: FloatFilter<"BudgetTypeEntry"> | number
    novemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    decemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    unitPrice?: FloatFilter<"BudgetTypeEntry"> | number
    productionPrice?: FloatFilter<"BudgetTypeEntry"> | number
    articleType?: EnumArticleTypeNullableFilter<"BudgetTypeEntry"> | $Enums.ArticleType | null
    budgetId?: StringFilter<"BudgetTypeEntry"> | string
    budget?: XOR<ForecastBudgetScalarRelationFilter, ForecastBudgetWhereInput>
  }

  export type BudgetTypeEntryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    budgetType?: SortOrder
    cashFlowType?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    articleType?: SortOrderInput | SortOrder
    budgetId?: SortOrder
    budget?: ForecastBudgetOrderByWithRelationInput
  }

  export type BudgetTypeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetTypeEntryWhereInput | BudgetTypeEntryWhereInput[]
    OR?: BudgetTypeEntryWhereInput[]
    NOT?: BudgetTypeEntryWhereInput | BudgetTypeEntryWhereInput[]
    title?: StringFilter<"BudgetTypeEntry"> | string
    budgetType?: EnumBudgetTypeFilter<"BudgetTypeEntry"> | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFilter<"BudgetTypeEntry"> | $Enums.CashFlowType
    januaryValue?: FloatFilter<"BudgetTypeEntry"> | number
    februaryValue?: FloatFilter<"BudgetTypeEntry"> | number
    marchValue?: FloatFilter<"BudgetTypeEntry"> | number
    aprilValue?: FloatFilter<"BudgetTypeEntry"> | number
    mayValue?: FloatFilter<"BudgetTypeEntry"> | number
    juneValue?: FloatFilter<"BudgetTypeEntry"> | number
    julyValue?: FloatFilter<"BudgetTypeEntry"> | number
    augustValue?: FloatFilter<"BudgetTypeEntry"> | number
    septemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    octoberValue?: FloatFilter<"BudgetTypeEntry"> | number
    novemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    decemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    unitPrice?: FloatFilter<"BudgetTypeEntry"> | number
    productionPrice?: FloatFilter<"BudgetTypeEntry"> | number
    articleType?: EnumArticleTypeNullableFilter<"BudgetTypeEntry"> | $Enums.ArticleType | null
    budgetId?: StringFilter<"BudgetTypeEntry"> | string
    budget?: XOR<ForecastBudgetScalarRelationFilter, ForecastBudgetWhereInput>
  }, "id">

  export type BudgetTypeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    budgetType?: SortOrder
    cashFlowType?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    articleType?: SortOrderInput | SortOrder
    budgetId?: SortOrder
    _count?: BudgetTypeEntryCountOrderByAggregateInput
    _avg?: BudgetTypeEntryAvgOrderByAggregateInput
    _max?: BudgetTypeEntryMaxOrderByAggregateInput
    _min?: BudgetTypeEntryMinOrderByAggregateInput
    _sum?: BudgetTypeEntrySumOrderByAggregateInput
  }

  export type BudgetTypeEntryScalarWhereWithAggregatesInput = {
    AND?: BudgetTypeEntryScalarWhereWithAggregatesInput | BudgetTypeEntryScalarWhereWithAggregatesInput[]
    OR?: BudgetTypeEntryScalarWhereWithAggregatesInput[]
    NOT?: BudgetTypeEntryScalarWhereWithAggregatesInput | BudgetTypeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BudgetTypeEntry"> | string
    title?: StringWithAggregatesFilter<"BudgetTypeEntry"> | string
    budgetType?: EnumBudgetTypeWithAggregatesFilter<"BudgetTypeEntry"> | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeWithAggregatesFilter<"BudgetTypeEntry"> | $Enums.CashFlowType
    januaryValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    februaryValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    marchValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    aprilValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    mayValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    juneValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    julyValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    augustValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    septemberValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    octoberValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    novemberValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    decemberValue?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    unitPrice?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    productionPrice?: FloatWithAggregatesFilter<"BudgetTypeEntry"> | number
    articleType?: EnumArticleTypeNullableWithAggregatesFilter<"BudgetTypeEntry"> | $Enums.ArticleType | null
    budgetId?: StringWithAggregatesFilter<"BudgetTypeEntry"> | string
  }

  export type ForecastArticleWhereInput = {
    AND?: ForecastArticleWhereInput | ForecastArticleWhereInput[]
    OR?: ForecastArticleWhereInput[]
    NOT?: ForecastArticleWhereInput | ForecastArticleWhereInput[]
    id?: StringFilter<"ForecastArticle"> | string
    title?: StringFilter<"ForecastArticle"> | string
    articleType?: EnumArticleTypeFilter<"ForecastArticle"> | $Enums.ArticleType
    unitPrice?: FloatFilter<"ForecastArticle"> | number
    productionPrice?: FloatFilter<"ForecastArticle"> | number
    januaryValue?: FloatFilter<"ForecastArticle"> | number
    februaryValue?: FloatFilter<"ForecastArticle"> | number
    marchValue?: FloatFilter<"ForecastArticle"> | number
    aprilValue?: FloatFilter<"ForecastArticle"> | number
    mayValue?: FloatFilter<"ForecastArticle"> | number
    juneValue?: FloatFilter<"ForecastArticle"> | number
    julyValue?: FloatFilter<"ForecastArticle"> | number
    augustValue?: FloatFilter<"ForecastArticle"> | number
    septemberValue?: FloatFilter<"ForecastArticle"> | number
    octoberValue?: FloatFilter<"ForecastArticle"> | number
    novemberValue?: FloatFilter<"ForecastArticle"> | number
    decemberValue?: FloatFilter<"ForecastArticle"> | number
    forecastId?: StringFilter<"ForecastArticle"> | string
    forecast?: XOR<ForecastScalarRelationFilter, ForecastWhereInput>
  }

  export type ForecastArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    articleType?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    forecastId?: SortOrder
    forecast?: ForecastOrderByWithRelationInput
  }

  export type ForecastArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForecastArticleWhereInput | ForecastArticleWhereInput[]
    OR?: ForecastArticleWhereInput[]
    NOT?: ForecastArticleWhereInput | ForecastArticleWhereInput[]
    title?: StringFilter<"ForecastArticle"> | string
    articleType?: EnumArticleTypeFilter<"ForecastArticle"> | $Enums.ArticleType
    unitPrice?: FloatFilter<"ForecastArticle"> | number
    productionPrice?: FloatFilter<"ForecastArticle"> | number
    januaryValue?: FloatFilter<"ForecastArticle"> | number
    februaryValue?: FloatFilter<"ForecastArticle"> | number
    marchValue?: FloatFilter<"ForecastArticle"> | number
    aprilValue?: FloatFilter<"ForecastArticle"> | number
    mayValue?: FloatFilter<"ForecastArticle"> | number
    juneValue?: FloatFilter<"ForecastArticle"> | number
    julyValue?: FloatFilter<"ForecastArticle"> | number
    augustValue?: FloatFilter<"ForecastArticle"> | number
    septemberValue?: FloatFilter<"ForecastArticle"> | number
    octoberValue?: FloatFilter<"ForecastArticle"> | number
    novemberValue?: FloatFilter<"ForecastArticle"> | number
    decemberValue?: FloatFilter<"ForecastArticle"> | number
    forecastId?: StringFilter<"ForecastArticle"> | string
    forecast?: XOR<ForecastScalarRelationFilter, ForecastWhereInput>
  }, "id">

  export type ForecastArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    articleType?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    forecastId?: SortOrder
    _count?: ForecastArticleCountOrderByAggregateInput
    _avg?: ForecastArticleAvgOrderByAggregateInput
    _max?: ForecastArticleMaxOrderByAggregateInput
    _min?: ForecastArticleMinOrderByAggregateInput
    _sum?: ForecastArticleSumOrderByAggregateInput
  }

  export type ForecastArticleScalarWhereWithAggregatesInput = {
    AND?: ForecastArticleScalarWhereWithAggregatesInput | ForecastArticleScalarWhereWithAggregatesInput[]
    OR?: ForecastArticleScalarWhereWithAggregatesInput[]
    NOT?: ForecastArticleScalarWhereWithAggregatesInput | ForecastArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForecastArticle"> | string
    title?: StringWithAggregatesFilter<"ForecastArticle"> | string
    articleType?: EnumArticleTypeWithAggregatesFilter<"ForecastArticle"> | $Enums.ArticleType
    unitPrice?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    productionPrice?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    januaryValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    februaryValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    marchValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    aprilValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    mayValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    juneValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    julyValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    augustValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    septemberValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    octoberValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    novemberValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    decemberValue?: FloatWithAggregatesFilter<"ForecastArticle"> | number
    forecastId?: StringWithAggregatesFilter<"ForecastArticle"> | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    forecasts?: ForecastCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    forecasts?: ForecastUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    forecasts?: ForecastUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forecasts?: ForecastUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastCreateInput = {
    id?: string
    startYear: number
    project: ProjectCreateNestedOneWithoutForecastsInput
    forecastBudgets?: ForecastBudgetCreateNestedManyWithoutForecastInput
    forecastArticles?: ForecastArticleCreateNestedManyWithoutForecastInput
  }

  export type ForecastUncheckedCreateInput = {
    id?: string
    startYear: number
    projectId: string
    forecastBudgets?: ForecastBudgetUncheckedCreateNestedManyWithoutForecastInput
    forecastArticles?: ForecastArticleUncheckedCreateNestedManyWithoutForecastInput
  }

  export type ForecastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutForecastsNestedInput
    forecastBudgets?: ForecastBudgetUpdateManyWithoutForecastNestedInput
    forecastArticles?: ForecastArticleUpdateManyWithoutForecastNestedInput
  }

  export type ForecastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    forecastBudgets?: ForecastBudgetUncheckedUpdateManyWithoutForecastNestedInput
    forecastArticles?: ForecastArticleUncheckedUpdateManyWithoutForecastNestedInput
  }

  export type ForecastCreateManyInput = {
    id?: string
    startYear: number
    projectId: string
  }

  export type ForecastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
  }

  export type ForecastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ForecastBudgetCreateInput = {
    id?: string
    budgetType: $Enums.BudgetType
    forecast: ForecastCreateNestedOneWithoutForecastBudgetsInput
    entries?: BudgetTypeEntryCreateNestedManyWithoutBudgetInput
  }

  export type ForecastBudgetUncheckedCreateInput = {
    id?: string
    budgetType: $Enums.BudgetType
    forecastId: string
    entries?: BudgetTypeEntryUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type ForecastBudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    forecast?: ForecastUpdateOneRequiredWithoutForecastBudgetsNestedInput
    entries?: BudgetTypeEntryUpdateManyWithoutBudgetNestedInput
  }

  export type ForecastBudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    forecastId?: StringFieldUpdateOperationsInput | string
    entries?: BudgetTypeEntryUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type ForecastBudgetCreateManyInput = {
    id?: string
    budgetType: $Enums.BudgetType
    forecastId: string
  }

  export type ForecastBudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
  }

  export type ForecastBudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    forecastId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetTypeEntryCreateInput = {
    id?: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    unitPrice?: number
    productionPrice?: number
    articleType?: $Enums.ArticleType | null
    budget: ForecastBudgetCreateNestedOneWithoutEntriesInput
  }

  export type BudgetTypeEntryUncheckedCreateInput = {
    id?: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    unitPrice?: number
    productionPrice?: number
    articleType?: $Enums.ArticleType | null
    budgetId: string
  }

  export type BudgetTypeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
    budget?: ForecastBudgetUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type BudgetTypeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
    budgetId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetTypeEntryCreateManyInput = {
    id?: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    unitPrice?: number
    productionPrice?: number
    articleType?: $Enums.ArticleType | null
    budgetId: string
  }

  export type BudgetTypeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
  }

  export type BudgetTypeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
    budgetId?: StringFieldUpdateOperationsInput | string
  }

  export type ForecastArticleCreateInput = {
    id?: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    forecast: ForecastCreateNestedOneWithoutForecastArticlesInput
  }

  export type ForecastArticleUncheckedCreateInput = {
    id?: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    forecastId: string
  }

  export type ForecastArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    forecast?: ForecastUpdateOneRequiredWithoutForecastArticlesNestedInput
  }

  export type ForecastArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    forecastId?: StringFieldUpdateOperationsInput | string
  }

  export type ForecastArticleCreateManyInput = {
    id?: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    forecastId: string
  }

  export type ForecastArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
  }

  export type ForecastArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    forecastId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ForecastListRelationFilter = {
    every?: ForecastWhereInput
    some?: ForecastWhereInput
    none?: ForecastWhereInput
  }

  export type ForecastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    lastModified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    lastModified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    lastModified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ForecastBudgetListRelationFilter = {
    every?: ForecastBudgetWhereInput
    some?: ForecastBudgetWhereInput
    none?: ForecastBudgetWhereInput
  }

  export type ForecastArticleListRelationFilter = {
    every?: ForecastArticleWhereInput
    some?: ForecastArticleWhereInput
    none?: ForecastArticleWhereInput
  }

  export type ForecastBudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForecastArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForecastCountOrderByAggregateInput = {
    id?: SortOrder
    startYear?: SortOrder
    projectId?: SortOrder
  }

  export type ForecastAvgOrderByAggregateInput = {
    startYear?: SortOrder
  }

  export type ForecastMaxOrderByAggregateInput = {
    id?: SortOrder
    startYear?: SortOrder
    projectId?: SortOrder
  }

  export type ForecastMinOrderByAggregateInput = {
    id?: SortOrder
    startYear?: SortOrder
    projectId?: SortOrder
  }

  export type ForecastSumOrderByAggregateInput = {
    startYear?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBudgetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetType | EnumBudgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetType[]
    notIn?: $Enums.BudgetType[]
    not?: NestedEnumBudgetTypeFilter<$PrismaModel> | $Enums.BudgetType
  }

  export type ForecastScalarRelationFilter = {
    is?: ForecastWhereInput
    isNot?: ForecastWhereInput
  }

  export type BudgetTypeEntryListRelationFilter = {
    every?: BudgetTypeEntryWhereInput
    some?: BudgetTypeEntryWhereInput
    none?: BudgetTypeEntryWhereInput
  }

  export type BudgetTypeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForecastBudgetCountOrderByAggregateInput = {
    id?: SortOrder
    budgetType?: SortOrder
    forecastId?: SortOrder
  }

  export type ForecastBudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    budgetType?: SortOrder
    forecastId?: SortOrder
  }

  export type ForecastBudgetMinOrderByAggregateInput = {
    id?: SortOrder
    budgetType?: SortOrder
    forecastId?: SortOrder
  }

  export type EnumBudgetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetType | EnumBudgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetType[]
    notIn?: $Enums.BudgetType[]
    not?: NestedEnumBudgetTypeWithAggregatesFilter<$PrismaModel> | $Enums.BudgetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBudgetTypeFilter<$PrismaModel>
    _max?: NestedEnumBudgetTypeFilter<$PrismaModel>
  }

  export type EnumCashFlowTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowType | EnumCashFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowType[]
    notIn?: $Enums.CashFlowType[]
    not?: NestedEnumCashFlowTypeFilter<$PrismaModel> | $Enums.CashFlowType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumArticleTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ArticleType[] | null
    notIn?: $Enums.ArticleType[] | null
    not?: NestedEnumArticleTypeNullableFilter<$PrismaModel> | $Enums.ArticleType | null
  }

  export type ForecastBudgetScalarRelationFilter = {
    is?: ForecastBudgetWhereInput
    isNot?: ForecastBudgetWhereInput
  }

  export type BudgetTypeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    budgetType?: SortOrder
    cashFlowType?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    articleType?: SortOrder
    budgetId?: SortOrder
  }

  export type BudgetTypeEntryAvgOrderByAggregateInput = {
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
  }

  export type BudgetTypeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    budgetType?: SortOrder
    cashFlowType?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    articleType?: SortOrder
    budgetId?: SortOrder
  }

  export type BudgetTypeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    budgetType?: SortOrder
    cashFlowType?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    articleType?: SortOrder
    budgetId?: SortOrder
  }

  export type BudgetTypeEntrySumOrderByAggregateInput = {
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
  }

  export type EnumCashFlowTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowType | EnumCashFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowType[]
    notIn?: $Enums.CashFlowType[]
    not?: NestedEnumCashFlowTypeWithAggregatesFilter<$PrismaModel> | $Enums.CashFlowType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashFlowTypeFilter<$PrismaModel>
    _max?: NestedEnumCashFlowTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumArticleTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ArticleType[] | null
    notIn?: $Enums.ArticleType[] | null
    not?: NestedEnumArticleTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ArticleType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumArticleTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumArticleTypeNullableFilter<$PrismaModel>
  }

  export type EnumArticleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleType[]
    notIn?: $Enums.ArticleType[]
    not?: NestedEnumArticleTypeFilter<$PrismaModel> | $Enums.ArticleType
  }

  export type ForecastArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    articleType?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    forecastId?: SortOrder
  }

  export type ForecastArticleAvgOrderByAggregateInput = {
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
  }

  export type ForecastArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    articleType?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    forecastId?: SortOrder
  }

  export type ForecastArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    articleType?: SortOrder
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
    forecastId?: SortOrder
  }

  export type ForecastArticleSumOrderByAggregateInput = {
    unitPrice?: SortOrder
    productionPrice?: SortOrder
    januaryValue?: SortOrder
    februaryValue?: SortOrder
    marchValue?: SortOrder
    aprilValue?: SortOrder
    mayValue?: SortOrder
    juneValue?: SortOrder
    julyValue?: SortOrder
    augustValue?: SortOrder
    septemberValue?: SortOrder
    octoberValue?: SortOrder
    novemberValue?: SortOrder
    decemberValue?: SortOrder
  }

  export type EnumArticleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleType[]
    notIn?: $Enums.ArticleType[]
    not?: NestedEnumArticleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArticleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleTypeFilter<$PrismaModel>
    _max?: NestedEnumArticleTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ForecastCreateNestedManyWithoutProjectInput = {
    create?: XOR<ForecastCreateWithoutProjectInput, ForecastUncheckedCreateWithoutProjectInput> | ForecastCreateWithoutProjectInput[] | ForecastUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ForecastCreateOrConnectWithoutProjectInput | ForecastCreateOrConnectWithoutProjectInput[]
    createMany?: ForecastCreateManyProjectInputEnvelope
    connect?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
  }

  export type ForecastUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ForecastCreateWithoutProjectInput, ForecastUncheckedCreateWithoutProjectInput> | ForecastCreateWithoutProjectInput[] | ForecastUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ForecastCreateOrConnectWithoutProjectInput | ForecastCreateOrConnectWithoutProjectInput[]
    createMany?: ForecastCreateManyProjectInputEnvelope
    connect?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ForecastUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ForecastCreateWithoutProjectInput, ForecastUncheckedCreateWithoutProjectInput> | ForecastCreateWithoutProjectInput[] | ForecastUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ForecastCreateOrConnectWithoutProjectInput | ForecastCreateOrConnectWithoutProjectInput[]
    upsert?: ForecastUpsertWithWhereUniqueWithoutProjectInput | ForecastUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ForecastCreateManyProjectInputEnvelope
    set?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    disconnect?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    delete?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    connect?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    update?: ForecastUpdateWithWhereUniqueWithoutProjectInput | ForecastUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ForecastUpdateManyWithWhereWithoutProjectInput | ForecastUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ForecastScalarWhereInput | ForecastScalarWhereInput[]
  }

  export type ForecastUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ForecastCreateWithoutProjectInput, ForecastUncheckedCreateWithoutProjectInput> | ForecastCreateWithoutProjectInput[] | ForecastUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ForecastCreateOrConnectWithoutProjectInput | ForecastCreateOrConnectWithoutProjectInput[]
    upsert?: ForecastUpsertWithWhereUniqueWithoutProjectInput | ForecastUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ForecastCreateManyProjectInputEnvelope
    set?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    disconnect?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    delete?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    connect?: ForecastWhereUniqueInput | ForecastWhereUniqueInput[]
    update?: ForecastUpdateWithWhereUniqueWithoutProjectInput | ForecastUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ForecastUpdateManyWithWhereWithoutProjectInput | ForecastUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ForecastScalarWhereInput | ForecastScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutForecastsInput = {
    create?: XOR<ProjectCreateWithoutForecastsInput, ProjectUncheckedCreateWithoutForecastsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutForecastsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ForecastBudgetCreateNestedManyWithoutForecastInput = {
    create?: XOR<ForecastBudgetCreateWithoutForecastInput, ForecastBudgetUncheckedCreateWithoutForecastInput> | ForecastBudgetCreateWithoutForecastInput[] | ForecastBudgetUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastBudgetCreateOrConnectWithoutForecastInput | ForecastBudgetCreateOrConnectWithoutForecastInput[]
    createMany?: ForecastBudgetCreateManyForecastInputEnvelope
    connect?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
  }

  export type ForecastArticleCreateNestedManyWithoutForecastInput = {
    create?: XOR<ForecastArticleCreateWithoutForecastInput, ForecastArticleUncheckedCreateWithoutForecastInput> | ForecastArticleCreateWithoutForecastInput[] | ForecastArticleUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastArticleCreateOrConnectWithoutForecastInput | ForecastArticleCreateOrConnectWithoutForecastInput[]
    createMany?: ForecastArticleCreateManyForecastInputEnvelope
    connect?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
  }

  export type ForecastBudgetUncheckedCreateNestedManyWithoutForecastInput = {
    create?: XOR<ForecastBudgetCreateWithoutForecastInput, ForecastBudgetUncheckedCreateWithoutForecastInput> | ForecastBudgetCreateWithoutForecastInput[] | ForecastBudgetUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastBudgetCreateOrConnectWithoutForecastInput | ForecastBudgetCreateOrConnectWithoutForecastInput[]
    createMany?: ForecastBudgetCreateManyForecastInputEnvelope
    connect?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
  }

  export type ForecastArticleUncheckedCreateNestedManyWithoutForecastInput = {
    create?: XOR<ForecastArticleCreateWithoutForecastInput, ForecastArticleUncheckedCreateWithoutForecastInput> | ForecastArticleCreateWithoutForecastInput[] | ForecastArticleUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastArticleCreateOrConnectWithoutForecastInput | ForecastArticleCreateOrConnectWithoutForecastInput[]
    createMany?: ForecastArticleCreateManyForecastInputEnvelope
    connect?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutForecastsNestedInput = {
    create?: XOR<ProjectCreateWithoutForecastsInput, ProjectUncheckedCreateWithoutForecastsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutForecastsInput
    upsert?: ProjectUpsertWithoutForecastsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutForecastsInput, ProjectUpdateWithoutForecastsInput>, ProjectUncheckedUpdateWithoutForecastsInput>
  }

  export type ForecastBudgetUpdateManyWithoutForecastNestedInput = {
    create?: XOR<ForecastBudgetCreateWithoutForecastInput, ForecastBudgetUncheckedCreateWithoutForecastInput> | ForecastBudgetCreateWithoutForecastInput[] | ForecastBudgetUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastBudgetCreateOrConnectWithoutForecastInput | ForecastBudgetCreateOrConnectWithoutForecastInput[]
    upsert?: ForecastBudgetUpsertWithWhereUniqueWithoutForecastInput | ForecastBudgetUpsertWithWhereUniqueWithoutForecastInput[]
    createMany?: ForecastBudgetCreateManyForecastInputEnvelope
    set?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    disconnect?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    delete?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    connect?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    update?: ForecastBudgetUpdateWithWhereUniqueWithoutForecastInput | ForecastBudgetUpdateWithWhereUniqueWithoutForecastInput[]
    updateMany?: ForecastBudgetUpdateManyWithWhereWithoutForecastInput | ForecastBudgetUpdateManyWithWhereWithoutForecastInput[]
    deleteMany?: ForecastBudgetScalarWhereInput | ForecastBudgetScalarWhereInput[]
  }

  export type ForecastArticleUpdateManyWithoutForecastNestedInput = {
    create?: XOR<ForecastArticleCreateWithoutForecastInput, ForecastArticleUncheckedCreateWithoutForecastInput> | ForecastArticleCreateWithoutForecastInput[] | ForecastArticleUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastArticleCreateOrConnectWithoutForecastInput | ForecastArticleCreateOrConnectWithoutForecastInput[]
    upsert?: ForecastArticleUpsertWithWhereUniqueWithoutForecastInput | ForecastArticleUpsertWithWhereUniqueWithoutForecastInput[]
    createMany?: ForecastArticleCreateManyForecastInputEnvelope
    set?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    disconnect?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    delete?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    connect?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    update?: ForecastArticleUpdateWithWhereUniqueWithoutForecastInput | ForecastArticleUpdateWithWhereUniqueWithoutForecastInput[]
    updateMany?: ForecastArticleUpdateManyWithWhereWithoutForecastInput | ForecastArticleUpdateManyWithWhereWithoutForecastInput[]
    deleteMany?: ForecastArticleScalarWhereInput | ForecastArticleScalarWhereInput[]
  }

  export type ForecastBudgetUncheckedUpdateManyWithoutForecastNestedInput = {
    create?: XOR<ForecastBudgetCreateWithoutForecastInput, ForecastBudgetUncheckedCreateWithoutForecastInput> | ForecastBudgetCreateWithoutForecastInput[] | ForecastBudgetUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastBudgetCreateOrConnectWithoutForecastInput | ForecastBudgetCreateOrConnectWithoutForecastInput[]
    upsert?: ForecastBudgetUpsertWithWhereUniqueWithoutForecastInput | ForecastBudgetUpsertWithWhereUniqueWithoutForecastInput[]
    createMany?: ForecastBudgetCreateManyForecastInputEnvelope
    set?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    disconnect?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    delete?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    connect?: ForecastBudgetWhereUniqueInput | ForecastBudgetWhereUniqueInput[]
    update?: ForecastBudgetUpdateWithWhereUniqueWithoutForecastInput | ForecastBudgetUpdateWithWhereUniqueWithoutForecastInput[]
    updateMany?: ForecastBudgetUpdateManyWithWhereWithoutForecastInput | ForecastBudgetUpdateManyWithWhereWithoutForecastInput[]
    deleteMany?: ForecastBudgetScalarWhereInput | ForecastBudgetScalarWhereInput[]
  }

  export type ForecastArticleUncheckedUpdateManyWithoutForecastNestedInput = {
    create?: XOR<ForecastArticleCreateWithoutForecastInput, ForecastArticleUncheckedCreateWithoutForecastInput> | ForecastArticleCreateWithoutForecastInput[] | ForecastArticleUncheckedCreateWithoutForecastInput[]
    connectOrCreate?: ForecastArticleCreateOrConnectWithoutForecastInput | ForecastArticleCreateOrConnectWithoutForecastInput[]
    upsert?: ForecastArticleUpsertWithWhereUniqueWithoutForecastInput | ForecastArticleUpsertWithWhereUniqueWithoutForecastInput[]
    createMany?: ForecastArticleCreateManyForecastInputEnvelope
    set?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    disconnect?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    delete?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    connect?: ForecastArticleWhereUniqueInput | ForecastArticleWhereUniqueInput[]
    update?: ForecastArticleUpdateWithWhereUniqueWithoutForecastInput | ForecastArticleUpdateWithWhereUniqueWithoutForecastInput[]
    updateMany?: ForecastArticleUpdateManyWithWhereWithoutForecastInput | ForecastArticleUpdateManyWithWhereWithoutForecastInput[]
    deleteMany?: ForecastArticleScalarWhereInput | ForecastArticleScalarWhereInput[]
  }

  export type ForecastCreateNestedOneWithoutForecastBudgetsInput = {
    create?: XOR<ForecastCreateWithoutForecastBudgetsInput, ForecastUncheckedCreateWithoutForecastBudgetsInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutForecastBudgetsInput
    connect?: ForecastWhereUniqueInput
  }

  export type BudgetTypeEntryCreateNestedManyWithoutBudgetInput = {
    create?: XOR<BudgetTypeEntryCreateWithoutBudgetInput, BudgetTypeEntryUncheckedCreateWithoutBudgetInput> | BudgetTypeEntryCreateWithoutBudgetInput[] | BudgetTypeEntryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetTypeEntryCreateOrConnectWithoutBudgetInput | BudgetTypeEntryCreateOrConnectWithoutBudgetInput[]
    createMany?: BudgetTypeEntryCreateManyBudgetInputEnvelope
    connect?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
  }

  export type BudgetTypeEntryUncheckedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<BudgetTypeEntryCreateWithoutBudgetInput, BudgetTypeEntryUncheckedCreateWithoutBudgetInput> | BudgetTypeEntryCreateWithoutBudgetInput[] | BudgetTypeEntryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetTypeEntryCreateOrConnectWithoutBudgetInput | BudgetTypeEntryCreateOrConnectWithoutBudgetInput[]
    createMany?: BudgetTypeEntryCreateManyBudgetInputEnvelope
    connect?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
  }

  export type EnumBudgetTypeFieldUpdateOperationsInput = {
    set?: $Enums.BudgetType
  }

  export type ForecastUpdateOneRequiredWithoutForecastBudgetsNestedInput = {
    create?: XOR<ForecastCreateWithoutForecastBudgetsInput, ForecastUncheckedCreateWithoutForecastBudgetsInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutForecastBudgetsInput
    upsert?: ForecastUpsertWithoutForecastBudgetsInput
    connect?: ForecastWhereUniqueInput
    update?: XOR<XOR<ForecastUpdateToOneWithWhereWithoutForecastBudgetsInput, ForecastUpdateWithoutForecastBudgetsInput>, ForecastUncheckedUpdateWithoutForecastBudgetsInput>
  }

  export type BudgetTypeEntryUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<BudgetTypeEntryCreateWithoutBudgetInput, BudgetTypeEntryUncheckedCreateWithoutBudgetInput> | BudgetTypeEntryCreateWithoutBudgetInput[] | BudgetTypeEntryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetTypeEntryCreateOrConnectWithoutBudgetInput | BudgetTypeEntryCreateOrConnectWithoutBudgetInput[]
    upsert?: BudgetTypeEntryUpsertWithWhereUniqueWithoutBudgetInput | BudgetTypeEntryUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: BudgetTypeEntryCreateManyBudgetInputEnvelope
    set?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    disconnect?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    delete?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    connect?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    update?: BudgetTypeEntryUpdateWithWhereUniqueWithoutBudgetInput | BudgetTypeEntryUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: BudgetTypeEntryUpdateManyWithWhereWithoutBudgetInput | BudgetTypeEntryUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: BudgetTypeEntryScalarWhereInput | BudgetTypeEntryScalarWhereInput[]
  }

  export type BudgetTypeEntryUncheckedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<BudgetTypeEntryCreateWithoutBudgetInput, BudgetTypeEntryUncheckedCreateWithoutBudgetInput> | BudgetTypeEntryCreateWithoutBudgetInput[] | BudgetTypeEntryUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: BudgetTypeEntryCreateOrConnectWithoutBudgetInput | BudgetTypeEntryCreateOrConnectWithoutBudgetInput[]
    upsert?: BudgetTypeEntryUpsertWithWhereUniqueWithoutBudgetInput | BudgetTypeEntryUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: BudgetTypeEntryCreateManyBudgetInputEnvelope
    set?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    disconnect?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    delete?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    connect?: BudgetTypeEntryWhereUniqueInput | BudgetTypeEntryWhereUniqueInput[]
    update?: BudgetTypeEntryUpdateWithWhereUniqueWithoutBudgetInput | BudgetTypeEntryUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: BudgetTypeEntryUpdateManyWithWhereWithoutBudgetInput | BudgetTypeEntryUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: BudgetTypeEntryScalarWhereInput | BudgetTypeEntryScalarWhereInput[]
  }

  export type ForecastBudgetCreateNestedOneWithoutEntriesInput = {
    create?: XOR<ForecastBudgetCreateWithoutEntriesInput, ForecastBudgetUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ForecastBudgetCreateOrConnectWithoutEntriesInput
    connect?: ForecastBudgetWhereUniqueInput
  }

  export type EnumCashFlowTypeFieldUpdateOperationsInput = {
    set?: $Enums.CashFlowType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumArticleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ArticleType | null
  }

  export type ForecastBudgetUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<ForecastBudgetCreateWithoutEntriesInput, ForecastBudgetUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ForecastBudgetCreateOrConnectWithoutEntriesInput
    upsert?: ForecastBudgetUpsertWithoutEntriesInput
    connect?: ForecastBudgetWhereUniqueInput
    update?: XOR<XOR<ForecastBudgetUpdateToOneWithWhereWithoutEntriesInput, ForecastBudgetUpdateWithoutEntriesInput>, ForecastBudgetUncheckedUpdateWithoutEntriesInput>
  }

  export type ForecastCreateNestedOneWithoutForecastArticlesInput = {
    create?: XOR<ForecastCreateWithoutForecastArticlesInput, ForecastUncheckedCreateWithoutForecastArticlesInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutForecastArticlesInput
    connect?: ForecastWhereUniqueInput
  }

  export type EnumArticleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ArticleType
  }

  export type ForecastUpdateOneRequiredWithoutForecastArticlesNestedInput = {
    create?: XOR<ForecastCreateWithoutForecastArticlesInput, ForecastUncheckedCreateWithoutForecastArticlesInput>
    connectOrCreate?: ForecastCreateOrConnectWithoutForecastArticlesInput
    upsert?: ForecastUpsertWithoutForecastArticlesInput
    connect?: ForecastWhereUniqueInput
    update?: XOR<XOR<ForecastUpdateToOneWithWhereWithoutForecastArticlesInput, ForecastUpdateWithoutForecastArticlesInput>, ForecastUncheckedUpdateWithoutForecastArticlesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBudgetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetType | EnumBudgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetType[]
    notIn?: $Enums.BudgetType[]
    not?: NestedEnumBudgetTypeFilter<$PrismaModel> | $Enums.BudgetType
  }

  export type NestedEnumBudgetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetType | EnumBudgetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetType[]
    notIn?: $Enums.BudgetType[]
    not?: NestedEnumBudgetTypeWithAggregatesFilter<$PrismaModel> | $Enums.BudgetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBudgetTypeFilter<$PrismaModel>
    _max?: NestedEnumBudgetTypeFilter<$PrismaModel>
  }

  export type NestedEnumCashFlowTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowType | EnumCashFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowType[]
    notIn?: $Enums.CashFlowType[]
    not?: NestedEnumCashFlowTypeFilter<$PrismaModel> | $Enums.CashFlowType
  }

  export type NestedEnumArticleTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ArticleType[] | null
    notIn?: $Enums.ArticleType[] | null
    not?: NestedEnumArticleTypeNullableFilter<$PrismaModel> | $Enums.ArticleType | null
  }

  export type NestedEnumCashFlowTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowType | EnumCashFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowType[]
    notIn?: $Enums.CashFlowType[]
    not?: NestedEnumCashFlowTypeWithAggregatesFilter<$PrismaModel> | $Enums.CashFlowType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashFlowTypeFilter<$PrismaModel>
    _max?: NestedEnumCashFlowTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumArticleTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ArticleType[] | null
    notIn?: $Enums.ArticleType[] | null
    not?: NestedEnumArticleTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ArticleType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumArticleTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumArticleTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumArticleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleType[]
    notIn?: $Enums.ArticleType[]
    not?: NestedEnumArticleTypeFilter<$PrismaModel> | $Enums.ArticleType
  }

  export type NestedEnumArticleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleType | EnumArticleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleType[]
    notIn?: $Enums.ArticleType[]
    not?: NestedEnumArticleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArticleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleTypeFilter<$PrismaModel>
    _max?: NestedEnumArticleTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    forecasts?: ForecastCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    forecasts?: ForecastUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    userId?: StringFilter<"Project"> | string
    lastModified?: DateTimeFilter<"Project"> | Date | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ForecastCreateWithoutProjectInput = {
    id?: string
    startYear: number
    forecastBudgets?: ForecastBudgetCreateNestedManyWithoutForecastInput
    forecastArticles?: ForecastArticleCreateNestedManyWithoutForecastInput
  }

  export type ForecastUncheckedCreateWithoutProjectInput = {
    id?: string
    startYear: number
    forecastBudgets?: ForecastBudgetUncheckedCreateNestedManyWithoutForecastInput
    forecastArticles?: ForecastArticleUncheckedCreateNestedManyWithoutForecastInput
  }

  export type ForecastCreateOrConnectWithoutProjectInput = {
    where: ForecastWhereUniqueInput
    create: XOR<ForecastCreateWithoutProjectInput, ForecastUncheckedCreateWithoutProjectInput>
  }

  export type ForecastCreateManyProjectInputEnvelope = {
    data: ForecastCreateManyProjectInput | ForecastCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ForecastUpsertWithWhereUniqueWithoutProjectInput = {
    where: ForecastWhereUniqueInput
    update: XOR<ForecastUpdateWithoutProjectInput, ForecastUncheckedUpdateWithoutProjectInput>
    create: XOR<ForecastCreateWithoutProjectInput, ForecastUncheckedCreateWithoutProjectInput>
  }

  export type ForecastUpdateWithWhereUniqueWithoutProjectInput = {
    where: ForecastWhereUniqueInput
    data: XOR<ForecastUpdateWithoutProjectInput, ForecastUncheckedUpdateWithoutProjectInput>
  }

  export type ForecastUpdateManyWithWhereWithoutProjectInput = {
    where: ForecastScalarWhereInput
    data: XOR<ForecastUpdateManyMutationInput, ForecastUncheckedUpdateManyWithoutProjectInput>
  }

  export type ForecastScalarWhereInput = {
    AND?: ForecastScalarWhereInput | ForecastScalarWhereInput[]
    OR?: ForecastScalarWhereInput[]
    NOT?: ForecastScalarWhereInput | ForecastScalarWhereInput[]
    id?: StringFilter<"Forecast"> | string
    startYear?: IntFilter<"Forecast"> | number
    projectId?: StringFilter<"Forecast"> | string
  }

  export type ProjectCreateWithoutForecastsInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutForecastsInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutForecastsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutForecastsInput, ProjectUncheckedCreateWithoutForecastsInput>
  }

  export type ForecastBudgetCreateWithoutForecastInput = {
    id?: string
    budgetType: $Enums.BudgetType
    entries?: BudgetTypeEntryCreateNestedManyWithoutBudgetInput
  }

  export type ForecastBudgetUncheckedCreateWithoutForecastInput = {
    id?: string
    budgetType: $Enums.BudgetType
    entries?: BudgetTypeEntryUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type ForecastBudgetCreateOrConnectWithoutForecastInput = {
    where: ForecastBudgetWhereUniqueInput
    create: XOR<ForecastBudgetCreateWithoutForecastInput, ForecastBudgetUncheckedCreateWithoutForecastInput>
  }

  export type ForecastBudgetCreateManyForecastInputEnvelope = {
    data: ForecastBudgetCreateManyForecastInput | ForecastBudgetCreateManyForecastInput[]
  }

  export type ForecastArticleCreateWithoutForecastInput = {
    id?: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
  }

  export type ForecastArticleUncheckedCreateWithoutForecastInput = {
    id?: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
  }

  export type ForecastArticleCreateOrConnectWithoutForecastInput = {
    where: ForecastArticleWhereUniqueInput
    create: XOR<ForecastArticleCreateWithoutForecastInput, ForecastArticleUncheckedCreateWithoutForecastInput>
  }

  export type ForecastArticleCreateManyForecastInputEnvelope = {
    data: ForecastArticleCreateManyForecastInput | ForecastArticleCreateManyForecastInput[]
  }

  export type ProjectUpsertWithoutForecastsInput = {
    update: XOR<ProjectUpdateWithoutForecastsInput, ProjectUncheckedUpdateWithoutForecastsInput>
    create: XOR<ProjectCreateWithoutForecastsInput, ProjectUncheckedCreateWithoutForecastsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutForecastsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutForecastsInput, ProjectUncheckedUpdateWithoutForecastsInput>
  }

  export type ProjectUpdateWithoutForecastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutForecastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastBudgetUpsertWithWhereUniqueWithoutForecastInput = {
    where: ForecastBudgetWhereUniqueInput
    update: XOR<ForecastBudgetUpdateWithoutForecastInput, ForecastBudgetUncheckedUpdateWithoutForecastInput>
    create: XOR<ForecastBudgetCreateWithoutForecastInput, ForecastBudgetUncheckedCreateWithoutForecastInput>
  }

  export type ForecastBudgetUpdateWithWhereUniqueWithoutForecastInput = {
    where: ForecastBudgetWhereUniqueInput
    data: XOR<ForecastBudgetUpdateWithoutForecastInput, ForecastBudgetUncheckedUpdateWithoutForecastInput>
  }

  export type ForecastBudgetUpdateManyWithWhereWithoutForecastInput = {
    where: ForecastBudgetScalarWhereInput
    data: XOR<ForecastBudgetUpdateManyMutationInput, ForecastBudgetUncheckedUpdateManyWithoutForecastInput>
  }

  export type ForecastBudgetScalarWhereInput = {
    AND?: ForecastBudgetScalarWhereInput | ForecastBudgetScalarWhereInput[]
    OR?: ForecastBudgetScalarWhereInput[]
    NOT?: ForecastBudgetScalarWhereInput | ForecastBudgetScalarWhereInput[]
    id?: StringFilter<"ForecastBudget"> | string
    budgetType?: EnumBudgetTypeFilter<"ForecastBudget"> | $Enums.BudgetType
    forecastId?: StringFilter<"ForecastBudget"> | string
  }

  export type ForecastArticleUpsertWithWhereUniqueWithoutForecastInput = {
    where: ForecastArticleWhereUniqueInput
    update: XOR<ForecastArticleUpdateWithoutForecastInput, ForecastArticleUncheckedUpdateWithoutForecastInput>
    create: XOR<ForecastArticleCreateWithoutForecastInput, ForecastArticleUncheckedCreateWithoutForecastInput>
  }

  export type ForecastArticleUpdateWithWhereUniqueWithoutForecastInput = {
    where: ForecastArticleWhereUniqueInput
    data: XOR<ForecastArticleUpdateWithoutForecastInput, ForecastArticleUncheckedUpdateWithoutForecastInput>
  }

  export type ForecastArticleUpdateManyWithWhereWithoutForecastInput = {
    where: ForecastArticleScalarWhereInput
    data: XOR<ForecastArticleUpdateManyMutationInput, ForecastArticleUncheckedUpdateManyWithoutForecastInput>
  }

  export type ForecastArticleScalarWhereInput = {
    AND?: ForecastArticleScalarWhereInput | ForecastArticleScalarWhereInput[]
    OR?: ForecastArticleScalarWhereInput[]
    NOT?: ForecastArticleScalarWhereInput | ForecastArticleScalarWhereInput[]
    id?: StringFilter<"ForecastArticle"> | string
    title?: StringFilter<"ForecastArticle"> | string
    articleType?: EnumArticleTypeFilter<"ForecastArticle"> | $Enums.ArticleType
    unitPrice?: FloatFilter<"ForecastArticle"> | number
    productionPrice?: FloatFilter<"ForecastArticle"> | number
    januaryValue?: FloatFilter<"ForecastArticle"> | number
    februaryValue?: FloatFilter<"ForecastArticle"> | number
    marchValue?: FloatFilter<"ForecastArticle"> | number
    aprilValue?: FloatFilter<"ForecastArticle"> | number
    mayValue?: FloatFilter<"ForecastArticle"> | number
    juneValue?: FloatFilter<"ForecastArticle"> | number
    julyValue?: FloatFilter<"ForecastArticle"> | number
    augustValue?: FloatFilter<"ForecastArticle"> | number
    septemberValue?: FloatFilter<"ForecastArticle"> | number
    octoberValue?: FloatFilter<"ForecastArticle"> | number
    novemberValue?: FloatFilter<"ForecastArticle"> | number
    decemberValue?: FloatFilter<"ForecastArticle"> | number
    forecastId?: StringFilter<"ForecastArticle"> | string
  }

  export type ForecastCreateWithoutForecastBudgetsInput = {
    id?: string
    startYear: number
    project: ProjectCreateNestedOneWithoutForecastsInput
    forecastArticles?: ForecastArticleCreateNestedManyWithoutForecastInput
  }

  export type ForecastUncheckedCreateWithoutForecastBudgetsInput = {
    id?: string
    startYear: number
    projectId: string
    forecastArticles?: ForecastArticleUncheckedCreateNestedManyWithoutForecastInput
  }

  export type ForecastCreateOrConnectWithoutForecastBudgetsInput = {
    where: ForecastWhereUniqueInput
    create: XOR<ForecastCreateWithoutForecastBudgetsInput, ForecastUncheckedCreateWithoutForecastBudgetsInput>
  }

  export type BudgetTypeEntryCreateWithoutBudgetInput = {
    id?: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    unitPrice?: number
    productionPrice?: number
    articleType?: $Enums.ArticleType | null
  }

  export type BudgetTypeEntryUncheckedCreateWithoutBudgetInput = {
    id?: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    unitPrice?: number
    productionPrice?: number
    articleType?: $Enums.ArticleType | null
  }

  export type BudgetTypeEntryCreateOrConnectWithoutBudgetInput = {
    where: BudgetTypeEntryWhereUniqueInput
    create: XOR<BudgetTypeEntryCreateWithoutBudgetInput, BudgetTypeEntryUncheckedCreateWithoutBudgetInput>
  }

  export type BudgetTypeEntryCreateManyBudgetInputEnvelope = {
    data: BudgetTypeEntryCreateManyBudgetInput | BudgetTypeEntryCreateManyBudgetInput[]
  }

  export type ForecastUpsertWithoutForecastBudgetsInput = {
    update: XOR<ForecastUpdateWithoutForecastBudgetsInput, ForecastUncheckedUpdateWithoutForecastBudgetsInput>
    create: XOR<ForecastCreateWithoutForecastBudgetsInput, ForecastUncheckedCreateWithoutForecastBudgetsInput>
    where?: ForecastWhereInput
  }

  export type ForecastUpdateToOneWithWhereWithoutForecastBudgetsInput = {
    where?: ForecastWhereInput
    data: XOR<ForecastUpdateWithoutForecastBudgetsInput, ForecastUncheckedUpdateWithoutForecastBudgetsInput>
  }

  export type ForecastUpdateWithoutForecastBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutForecastsNestedInput
    forecastArticles?: ForecastArticleUpdateManyWithoutForecastNestedInput
  }

  export type ForecastUncheckedUpdateWithoutForecastBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    forecastArticles?: ForecastArticleUncheckedUpdateManyWithoutForecastNestedInput
  }

  export type BudgetTypeEntryUpsertWithWhereUniqueWithoutBudgetInput = {
    where: BudgetTypeEntryWhereUniqueInput
    update: XOR<BudgetTypeEntryUpdateWithoutBudgetInput, BudgetTypeEntryUncheckedUpdateWithoutBudgetInput>
    create: XOR<BudgetTypeEntryCreateWithoutBudgetInput, BudgetTypeEntryUncheckedCreateWithoutBudgetInput>
  }

  export type BudgetTypeEntryUpdateWithWhereUniqueWithoutBudgetInput = {
    where: BudgetTypeEntryWhereUniqueInput
    data: XOR<BudgetTypeEntryUpdateWithoutBudgetInput, BudgetTypeEntryUncheckedUpdateWithoutBudgetInput>
  }

  export type BudgetTypeEntryUpdateManyWithWhereWithoutBudgetInput = {
    where: BudgetTypeEntryScalarWhereInput
    data: XOR<BudgetTypeEntryUpdateManyMutationInput, BudgetTypeEntryUncheckedUpdateManyWithoutBudgetInput>
  }

  export type BudgetTypeEntryScalarWhereInput = {
    AND?: BudgetTypeEntryScalarWhereInput | BudgetTypeEntryScalarWhereInput[]
    OR?: BudgetTypeEntryScalarWhereInput[]
    NOT?: BudgetTypeEntryScalarWhereInput | BudgetTypeEntryScalarWhereInput[]
    id?: StringFilter<"BudgetTypeEntry"> | string
    title?: StringFilter<"BudgetTypeEntry"> | string
    budgetType?: EnumBudgetTypeFilter<"BudgetTypeEntry"> | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFilter<"BudgetTypeEntry"> | $Enums.CashFlowType
    januaryValue?: FloatFilter<"BudgetTypeEntry"> | number
    februaryValue?: FloatFilter<"BudgetTypeEntry"> | number
    marchValue?: FloatFilter<"BudgetTypeEntry"> | number
    aprilValue?: FloatFilter<"BudgetTypeEntry"> | number
    mayValue?: FloatFilter<"BudgetTypeEntry"> | number
    juneValue?: FloatFilter<"BudgetTypeEntry"> | number
    julyValue?: FloatFilter<"BudgetTypeEntry"> | number
    augustValue?: FloatFilter<"BudgetTypeEntry"> | number
    septemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    octoberValue?: FloatFilter<"BudgetTypeEntry"> | number
    novemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    decemberValue?: FloatFilter<"BudgetTypeEntry"> | number
    unitPrice?: FloatFilter<"BudgetTypeEntry"> | number
    productionPrice?: FloatFilter<"BudgetTypeEntry"> | number
    articleType?: EnumArticleTypeNullableFilter<"BudgetTypeEntry"> | $Enums.ArticleType | null
    budgetId?: StringFilter<"BudgetTypeEntry"> | string
  }

  export type ForecastBudgetCreateWithoutEntriesInput = {
    id?: string
    budgetType: $Enums.BudgetType
    forecast: ForecastCreateNestedOneWithoutForecastBudgetsInput
  }

  export type ForecastBudgetUncheckedCreateWithoutEntriesInput = {
    id?: string
    budgetType: $Enums.BudgetType
    forecastId: string
  }

  export type ForecastBudgetCreateOrConnectWithoutEntriesInput = {
    where: ForecastBudgetWhereUniqueInput
    create: XOR<ForecastBudgetCreateWithoutEntriesInput, ForecastBudgetUncheckedCreateWithoutEntriesInput>
  }

  export type ForecastBudgetUpsertWithoutEntriesInput = {
    update: XOR<ForecastBudgetUpdateWithoutEntriesInput, ForecastBudgetUncheckedUpdateWithoutEntriesInput>
    create: XOR<ForecastBudgetCreateWithoutEntriesInput, ForecastBudgetUncheckedCreateWithoutEntriesInput>
    where?: ForecastBudgetWhereInput
  }

  export type ForecastBudgetUpdateToOneWithWhereWithoutEntriesInput = {
    where?: ForecastBudgetWhereInput
    data: XOR<ForecastBudgetUpdateWithoutEntriesInput, ForecastBudgetUncheckedUpdateWithoutEntriesInput>
  }

  export type ForecastBudgetUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    forecast?: ForecastUpdateOneRequiredWithoutForecastBudgetsNestedInput
  }

  export type ForecastBudgetUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    forecastId?: StringFieldUpdateOperationsInput | string
  }

  export type ForecastCreateWithoutForecastArticlesInput = {
    id?: string
    startYear: number
    project: ProjectCreateNestedOneWithoutForecastsInput
    forecastBudgets?: ForecastBudgetCreateNestedManyWithoutForecastInput
  }

  export type ForecastUncheckedCreateWithoutForecastArticlesInput = {
    id?: string
    startYear: number
    projectId: string
    forecastBudgets?: ForecastBudgetUncheckedCreateNestedManyWithoutForecastInput
  }

  export type ForecastCreateOrConnectWithoutForecastArticlesInput = {
    where: ForecastWhereUniqueInput
    create: XOR<ForecastCreateWithoutForecastArticlesInput, ForecastUncheckedCreateWithoutForecastArticlesInput>
  }

  export type ForecastUpsertWithoutForecastArticlesInput = {
    update: XOR<ForecastUpdateWithoutForecastArticlesInput, ForecastUncheckedUpdateWithoutForecastArticlesInput>
    create: XOR<ForecastCreateWithoutForecastArticlesInput, ForecastUncheckedCreateWithoutForecastArticlesInput>
    where?: ForecastWhereInput
  }

  export type ForecastUpdateToOneWithWhereWithoutForecastArticlesInput = {
    where?: ForecastWhereInput
    data: XOR<ForecastUpdateWithoutForecastArticlesInput, ForecastUncheckedUpdateWithoutForecastArticlesInput>
  }

  export type ForecastUpdateWithoutForecastArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutForecastsNestedInput
    forecastBudgets?: ForecastBudgetUpdateManyWithoutForecastNestedInput
  }

  export type ForecastUncheckedUpdateWithoutForecastArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    forecastBudgets?: ForecastBudgetUncheckedUpdateManyWithoutForecastNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    lastModified?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forecasts?: ForecastUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forecasts?: ForecastUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastCreateManyProjectInput = {
    id?: string
    startYear: number
  }

  export type ForecastUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    forecastBudgets?: ForecastBudgetUpdateManyWithoutForecastNestedInput
    forecastArticles?: ForecastArticleUpdateManyWithoutForecastNestedInput
  }

  export type ForecastUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    forecastBudgets?: ForecastBudgetUncheckedUpdateManyWithoutForecastNestedInput
    forecastArticles?: ForecastArticleUncheckedUpdateManyWithoutForecastNestedInput
  }

  export type ForecastUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
  }

  export type ForecastBudgetCreateManyForecastInput = {
    id?: string
    budgetType: $Enums.BudgetType
  }

  export type ForecastArticleCreateManyForecastInput = {
    id?: string
    title: string
    articleType: $Enums.ArticleType
    unitPrice: number
    productionPrice: number
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
  }

  export type ForecastBudgetUpdateWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    entries?: BudgetTypeEntryUpdateManyWithoutBudgetNestedInput
  }

  export type ForecastBudgetUncheckedUpdateWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    entries?: BudgetTypeEntryUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type ForecastBudgetUncheckedUpdateManyWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
  }

  export type ForecastArticleUpdateWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
  }

  export type ForecastArticleUncheckedUpdateWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
  }

  export type ForecastArticleUncheckedUpdateManyWithoutForecastInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleType?: EnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
  }

  export type BudgetTypeEntryCreateManyBudgetInput = {
    id?: string
    title: string
    budgetType: $Enums.BudgetType
    cashFlowType: $Enums.CashFlowType
    januaryValue?: number
    februaryValue?: number
    marchValue?: number
    aprilValue?: number
    mayValue?: number
    juneValue?: number
    julyValue?: number
    augustValue?: number
    septemberValue?: number
    octoberValue?: number
    novemberValue?: number
    decemberValue?: number
    unitPrice?: number
    productionPrice?: number
    articleType?: $Enums.ArticleType | null
  }

  export type BudgetTypeEntryUpdateWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
  }

  export type BudgetTypeEntryUncheckedUpdateWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
  }

  export type BudgetTypeEntryUncheckedUpdateManyWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    budgetType?: EnumBudgetTypeFieldUpdateOperationsInput | $Enums.BudgetType
    cashFlowType?: EnumCashFlowTypeFieldUpdateOperationsInput | $Enums.CashFlowType
    januaryValue?: FloatFieldUpdateOperationsInput | number
    februaryValue?: FloatFieldUpdateOperationsInput | number
    marchValue?: FloatFieldUpdateOperationsInput | number
    aprilValue?: FloatFieldUpdateOperationsInput | number
    mayValue?: FloatFieldUpdateOperationsInput | number
    juneValue?: FloatFieldUpdateOperationsInput | number
    julyValue?: FloatFieldUpdateOperationsInput | number
    augustValue?: FloatFieldUpdateOperationsInput | number
    septemberValue?: FloatFieldUpdateOperationsInput | number
    octoberValue?: FloatFieldUpdateOperationsInput | number
    novemberValue?: FloatFieldUpdateOperationsInput | number
    decemberValue?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    productionPrice?: FloatFieldUpdateOperationsInput | number
    articleType?: NullableEnumArticleTypeFieldUpdateOperationsInput | $Enums.ArticleType | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}