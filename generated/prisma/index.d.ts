
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model UserTour
 * 
 */
export type UserTour = $Result.DefaultSelection<Prisma.$UserTourPayload>
/**
 * Model TourDate
 * 
 */
export type TourDate = $Result.DefaultSelection<Prisma.$TourDatePayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model TourRoute
 * 
 */
export type TourRoute = $Result.DefaultSelection<Prisma.$TourRoutePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TourType: {
  HIKING: 'HIKING',
  TREKKING: 'TREKKING',
  CAMPING: 'CAMPING',
  EXPEDITION: 'EXPEDITION',
  GUIDED: 'GUIDED',
  SOLO: 'SOLO'
};

export type TourType = (typeof TourType)[keyof typeof TourType]


export const Difficulty: {
  EASY: 'EASY',
  MODERATE: 'MODERATE',
  HARD: 'HARD',
  EXTREME: 'EXTREME'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Role: {
  USER: 'USER',
  GUIDE: 'GUIDE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type TourType = $Enums.TourType

export const TourType: typeof $Enums.TourType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTour`: Exposes CRUD operations for the **UserTour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTours
    * const userTours = await prisma.userTour.findMany()
    * ```
    */
  get userTour(): Prisma.UserTourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourDate`: Exposes CRUD operations for the **TourDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourDates
    * const tourDates = await prisma.tourDate.findMany()
    * ```
    */
  get tourDate(): Prisma.TourDateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourRoute`: Exposes CRUD operations for the **TourRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourRoutes
    * const tourRoutes = await prisma.tourRoute.findMany()
    * ```
    */
  get tourRoute(): Prisma.TourRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Tour: 'Tour',
    UserTour: 'UserTour',
    TourDate: 'TourDate',
    Gallery: 'Gallery',
    TourRoute: 'TourRoute',
    Review: 'Review'
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
      modelProps: "user" | "tour" | "userTour" | "tourDate" | "gallery" | "tourRoute" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      UserTour: {
        payload: Prisma.$UserTourPayload<ExtArgs>
        fields: Prisma.UserTourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>
          }
          findFirst: {
            args: Prisma.UserTourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>
          }
          findMany: {
            args: Prisma.UserTourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>[]
          }
          create: {
            args: Prisma.UserTourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>
          }
          createMany: {
            args: Prisma.UserTourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>[]
          }
          delete: {
            args: Prisma.UserTourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>
          }
          update: {
            args: Prisma.UserTourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>
          }
          deleteMany: {
            args: Prisma.UserTourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>[]
          }
          upsert: {
            args: Prisma.UserTourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTourPayload>
          }
          aggregate: {
            args: Prisma.UserTourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTour>
          }
          groupBy: {
            args: Prisma.UserTourGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTourGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTourCountArgs<ExtArgs>
            result: $Utils.Optional<UserTourCountAggregateOutputType> | number
          }
        }
      }
      TourDate: {
        payload: Prisma.$TourDatePayload<ExtArgs>
        fields: Prisma.TourDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          findFirst: {
            args: Prisma.TourDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          findMany: {
            args: Prisma.TourDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          create: {
            args: Prisma.TourDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          createMany: {
            args: Prisma.TourDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          delete: {
            args: Prisma.TourDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          update: {
            args: Prisma.TourDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          deleteMany: {
            args: Prisma.TourDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          upsert: {
            args: Prisma.TourDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          aggregate: {
            args: Prisma.TourDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourDate>
          }
          groupBy: {
            args: Prisma.TourDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourDateCountArgs<ExtArgs>
            result: $Utils.Optional<TourDateCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      TourRoute: {
        payload: Prisma.$TourRoutePayload<ExtArgs>
        fields: Prisma.TourRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>
          }
          findFirst: {
            args: Prisma.TourRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>
          }
          findMany: {
            args: Prisma.TourRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>[]
          }
          create: {
            args: Prisma.TourRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>
          }
          createMany: {
            args: Prisma.TourRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourRouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>[]
          }
          delete: {
            args: Prisma.TourRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>
          }
          update: {
            args: Prisma.TourRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>
          }
          deleteMany: {
            args: Prisma.TourRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourRouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>[]
          }
          upsert: {
            args: Prisma.TourRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourRoutePayload>
          }
          aggregate: {
            args: Prisma.TourRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourRoute>
          }
          groupBy: {
            args: Prisma.TourRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourRouteCountArgs<ExtArgs>
            result: $Utils.Optional<TourRouteCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
    user?: UserOmit
    tour?: TourOmit
    userTour?: UserTourOmit
    tourDate?: TourDateOmit
    gallery?: GalleryOmit
    tourRoute?: TourRouteOmit
    review?: ReviewOmit
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
    joinedTours: number
    myTours: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    joinedTours?: boolean | UserCountOutputTypeCountJoinedToursArgs
    myTours?: boolean | UserCountOutputTypeCountMyToursArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
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
  export type UserCountOutputTypeCountJoinedToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTourWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMyToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    joinedUsers: number
    gallery: number
    reviews: number
    dates: number
    routes: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    joinedUsers?: boolean | TourCountOutputTypeCountJoinedUsersArgs
    gallery?: boolean | TourCountOutputTypeCountGalleryArgs
    reviews?: boolean | TourCountOutputTypeCountReviewsArgs
    dates?: boolean | TourCountOutputTypeCountDatesArgs
    routes?: boolean | TourCountOutputTypeCountRoutesArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountJoinedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTourWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourDateWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourRouteWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    name: string | null
    password: string | null
    contact: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    hikingExperience: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    contact: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    hikingExperience: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    contact: number
    role: number
    createdAt: number
    updatedAt: number
    hikingExperience: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    contact?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    hikingExperience?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    contact?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    hikingExperience?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    contact?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    hikingExperience?: true
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
    email: string
    name: string | null
    password: string
    contact: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    hikingExperience: string | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    contact?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hikingExperience?: boolean
    joinedTours?: boolean | User$joinedToursArgs<ExtArgs>
    myTours?: boolean | User$myToursArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    contact?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hikingExperience?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    contact?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hikingExperience?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    contact?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hikingExperience?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "contact" | "role" | "createdAt" | "updatedAt" | "hikingExperience", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    joinedTours?: boolean | User$joinedToursArgs<ExtArgs>
    myTours?: boolean | User$myToursArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      joinedTours: Prisma.$UserTourPayload<ExtArgs>[]
      myTours: Prisma.$TourPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      contact: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      hikingExperience: string | null
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
    joinedTours<T extends User$joinedToursArgs<ExtArgs> = {}>(args?: Subset<T, User$joinedToursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    myTours<T extends User$myToursArgs<ExtArgs> = {}>(args?: Subset<T, User$myToursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly hikingExperience: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.joinedTours
   */
  export type User$joinedToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    where?: UserTourWhereInput
    orderBy?: UserTourOrderByWithRelationInput | UserTourOrderByWithRelationInput[]
    cursor?: UserTourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTourScalarFieldEnum | UserTourScalarFieldEnum[]
  }

  /**
   * User.myTours
   */
  export type User$myToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
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
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    price: number | null
    rating: number | null
    noOfUsersRated: number | null
    distanceInKm: number | null
    durationInHrs: number | null
    minGroupSize: number | null
    maxGroupSize: number | null
    startingLat: number | null
    startingLng: number | null
    endingLat: number | null
    endingLng: number | null
  }

  export type TourSumAggregateOutputType = {
    price: number | null
    rating: number | null
    noOfUsersRated: number | null
    distanceInKm: number | null
    durationInHrs: number | null
    minGroupSize: number | null
    maxGroupSize: number | null
    startingLat: number | null
    startingLng: number | null
    endingLat: number | null
    endingLng: number | null
  }

  export type TourMinAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    description: string | null
    price: number | null
    rating: number | null
    noOfUsersRated: number | null
    difficulty: $Enums.Difficulty | null
    distanceInKm: number | null
    durationInHrs: number | null
    altitude: string | null
    season: string | null
    minGroupSize: number | null
    maxGroupSize: number | null
    startingLat: number | null
    startingLng: number | null
    endingLat: number | null
    endingLng: number | null
    route: string | null
    cancellationPolicy: string | null
    meetingPoint: string | null
    meetingPointUrl: string | null
    meetingTime: string | null
    scheduledDate: Date | null
    thumbnailUrl: string | null
    isActive: boolean | null
    tourType: $Enums.TourType | null
    guideId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: string | null
    title: string | null
    location: string | null
    description: string | null
    price: number | null
    rating: number | null
    noOfUsersRated: number | null
    difficulty: $Enums.Difficulty | null
    distanceInKm: number | null
    durationInHrs: number | null
    altitude: string | null
    season: string | null
    minGroupSize: number | null
    maxGroupSize: number | null
    startingLat: number | null
    startingLng: number | null
    endingLat: number | null
    endingLng: number | null
    route: string | null
    cancellationPolicy: string | null
    meetingPoint: string | null
    meetingPointUrl: string | null
    meetingTime: string | null
    scheduledDate: Date | null
    thumbnailUrl: string | null
    isActive: boolean | null
    tourType: $Enums.TourType | null
    guideId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    title: number
    location: number
    description: number
    price: number
    rating: number
    noOfUsersRated: number
    difficulty: number
    distanceInKm: number
    durationInHrs: number
    altitude: number
    season: number
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat: number
    endingLng: number
    route: number
    highlights: number
    itinerary: number
    feeIncluded: number
    feeNotIncluded: number
    hikingEssentials: number
    cancellationPolicy: number
    meetingPoint: number
    meetingPointUrl: number
    meetingTime: number
    contactDetails: number
    scheduledDate: number
    thumbnailUrl: number
    tags: number
    isActive: number
    tourType: number
    guideId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    price?: true
    rating?: true
    noOfUsersRated?: true
    distanceInKm?: true
    durationInHrs?: true
    minGroupSize?: true
    maxGroupSize?: true
    startingLat?: true
    startingLng?: true
    endingLat?: true
    endingLng?: true
  }

  export type TourSumAggregateInputType = {
    price?: true
    rating?: true
    noOfUsersRated?: true
    distanceInKm?: true
    durationInHrs?: true
    minGroupSize?: true
    maxGroupSize?: true
    startingLat?: true
    startingLng?: true
    endingLat?: true
    endingLng?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    description?: true
    price?: true
    rating?: true
    noOfUsersRated?: true
    difficulty?: true
    distanceInKm?: true
    durationInHrs?: true
    altitude?: true
    season?: true
    minGroupSize?: true
    maxGroupSize?: true
    startingLat?: true
    startingLng?: true
    endingLat?: true
    endingLng?: true
    route?: true
    cancellationPolicy?: true
    meetingPoint?: true
    meetingPointUrl?: true
    meetingTime?: true
    scheduledDate?: true
    thumbnailUrl?: true
    isActive?: true
    tourType?: true
    guideId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    description?: true
    price?: true
    rating?: true
    noOfUsersRated?: true
    difficulty?: true
    distanceInKm?: true
    durationInHrs?: true
    altitude?: true
    season?: true
    minGroupSize?: true
    maxGroupSize?: true
    startingLat?: true
    startingLng?: true
    endingLat?: true
    endingLng?: true
    route?: true
    cancellationPolicy?: true
    meetingPoint?: true
    meetingPointUrl?: true
    meetingTime?: true
    scheduledDate?: true
    thumbnailUrl?: true
    isActive?: true
    tourType?: true
    guideId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    description?: true
    price?: true
    rating?: true
    noOfUsersRated?: true
    difficulty?: true
    distanceInKm?: true
    durationInHrs?: true
    altitude?: true
    season?: true
    minGroupSize?: true
    maxGroupSize?: true
    startingLat?: true
    startingLng?: true
    endingLat?: true
    endingLng?: true
    route?: true
    highlights?: true
    itinerary?: true
    feeIncluded?: true
    feeNotIncluded?: true
    hikingEssentials?: true
    cancellationPolicy?: true
    meetingPoint?: true
    meetingPointUrl?: true
    meetingTime?: true
    contactDetails?: true
    scheduledDate?: true
    thumbnailUrl?: true
    tags?: true
    isActive?: true
    tourType?: true
    guideId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: string
    title: string
    location: string
    description: string
    price: number
    rating: number
    noOfUsersRated: number
    difficulty: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat: number | null
    endingLng: number | null
    route: string
    highlights: JsonValue
    itinerary: JsonValue
    feeIncluded: JsonValue
    feeNotIncluded: JsonValue
    hikingEssentials: JsonValue
    cancellationPolicy: string | null
    meetingPoint: string | null
    meetingPointUrl: string | null
    meetingTime: string | null
    contactDetails: JsonValue | null
    scheduledDate: Date | null
    thumbnailUrl: string
    tags: JsonValue
    isActive: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt: Date
    updatedAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    description?: boolean
    price?: boolean
    rating?: boolean
    noOfUsersRated?: boolean
    difficulty?: boolean
    distanceInKm?: boolean
    durationInHrs?: boolean
    altitude?: boolean
    season?: boolean
    minGroupSize?: boolean
    maxGroupSize?: boolean
    startingLat?: boolean
    startingLng?: boolean
    endingLat?: boolean
    endingLng?: boolean
    route?: boolean
    highlights?: boolean
    itinerary?: boolean
    feeIncluded?: boolean
    feeNotIncluded?: boolean
    hikingEssentials?: boolean
    cancellationPolicy?: boolean
    meetingPoint?: boolean
    meetingPointUrl?: boolean
    meetingTime?: boolean
    contactDetails?: boolean
    scheduledDate?: boolean
    thumbnailUrl?: boolean
    tags?: boolean
    isActive?: boolean
    tourType?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | UserDefaultArgs<ExtArgs>
    joinedUsers?: boolean | Tour$joinedUsersArgs<ExtArgs>
    gallery?: boolean | Tour$galleryArgs<ExtArgs>
    reviews?: boolean | Tour$reviewsArgs<ExtArgs>
    dates?: boolean | Tour$datesArgs<ExtArgs>
    routes?: boolean | Tour$routesArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    description?: boolean
    price?: boolean
    rating?: boolean
    noOfUsersRated?: boolean
    difficulty?: boolean
    distanceInKm?: boolean
    durationInHrs?: boolean
    altitude?: boolean
    season?: boolean
    minGroupSize?: boolean
    maxGroupSize?: boolean
    startingLat?: boolean
    startingLng?: boolean
    endingLat?: boolean
    endingLng?: boolean
    route?: boolean
    highlights?: boolean
    itinerary?: boolean
    feeIncluded?: boolean
    feeNotIncluded?: boolean
    hikingEssentials?: boolean
    cancellationPolicy?: boolean
    meetingPoint?: boolean
    meetingPointUrl?: boolean
    meetingTime?: boolean
    contactDetails?: boolean
    scheduledDate?: boolean
    thumbnailUrl?: boolean
    tags?: boolean
    isActive?: boolean
    tourType?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    description?: boolean
    price?: boolean
    rating?: boolean
    noOfUsersRated?: boolean
    difficulty?: boolean
    distanceInKm?: boolean
    durationInHrs?: boolean
    altitude?: boolean
    season?: boolean
    minGroupSize?: boolean
    maxGroupSize?: boolean
    startingLat?: boolean
    startingLng?: boolean
    endingLat?: boolean
    endingLng?: boolean
    route?: boolean
    highlights?: boolean
    itinerary?: boolean
    feeIncluded?: boolean
    feeNotIncluded?: boolean
    hikingEssentials?: boolean
    cancellationPolicy?: boolean
    meetingPoint?: boolean
    meetingPointUrl?: boolean
    meetingTime?: boolean
    contactDetails?: boolean
    scheduledDate?: boolean
    thumbnailUrl?: boolean
    tags?: boolean
    isActive?: boolean
    tourType?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    description?: boolean
    price?: boolean
    rating?: boolean
    noOfUsersRated?: boolean
    difficulty?: boolean
    distanceInKm?: boolean
    durationInHrs?: boolean
    altitude?: boolean
    season?: boolean
    minGroupSize?: boolean
    maxGroupSize?: boolean
    startingLat?: boolean
    startingLng?: boolean
    endingLat?: boolean
    endingLng?: boolean
    route?: boolean
    highlights?: boolean
    itinerary?: boolean
    feeIncluded?: boolean
    feeNotIncluded?: boolean
    hikingEssentials?: boolean
    cancellationPolicy?: boolean
    meetingPoint?: boolean
    meetingPointUrl?: boolean
    meetingTime?: boolean
    contactDetails?: boolean
    scheduledDate?: boolean
    thumbnailUrl?: boolean
    tags?: boolean
    isActive?: boolean
    tourType?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "description" | "price" | "rating" | "noOfUsersRated" | "difficulty" | "distanceInKm" | "durationInHrs" | "altitude" | "season" | "minGroupSize" | "maxGroupSize" | "startingLat" | "startingLng" | "endingLat" | "endingLng" | "route" | "highlights" | "itinerary" | "feeIncluded" | "feeNotIncluded" | "hikingEssentials" | "cancellationPolicy" | "meetingPoint" | "meetingPointUrl" | "meetingTime" | "contactDetails" | "scheduledDate" | "thumbnailUrl" | "tags" | "isActive" | "tourType" | "guideId" | "createdAt" | "updatedAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | UserDefaultArgs<ExtArgs>
    joinedUsers?: boolean | Tour$joinedUsersArgs<ExtArgs>
    gallery?: boolean | Tour$galleryArgs<ExtArgs>
    reviews?: boolean | Tour$reviewsArgs<ExtArgs>
    dates?: boolean | Tour$datesArgs<ExtArgs>
    routes?: boolean | Tour$routesArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      guide: Prisma.$UserPayload<ExtArgs>
      joinedUsers: Prisma.$UserTourPayload<ExtArgs>[]
      gallery: Prisma.$GalleryPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      dates: Prisma.$TourDatePayload<ExtArgs>[]
      routes: Prisma.$TourRoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      location: string
      description: string
      price: number
      rating: number
      noOfUsersRated: number
      difficulty: $Enums.Difficulty
      distanceInKm: number
      durationInHrs: number
      altitude: string
      season: string
      minGroupSize: number
      maxGroupSize: number
      startingLat: number
      startingLng: number
      endingLat: number | null
      endingLng: number | null
      route: string
      highlights: Prisma.JsonValue
      itinerary: Prisma.JsonValue
      feeIncluded: Prisma.JsonValue
      feeNotIncluded: Prisma.JsonValue
      hikingEssentials: Prisma.JsonValue
      cancellationPolicy: string | null
      meetingPoint: string | null
      meetingPointUrl: string | null
      meetingTime: string | null
      contactDetails: Prisma.JsonValue | null
      scheduledDate: Date | null
      thumbnailUrl: string
      tags: Prisma.JsonValue
      isActive: boolean
      tourType: $Enums.TourType
      guideId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
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
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guide<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    joinedUsers<T extends Tour$joinedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Tour$joinedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gallery<T extends Tour$galleryArgs<ExtArgs> = {}>(args?: Subset<T, Tour$galleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Tour$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dates<T extends Tour$datesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$datesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends Tour$routesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'String'>
    readonly title: FieldRef<"Tour", 'String'>
    readonly location: FieldRef<"Tour", 'String'>
    readonly description: FieldRef<"Tour", 'String'>
    readonly price: FieldRef<"Tour", 'Int'>
    readonly rating: FieldRef<"Tour", 'Float'>
    readonly noOfUsersRated: FieldRef<"Tour", 'Int'>
    readonly difficulty: FieldRef<"Tour", 'Difficulty'>
    readonly distanceInKm: FieldRef<"Tour", 'Float'>
    readonly durationInHrs: FieldRef<"Tour", 'Float'>
    readonly altitude: FieldRef<"Tour", 'String'>
    readonly season: FieldRef<"Tour", 'String'>
    readonly minGroupSize: FieldRef<"Tour", 'Int'>
    readonly maxGroupSize: FieldRef<"Tour", 'Int'>
    readonly startingLat: FieldRef<"Tour", 'Float'>
    readonly startingLng: FieldRef<"Tour", 'Float'>
    readonly endingLat: FieldRef<"Tour", 'Float'>
    readonly endingLng: FieldRef<"Tour", 'Float'>
    readonly route: FieldRef<"Tour", 'String'>
    readonly highlights: FieldRef<"Tour", 'Json'>
    readonly itinerary: FieldRef<"Tour", 'Json'>
    readonly feeIncluded: FieldRef<"Tour", 'Json'>
    readonly feeNotIncluded: FieldRef<"Tour", 'Json'>
    readonly hikingEssentials: FieldRef<"Tour", 'Json'>
    readonly cancellationPolicy: FieldRef<"Tour", 'String'>
    readonly meetingPoint: FieldRef<"Tour", 'String'>
    readonly meetingPointUrl: FieldRef<"Tour", 'String'>
    readonly meetingTime: FieldRef<"Tour", 'String'>
    readonly contactDetails: FieldRef<"Tour", 'Json'>
    readonly scheduledDate: FieldRef<"Tour", 'DateTime'>
    readonly thumbnailUrl: FieldRef<"Tour", 'String'>
    readonly tags: FieldRef<"Tour", 'Json'>
    readonly isActive: FieldRef<"Tour", 'Boolean'>
    readonly tourType: FieldRef<"Tour", 'TourType'>
    readonly guideId: FieldRef<"Tour", 'String'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
    readonly updatedAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.joinedUsers
   */
  export type Tour$joinedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    where?: UserTourWhereInput
    orderBy?: UserTourOrderByWithRelationInput | UserTourOrderByWithRelationInput[]
    cursor?: UserTourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTourScalarFieldEnum | UserTourScalarFieldEnum[]
  }

  /**
   * Tour.gallery
   */
  export type Tour$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    cursor?: GalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Tour.reviews
   */
  export type Tour$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Tour.dates
   */
  export type Tour$datesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    where?: TourDateWhereInput
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    cursor?: TourDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * Tour.routes
   */
  export type Tour$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    where?: TourRouteWhereInput
    orderBy?: TourRouteOrderByWithRelationInput | TourRouteOrderByWithRelationInput[]
    cursor?: TourRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourRouteScalarFieldEnum | TourRouteScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model UserTour
   */

  export type AggregateUserTour = {
    _count: UserTourCountAggregateOutputType | null
    _min: UserTourMinAggregateOutputType | null
    _max: UserTourMaxAggregateOutputType | null
  }

  export type UserTourMinAggregateOutputType = {
    userId: string | null
    tourId: string | null
    joinedAt: Date | null
  }

  export type UserTourMaxAggregateOutputType = {
    userId: string | null
    tourId: string | null
    joinedAt: Date | null
  }

  export type UserTourCountAggregateOutputType = {
    userId: number
    tourId: number
    joinedAt: number
    _all: number
  }


  export type UserTourMinAggregateInputType = {
    userId?: true
    tourId?: true
    joinedAt?: true
  }

  export type UserTourMaxAggregateInputType = {
    userId?: true
    tourId?: true
    joinedAt?: true
  }

  export type UserTourCountAggregateInputType = {
    userId?: true
    tourId?: true
    joinedAt?: true
    _all?: true
  }

  export type UserTourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTour to aggregate.
     */
    where?: UserTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTours to fetch.
     */
    orderBy?: UserTourOrderByWithRelationInput | UserTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTours
    **/
    _count?: true | UserTourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTourMaxAggregateInputType
  }

  export type GetUserTourAggregateType<T extends UserTourAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTour[P]>
      : GetScalarType<T[P], AggregateUserTour[P]>
  }




  export type UserTourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTourWhereInput
    orderBy?: UserTourOrderByWithAggregationInput | UserTourOrderByWithAggregationInput[]
    by: UserTourScalarFieldEnum[] | UserTourScalarFieldEnum
    having?: UserTourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTourCountAggregateInputType | true
    _min?: UserTourMinAggregateInputType
    _max?: UserTourMaxAggregateInputType
  }

  export type UserTourGroupByOutputType = {
    userId: string
    tourId: string
    joinedAt: Date
    _count: UserTourCountAggregateOutputType | null
    _min: UserTourMinAggregateOutputType | null
    _max: UserTourMaxAggregateOutputType | null
  }

  type GetUserTourGroupByPayload<T extends UserTourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTourGroupByOutputType[P]>
            : GetScalarType<T[P], UserTourGroupByOutputType[P]>
        }
      >
    >


  export type UserTourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    tourId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTour"]>

  export type UserTourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    tourId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTour"]>

  export type UserTourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    tourId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTour"]>

  export type UserTourSelectScalar = {
    userId?: boolean
    tourId?: boolean
    joinedAt?: boolean
  }

  export type UserTourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "tourId" | "joinedAt", ExtArgs["result"]["userTour"]>
  export type UserTourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type UserTourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type UserTourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $UserTourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTour"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      tourId: string
      joinedAt: Date
    }, ExtArgs["result"]["userTour"]>
    composites: {}
  }

  type UserTourGetPayload<S extends boolean | null | undefined | UserTourDefaultArgs> = $Result.GetResult<Prisma.$UserTourPayload, S>

  type UserTourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTourCountAggregateInputType | true
    }

  export interface UserTourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTour'], meta: { name: 'UserTour' } }
    /**
     * Find zero or one UserTour that matches the filter.
     * @param {UserTourFindUniqueArgs} args - Arguments to find a UserTour
     * @example
     * // Get one UserTour
     * const userTour = await prisma.userTour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTourFindUniqueArgs>(args: SelectSubset<T, UserTourFindUniqueArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTourFindUniqueOrThrowArgs} args - Arguments to find a UserTour
     * @example
     * // Get one UserTour
     * const userTour = await prisma.userTour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTourFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourFindFirstArgs} args - Arguments to find a UserTour
     * @example
     * // Get one UserTour
     * const userTour = await prisma.userTour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTourFindFirstArgs>(args?: SelectSubset<T, UserTourFindFirstArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourFindFirstOrThrowArgs} args - Arguments to find a UserTour
     * @example
     * // Get one UserTour
     * const userTour = await prisma.userTour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTourFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTourFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTours
     * const userTours = await prisma.userTour.findMany()
     * 
     * // Get first 10 UserTours
     * const userTours = await prisma.userTour.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userTourWithUserIdOnly = await prisma.userTour.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserTourFindManyArgs>(args?: SelectSubset<T, UserTourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTour.
     * @param {UserTourCreateArgs} args - Arguments to create a UserTour.
     * @example
     * // Create one UserTour
     * const UserTour = await prisma.userTour.create({
     *   data: {
     *     // ... data to create a UserTour
     *   }
     * })
     * 
     */
    create<T extends UserTourCreateArgs>(args: SelectSubset<T, UserTourCreateArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTours.
     * @param {UserTourCreateManyArgs} args - Arguments to create many UserTours.
     * @example
     * // Create many UserTours
     * const userTour = await prisma.userTour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTourCreateManyArgs>(args?: SelectSubset<T, UserTourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTours and returns the data saved in the database.
     * @param {UserTourCreateManyAndReturnArgs} args - Arguments to create many UserTours.
     * @example
     * // Create many UserTours
     * const userTour = await prisma.userTour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTours and only return the `userId`
     * const userTourWithUserIdOnly = await prisma.userTour.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTourCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTour.
     * @param {UserTourDeleteArgs} args - Arguments to delete one UserTour.
     * @example
     * // Delete one UserTour
     * const UserTour = await prisma.userTour.delete({
     *   where: {
     *     // ... filter to delete one UserTour
     *   }
     * })
     * 
     */
    delete<T extends UserTourDeleteArgs>(args: SelectSubset<T, UserTourDeleteArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTour.
     * @param {UserTourUpdateArgs} args - Arguments to update one UserTour.
     * @example
     * // Update one UserTour
     * const userTour = await prisma.userTour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTourUpdateArgs>(args: SelectSubset<T, UserTourUpdateArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTours.
     * @param {UserTourDeleteManyArgs} args - Arguments to filter UserTours to delete.
     * @example
     * // Delete a few UserTours
     * const { count } = await prisma.userTour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTourDeleteManyArgs>(args?: SelectSubset<T, UserTourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTours
     * const userTour = await prisma.userTour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTourUpdateManyArgs>(args: SelectSubset<T, UserTourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTours and returns the data updated in the database.
     * @param {UserTourUpdateManyAndReturnArgs} args - Arguments to update many UserTours.
     * @example
     * // Update many UserTours
     * const userTour = await prisma.userTour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTours and only return the `userId`
     * const userTourWithUserIdOnly = await prisma.userTour.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserTourUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTour.
     * @param {UserTourUpsertArgs} args - Arguments to update or create a UserTour.
     * @example
     * // Update or create a UserTour
     * const userTour = await prisma.userTour.upsert({
     *   create: {
     *     // ... data to create a UserTour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTour we want to update
     *   }
     * })
     */
    upsert<T extends UserTourUpsertArgs>(args: SelectSubset<T, UserTourUpsertArgs<ExtArgs>>): Prisma__UserTourClient<$Result.GetResult<Prisma.$UserTourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourCountArgs} args - Arguments to filter UserTours to count.
     * @example
     * // Count the number of UserTours
     * const count = await prisma.userTour.count({
     *   where: {
     *     // ... the filter for the UserTours we want to count
     *   }
     * })
    **/
    count<T extends UserTourCountArgs>(
      args?: Subset<T, UserTourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTourAggregateArgs>(args: Subset<T, UserTourAggregateArgs>): Prisma.PrismaPromise<GetUserTourAggregateType<T>>

    /**
     * Group by UserTour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTourGroupByArgs} args - Group by arguments.
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
      T extends UserTourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTourGroupByArgs['orderBy'] }
        : { orderBy?: UserTourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTour model
   */
  readonly fields: UserTourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserTour model
   */
  interface UserTourFieldRefs {
    readonly userId: FieldRef<"UserTour", 'String'>
    readonly tourId: FieldRef<"UserTour", 'String'>
    readonly joinedAt: FieldRef<"UserTour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTour findUnique
   */
  export type UserTourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * Filter, which UserTour to fetch.
     */
    where: UserTourWhereUniqueInput
  }

  /**
   * UserTour findUniqueOrThrow
   */
  export type UserTourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * Filter, which UserTour to fetch.
     */
    where: UserTourWhereUniqueInput
  }

  /**
   * UserTour findFirst
   */
  export type UserTourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * Filter, which UserTour to fetch.
     */
    where?: UserTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTours to fetch.
     */
    orderBy?: UserTourOrderByWithRelationInput | UserTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTours.
     */
    cursor?: UserTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTours.
     */
    distinct?: UserTourScalarFieldEnum | UserTourScalarFieldEnum[]
  }

  /**
   * UserTour findFirstOrThrow
   */
  export type UserTourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * Filter, which UserTour to fetch.
     */
    where?: UserTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTours to fetch.
     */
    orderBy?: UserTourOrderByWithRelationInput | UserTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTours.
     */
    cursor?: UserTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTours.
     */
    distinct?: UserTourScalarFieldEnum | UserTourScalarFieldEnum[]
  }

  /**
   * UserTour findMany
   */
  export type UserTourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * Filter, which UserTours to fetch.
     */
    where?: UserTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTours to fetch.
     */
    orderBy?: UserTourOrderByWithRelationInput | UserTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTours.
     */
    cursor?: UserTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTours.
     */
    skip?: number
    distinct?: UserTourScalarFieldEnum | UserTourScalarFieldEnum[]
  }

  /**
   * UserTour create
   */
  export type UserTourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTour.
     */
    data: XOR<UserTourCreateInput, UserTourUncheckedCreateInput>
  }

  /**
   * UserTour createMany
   */
  export type UserTourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTours.
     */
    data: UserTourCreateManyInput | UserTourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTour createManyAndReturn
   */
  export type UserTourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * The data used to create many UserTours.
     */
    data: UserTourCreateManyInput | UserTourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTour update
   */
  export type UserTourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTour.
     */
    data: XOR<UserTourUpdateInput, UserTourUncheckedUpdateInput>
    /**
     * Choose, which UserTour to update.
     */
    where: UserTourWhereUniqueInput
  }

  /**
   * UserTour updateMany
   */
  export type UserTourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTours.
     */
    data: XOR<UserTourUpdateManyMutationInput, UserTourUncheckedUpdateManyInput>
    /**
     * Filter which UserTours to update
     */
    where?: UserTourWhereInput
    /**
     * Limit how many UserTours to update.
     */
    limit?: number
  }

  /**
   * UserTour updateManyAndReturn
   */
  export type UserTourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * The data used to update UserTours.
     */
    data: XOR<UserTourUpdateManyMutationInput, UserTourUncheckedUpdateManyInput>
    /**
     * Filter which UserTours to update
     */
    where?: UserTourWhereInput
    /**
     * Limit how many UserTours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTour upsert
   */
  export type UserTourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTour to update in case it exists.
     */
    where: UserTourWhereUniqueInput
    /**
     * In case the UserTour found by the `where` argument doesn't exist, create a new UserTour with this data.
     */
    create: XOR<UserTourCreateInput, UserTourUncheckedCreateInput>
    /**
     * In case the UserTour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTourUpdateInput, UserTourUncheckedUpdateInput>
  }

  /**
   * UserTour delete
   */
  export type UserTourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
    /**
     * Filter which UserTour to delete.
     */
    where: UserTourWhereUniqueInput
  }

  /**
   * UserTour deleteMany
   */
  export type UserTourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTours to delete
     */
    where?: UserTourWhereInput
    /**
     * Limit how many UserTours to delete.
     */
    limit?: number
  }

  /**
   * UserTour without action
   */
  export type UserTourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTour
     */
    select?: UserTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTour
     */
    omit?: UserTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTourInclude<ExtArgs> | null
  }


  /**
   * Model TourDate
   */

  export type AggregateTourDate = {
    _count: TourDateCountAggregateOutputType | null
    _min: TourDateMinAggregateOutputType | null
    _max: TourDateMaxAggregateOutputType | null
  }

  export type TourDateMinAggregateOutputType = {
    id: string | null
    date: Date | null
    deadline: Date | null
    tourId: string | null
  }

  export type TourDateMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    deadline: Date | null
    tourId: string | null
  }

  export type TourDateCountAggregateOutputType = {
    id: number
    date: number
    deadline: number
    tourId: number
    _all: number
  }


  export type TourDateMinAggregateInputType = {
    id?: true
    date?: true
    deadline?: true
    tourId?: true
  }

  export type TourDateMaxAggregateInputType = {
    id?: true
    date?: true
    deadline?: true
    tourId?: true
  }

  export type TourDateCountAggregateInputType = {
    id?: true
    date?: true
    deadline?: true
    tourId?: true
    _all?: true
  }

  export type TourDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourDate to aggregate.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourDates
    **/
    _count?: true | TourDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourDateMaxAggregateInputType
  }

  export type GetTourDateAggregateType<T extends TourDateAggregateArgs> = {
        [P in keyof T & keyof AggregateTourDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourDate[P]>
      : GetScalarType<T[P], AggregateTourDate[P]>
  }




  export type TourDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourDateWhereInput
    orderBy?: TourDateOrderByWithAggregationInput | TourDateOrderByWithAggregationInput[]
    by: TourDateScalarFieldEnum[] | TourDateScalarFieldEnum
    having?: TourDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourDateCountAggregateInputType | true
    _min?: TourDateMinAggregateInputType
    _max?: TourDateMaxAggregateInputType
  }

  export type TourDateGroupByOutputType = {
    id: string
    date: Date
    deadline: Date | null
    tourId: string
    _count: TourDateCountAggregateOutputType | null
    _min: TourDateMinAggregateOutputType | null
    _max: TourDateMaxAggregateOutputType | null
  }

  type GetTourDateGroupByPayload<T extends TourDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourDateGroupByOutputType[P]>
            : GetScalarType<T[P], TourDateGroupByOutputType[P]>
        }
      >
    >


  export type TourDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    deadline?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    deadline?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    deadline?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectScalar = {
    id?: boolean
    date?: boolean
    deadline?: boolean
    tourId?: boolean
  }

  export type TourDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "deadline" | "tourId", ExtArgs["result"]["tourDate"]>
  export type TourDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourDateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourDateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourDate"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      deadline: Date | null
      tourId: string
    }, ExtArgs["result"]["tourDate"]>
    composites: {}
  }

  type TourDateGetPayload<S extends boolean | null | undefined | TourDateDefaultArgs> = $Result.GetResult<Prisma.$TourDatePayload, S>

  type TourDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourDateCountAggregateInputType | true
    }

  export interface TourDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourDate'], meta: { name: 'TourDate' } }
    /**
     * Find zero or one TourDate that matches the filter.
     * @param {TourDateFindUniqueArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourDateFindUniqueArgs>(args: SelectSubset<T, TourDateFindUniqueArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourDateFindUniqueOrThrowArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourDateFindUniqueOrThrowArgs>(args: SelectSubset<T, TourDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindFirstArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourDateFindFirstArgs>(args?: SelectSubset<T, TourDateFindFirstArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindFirstOrThrowArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourDateFindFirstOrThrowArgs>(args?: SelectSubset<T, TourDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourDates
     * const tourDates = await prisma.tourDate.findMany()
     * 
     * // Get first 10 TourDates
     * const tourDates = await prisma.tourDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourDateFindManyArgs>(args?: SelectSubset<T, TourDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourDate.
     * @param {TourDateCreateArgs} args - Arguments to create a TourDate.
     * @example
     * // Create one TourDate
     * const TourDate = await prisma.tourDate.create({
     *   data: {
     *     // ... data to create a TourDate
     *   }
     * })
     * 
     */
    create<T extends TourDateCreateArgs>(args: SelectSubset<T, TourDateCreateArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourDates.
     * @param {TourDateCreateManyArgs} args - Arguments to create many TourDates.
     * @example
     * // Create many TourDates
     * const tourDate = await prisma.tourDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourDateCreateManyArgs>(args?: SelectSubset<T, TourDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourDates and returns the data saved in the database.
     * @param {TourDateCreateManyAndReturnArgs} args - Arguments to create many TourDates.
     * @example
     * // Create many TourDates
     * const tourDate = await prisma.tourDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourDates and only return the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourDateCreateManyAndReturnArgs>(args?: SelectSubset<T, TourDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourDate.
     * @param {TourDateDeleteArgs} args - Arguments to delete one TourDate.
     * @example
     * // Delete one TourDate
     * const TourDate = await prisma.tourDate.delete({
     *   where: {
     *     // ... filter to delete one TourDate
     *   }
     * })
     * 
     */
    delete<T extends TourDateDeleteArgs>(args: SelectSubset<T, TourDateDeleteArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourDate.
     * @param {TourDateUpdateArgs} args - Arguments to update one TourDate.
     * @example
     * // Update one TourDate
     * const tourDate = await prisma.tourDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourDateUpdateArgs>(args: SelectSubset<T, TourDateUpdateArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourDates.
     * @param {TourDateDeleteManyArgs} args - Arguments to filter TourDates to delete.
     * @example
     * // Delete a few TourDates
     * const { count } = await prisma.tourDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDateDeleteManyArgs>(args?: SelectSubset<T, TourDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourDates
     * const tourDate = await prisma.tourDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourDateUpdateManyArgs>(args: SelectSubset<T, TourDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourDates and returns the data updated in the database.
     * @param {TourDateUpdateManyAndReturnArgs} args - Arguments to update many TourDates.
     * @example
     * // Update many TourDates
     * const tourDate = await prisma.tourDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourDates and only return the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourDateUpdateManyAndReturnArgs>(args: SelectSubset<T, TourDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourDate.
     * @param {TourDateUpsertArgs} args - Arguments to update or create a TourDate.
     * @example
     * // Update or create a TourDate
     * const tourDate = await prisma.tourDate.upsert({
     *   create: {
     *     // ... data to create a TourDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourDate we want to update
     *   }
     * })
     */
    upsert<T extends TourDateUpsertArgs>(args: SelectSubset<T, TourDateUpsertArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateCountArgs} args - Arguments to filter TourDates to count.
     * @example
     * // Count the number of TourDates
     * const count = await prisma.tourDate.count({
     *   where: {
     *     // ... the filter for the TourDates we want to count
     *   }
     * })
    **/
    count<T extends TourDateCountArgs>(
      args?: Subset<T, TourDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourDateAggregateArgs>(args: Subset<T, TourDateAggregateArgs>): Prisma.PrismaPromise<GetTourDateAggregateType<T>>

    /**
     * Group by TourDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateGroupByArgs} args - Group by arguments.
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
      T extends TourDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourDateGroupByArgs['orderBy'] }
        : { orderBy?: TourDateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourDate model
   */
  readonly fields: TourDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TourDate model
   */
  interface TourDateFieldRefs {
    readonly id: FieldRef<"TourDate", 'String'>
    readonly date: FieldRef<"TourDate", 'DateTime'>
    readonly deadline: FieldRef<"TourDate", 'DateTime'>
    readonly tourId: FieldRef<"TourDate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TourDate findUnique
   */
  export type TourDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate findUniqueOrThrow
   */
  export type TourDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate findFirst
   */
  export type TourDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourDates.
     */
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate findFirstOrThrow
   */
  export type TourDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourDates.
     */
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate findMany
   */
  export type TourDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDates to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate create
   */
  export type TourDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * The data needed to create a TourDate.
     */
    data: XOR<TourDateCreateInput, TourDateUncheckedCreateInput>
  }

  /**
   * TourDate createMany
   */
  export type TourDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourDates.
     */
    data: TourDateCreateManyInput | TourDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourDate createManyAndReturn
   */
  export type TourDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data used to create many TourDates.
     */
    data: TourDateCreateManyInput | TourDateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourDate update
   */
  export type TourDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * The data needed to update a TourDate.
     */
    data: XOR<TourDateUpdateInput, TourDateUncheckedUpdateInput>
    /**
     * Choose, which TourDate to update.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate updateMany
   */
  export type TourDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourDates.
     */
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyInput>
    /**
     * Filter which TourDates to update
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to update.
     */
    limit?: number
  }

  /**
   * TourDate updateManyAndReturn
   */
  export type TourDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data used to update TourDates.
     */
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyInput>
    /**
     * Filter which TourDates to update
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourDate upsert
   */
  export type TourDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * The filter to search for the TourDate to update in case it exists.
     */
    where: TourDateWhereUniqueInput
    /**
     * In case the TourDate found by the `where` argument doesn't exist, create a new TourDate with this data.
     */
    create: XOR<TourDateCreateInput, TourDateUncheckedCreateInput>
    /**
     * In case the TourDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourDateUpdateInput, TourDateUncheckedUpdateInput>
  }

  /**
   * TourDate delete
   */
  export type TourDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter which TourDate to delete.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate deleteMany
   */
  export type TourDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourDates to delete
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to delete.
     */
    limit?: number
  }

  /**
   * TourDate without action
   */
  export type TourDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
  }


  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    tourId: string | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    tourId: string | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    imageUrl: number
    tourId: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    id?: true
    imageUrl?: true
    tourId?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    tourId?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    imageUrl?: true
    tourId?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: string
    imageUrl: string
    tourId: string
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    imageUrl?: boolean
    tourId?: boolean
  }

  export type GalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "tourId", ExtArgs["result"]["gallery"]>
  export type GalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type GalleryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type GalleryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      tourId: string
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryFindManyArgs>(args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends GalleryCreateArgs>(args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCreateManyArgs>(args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galleries and returns the data saved in the database.
     * @param {GalleryCreateManyAndReturnArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends GalleryDeleteArgs>(args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryUpdateArgs>(args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryDeleteManyArgs>(args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryUpdateManyArgs>(args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries and returns the data updated in the database.
     * @param {GalleryUpdateManyAndReturnArgs} args - Arguments to update many Galleries.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
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
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'String'>
    readonly imageUrl: FieldRef<"Gallery", 'String'>
    readonly tourId: FieldRef<"Gallery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery createManyAndReturn
   */
  export type GalleryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery updateManyAndReturn
   */
  export type GalleryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number
  }

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
  }


  /**
   * Model TourRoute
   */

  export type AggregateTourRoute = {
    _count: TourRouteCountAggregateOutputType | null
    _min: TourRouteMinAggregateOutputType | null
    _max: TourRouteMaxAggregateOutputType | null
  }

  export type TourRouteMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    tourId: string | null
  }

  export type TourRouteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    tourId: string | null
  }

  export type TourRouteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    latLngs: number
    elevationProfile: number
    tourId: number
    _all: number
  }


  export type TourRouteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    tourId?: true
  }

  export type TourRouteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    tourId?: true
  }

  export type TourRouteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    latLngs?: true
    elevationProfile?: true
    tourId?: true
    _all?: true
  }

  export type TourRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourRoute to aggregate.
     */
    where?: TourRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourRoutes to fetch.
     */
    orderBy?: TourRouteOrderByWithRelationInput | TourRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourRoutes
    **/
    _count?: true | TourRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourRouteMaxAggregateInputType
  }

  export type GetTourRouteAggregateType<T extends TourRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateTourRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourRoute[P]>
      : GetScalarType<T[P], AggregateTourRoute[P]>
  }




  export type TourRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourRouteWhereInput
    orderBy?: TourRouteOrderByWithAggregationInput | TourRouteOrderByWithAggregationInput[]
    by: TourRouteScalarFieldEnum[] | TourRouteScalarFieldEnum
    having?: TourRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourRouteCountAggregateInputType | true
    _min?: TourRouteMinAggregateInputType
    _max?: TourRouteMaxAggregateInputType
  }

  export type TourRouteGroupByOutputType = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    latLngs: JsonValue
    elevationProfile: JsonValue | null
    tourId: string
    _count: TourRouteCountAggregateOutputType | null
    _min: TourRouteMinAggregateOutputType | null
    _max: TourRouteMaxAggregateOutputType | null
  }

  type GetTourRouteGroupByPayload<T extends TourRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourRouteGroupByOutputType[P]>
            : GetScalarType<T[P], TourRouteGroupByOutputType[P]>
        }
      >
    >


  export type TourRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    latLngs?: boolean
    elevationProfile?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourRoute"]>

  export type TourRouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    latLngs?: boolean
    elevationProfile?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourRoute"]>

  export type TourRouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    latLngs?: boolean
    elevationProfile?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourRoute"]>

  export type TourRouteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    latLngs?: boolean
    elevationProfile?: boolean
    tourId?: boolean
  }

  export type TourRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "latLngs" | "elevationProfile" | "tourId", ExtArgs["result"]["tourRoute"]>
  export type TourRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourRouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourRouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourRoute"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      imageUrl: string | null
      latLngs: Prisma.JsonValue
      elevationProfile: Prisma.JsonValue | null
      tourId: string
    }, ExtArgs["result"]["tourRoute"]>
    composites: {}
  }

  type TourRouteGetPayload<S extends boolean | null | undefined | TourRouteDefaultArgs> = $Result.GetResult<Prisma.$TourRoutePayload, S>

  type TourRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourRouteCountAggregateInputType | true
    }

  export interface TourRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourRoute'], meta: { name: 'TourRoute' } }
    /**
     * Find zero or one TourRoute that matches the filter.
     * @param {TourRouteFindUniqueArgs} args - Arguments to find a TourRoute
     * @example
     * // Get one TourRoute
     * const tourRoute = await prisma.tourRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourRouteFindUniqueArgs>(args: SelectSubset<T, TourRouteFindUniqueArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourRouteFindUniqueOrThrowArgs} args - Arguments to find a TourRoute
     * @example
     * // Get one TourRoute
     * const tourRoute = await prisma.tourRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, TourRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteFindFirstArgs} args - Arguments to find a TourRoute
     * @example
     * // Get one TourRoute
     * const tourRoute = await prisma.tourRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourRouteFindFirstArgs>(args?: SelectSubset<T, TourRouteFindFirstArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteFindFirstOrThrowArgs} args - Arguments to find a TourRoute
     * @example
     * // Get one TourRoute
     * const tourRoute = await prisma.tourRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, TourRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourRoutes
     * const tourRoutes = await prisma.tourRoute.findMany()
     * 
     * // Get first 10 TourRoutes
     * const tourRoutes = await prisma.tourRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourRouteWithIdOnly = await prisma.tourRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourRouteFindManyArgs>(args?: SelectSubset<T, TourRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourRoute.
     * @param {TourRouteCreateArgs} args - Arguments to create a TourRoute.
     * @example
     * // Create one TourRoute
     * const TourRoute = await prisma.tourRoute.create({
     *   data: {
     *     // ... data to create a TourRoute
     *   }
     * })
     * 
     */
    create<T extends TourRouteCreateArgs>(args: SelectSubset<T, TourRouteCreateArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourRoutes.
     * @param {TourRouteCreateManyArgs} args - Arguments to create many TourRoutes.
     * @example
     * // Create many TourRoutes
     * const tourRoute = await prisma.tourRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourRouteCreateManyArgs>(args?: SelectSubset<T, TourRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourRoutes and returns the data saved in the database.
     * @param {TourRouteCreateManyAndReturnArgs} args - Arguments to create many TourRoutes.
     * @example
     * // Create many TourRoutes
     * const tourRoute = await prisma.tourRoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourRoutes and only return the `id`
     * const tourRouteWithIdOnly = await prisma.tourRoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourRouteCreateManyAndReturnArgs>(args?: SelectSubset<T, TourRouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourRoute.
     * @param {TourRouteDeleteArgs} args - Arguments to delete one TourRoute.
     * @example
     * // Delete one TourRoute
     * const TourRoute = await prisma.tourRoute.delete({
     *   where: {
     *     // ... filter to delete one TourRoute
     *   }
     * })
     * 
     */
    delete<T extends TourRouteDeleteArgs>(args: SelectSubset<T, TourRouteDeleteArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourRoute.
     * @param {TourRouteUpdateArgs} args - Arguments to update one TourRoute.
     * @example
     * // Update one TourRoute
     * const tourRoute = await prisma.tourRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourRouteUpdateArgs>(args: SelectSubset<T, TourRouteUpdateArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourRoutes.
     * @param {TourRouteDeleteManyArgs} args - Arguments to filter TourRoutes to delete.
     * @example
     * // Delete a few TourRoutes
     * const { count } = await prisma.tourRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourRouteDeleteManyArgs>(args?: SelectSubset<T, TourRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourRoutes
     * const tourRoute = await prisma.tourRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourRouteUpdateManyArgs>(args: SelectSubset<T, TourRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourRoutes and returns the data updated in the database.
     * @param {TourRouteUpdateManyAndReturnArgs} args - Arguments to update many TourRoutes.
     * @example
     * // Update many TourRoutes
     * const tourRoute = await prisma.tourRoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourRoutes and only return the `id`
     * const tourRouteWithIdOnly = await prisma.tourRoute.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourRouteUpdateManyAndReturnArgs>(args: SelectSubset<T, TourRouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourRoute.
     * @param {TourRouteUpsertArgs} args - Arguments to update or create a TourRoute.
     * @example
     * // Update or create a TourRoute
     * const tourRoute = await prisma.tourRoute.upsert({
     *   create: {
     *     // ... data to create a TourRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourRoute we want to update
     *   }
     * })
     */
    upsert<T extends TourRouteUpsertArgs>(args: SelectSubset<T, TourRouteUpsertArgs<ExtArgs>>): Prisma__TourRouteClient<$Result.GetResult<Prisma.$TourRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteCountArgs} args - Arguments to filter TourRoutes to count.
     * @example
     * // Count the number of TourRoutes
     * const count = await prisma.tourRoute.count({
     *   where: {
     *     // ... the filter for the TourRoutes we want to count
     *   }
     * })
    **/
    count<T extends TourRouteCountArgs>(
      args?: Subset<T, TourRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourRouteAggregateArgs>(args: Subset<T, TourRouteAggregateArgs>): Prisma.PrismaPromise<GetTourRouteAggregateType<T>>

    /**
     * Group by TourRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourRouteGroupByArgs} args - Group by arguments.
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
      T extends TourRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourRouteGroupByArgs['orderBy'] }
        : { orderBy?: TourRouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourRoute model
   */
  readonly fields: TourRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TourRoute model
   */
  interface TourRouteFieldRefs {
    readonly id: FieldRef<"TourRoute", 'String'>
    readonly name: FieldRef<"TourRoute", 'String'>
    readonly description: FieldRef<"TourRoute", 'String'>
    readonly imageUrl: FieldRef<"TourRoute", 'String'>
    readonly latLngs: FieldRef<"TourRoute", 'Json'>
    readonly elevationProfile: FieldRef<"TourRoute", 'Json'>
    readonly tourId: FieldRef<"TourRoute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TourRoute findUnique
   */
  export type TourRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * Filter, which TourRoute to fetch.
     */
    where: TourRouteWhereUniqueInput
  }

  /**
   * TourRoute findUniqueOrThrow
   */
  export type TourRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * Filter, which TourRoute to fetch.
     */
    where: TourRouteWhereUniqueInput
  }

  /**
   * TourRoute findFirst
   */
  export type TourRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * Filter, which TourRoute to fetch.
     */
    where?: TourRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourRoutes to fetch.
     */
    orderBy?: TourRouteOrderByWithRelationInput | TourRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourRoutes.
     */
    cursor?: TourRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourRoutes.
     */
    distinct?: TourRouteScalarFieldEnum | TourRouteScalarFieldEnum[]
  }

  /**
   * TourRoute findFirstOrThrow
   */
  export type TourRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * Filter, which TourRoute to fetch.
     */
    where?: TourRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourRoutes to fetch.
     */
    orderBy?: TourRouteOrderByWithRelationInput | TourRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourRoutes.
     */
    cursor?: TourRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourRoutes.
     */
    distinct?: TourRouteScalarFieldEnum | TourRouteScalarFieldEnum[]
  }

  /**
   * TourRoute findMany
   */
  export type TourRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * Filter, which TourRoutes to fetch.
     */
    where?: TourRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourRoutes to fetch.
     */
    orderBy?: TourRouteOrderByWithRelationInput | TourRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourRoutes.
     */
    cursor?: TourRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourRoutes.
     */
    skip?: number
    distinct?: TourRouteScalarFieldEnum | TourRouteScalarFieldEnum[]
  }

  /**
   * TourRoute create
   */
  export type TourRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a TourRoute.
     */
    data: XOR<TourRouteCreateInput, TourRouteUncheckedCreateInput>
  }

  /**
   * TourRoute createMany
   */
  export type TourRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourRoutes.
     */
    data: TourRouteCreateManyInput | TourRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourRoute createManyAndReturn
   */
  export type TourRouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * The data used to create many TourRoutes.
     */
    data: TourRouteCreateManyInput | TourRouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourRoute update
   */
  export type TourRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a TourRoute.
     */
    data: XOR<TourRouteUpdateInput, TourRouteUncheckedUpdateInput>
    /**
     * Choose, which TourRoute to update.
     */
    where: TourRouteWhereUniqueInput
  }

  /**
   * TourRoute updateMany
   */
  export type TourRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourRoutes.
     */
    data: XOR<TourRouteUpdateManyMutationInput, TourRouteUncheckedUpdateManyInput>
    /**
     * Filter which TourRoutes to update
     */
    where?: TourRouteWhereInput
    /**
     * Limit how many TourRoutes to update.
     */
    limit?: number
  }

  /**
   * TourRoute updateManyAndReturn
   */
  export type TourRouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * The data used to update TourRoutes.
     */
    data: XOR<TourRouteUpdateManyMutationInput, TourRouteUncheckedUpdateManyInput>
    /**
     * Filter which TourRoutes to update
     */
    where?: TourRouteWhereInput
    /**
     * Limit how many TourRoutes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourRoute upsert
   */
  export type TourRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the TourRoute to update in case it exists.
     */
    where: TourRouteWhereUniqueInput
    /**
     * In case the TourRoute found by the `where` argument doesn't exist, create a new TourRoute with this data.
     */
    create: XOR<TourRouteCreateInput, TourRouteUncheckedCreateInput>
    /**
     * In case the TourRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourRouteUpdateInput, TourRouteUncheckedUpdateInput>
  }

  /**
   * TourRoute delete
   */
  export type TourRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
    /**
     * Filter which TourRoute to delete.
     */
    where: TourRouteWhereUniqueInput
  }

  /**
   * TourRoute deleteMany
   */
  export type TourRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourRoutes to delete
     */
    where?: TourRouteWhereInput
    /**
     * Limit how many TourRoutes to delete.
     */
    limit?: number
  }

  /**
   * TourRoute without action
   */
  export type TourRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourRoute
     */
    select?: TourRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourRoute
     */
    omit?: TourRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourRouteInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    userId: string | null
    tourId: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    userId: string | null
    tourId: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    tourId: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    tourId?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    tourId?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    tourId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    userId: string
    tourId: string
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    tourId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    tourId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    tourId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    tourId?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "tourId" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      userId: string
      tourId: string
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly tourId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    contact: 'contact',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hikingExperience: 'hikingExperience'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TourScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    description: 'description',
    price: 'price',
    rating: 'rating',
    noOfUsersRated: 'noOfUsersRated',
    difficulty: 'difficulty',
    distanceInKm: 'distanceInKm',
    durationInHrs: 'durationInHrs',
    altitude: 'altitude',
    season: 'season',
    minGroupSize: 'minGroupSize',
    maxGroupSize: 'maxGroupSize',
    startingLat: 'startingLat',
    startingLng: 'startingLng',
    endingLat: 'endingLat',
    endingLng: 'endingLng',
    route: 'route',
    highlights: 'highlights',
    itinerary: 'itinerary',
    feeIncluded: 'feeIncluded',
    feeNotIncluded: 'feeNotIncluded',
    hikingEssentials: 'hikingEssentials',
    cancellationPolicy: 'cancellationPolicy',
    meetingPoint: 'meetingPoint',
    meetingPointUrl: 'meetingPointUrl',
    meetingTime: 'meetingTime',
    contactDetails: 'contactDetails',
    scheduledDate: 'scheduledDate',
    thumbnailUrl: 'thumbnailUrl',
    tags: 'tags',
    isActive: 'isActive',
    tourType: 'tourType',
    guideId: 'guideId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const UserTourScalarFieldEnum: {
    userId: 'userId',
    tourId: 'tourId',
    joinedAt: 'joinedAt'
  };

  export type UserTourScalarFieldEnum = (typeof UserTourScalarFieldEnum)[keyof typeof UserTourScalarFieldEnum]


  export const TourDateScalarFieldEnum: {
    id: 'id',
    date: 'date',
    deadline: 'deadline',
    tourId: 'tourId'
  };

  export type TourDateScalarFieldEnum = (typeof TourDateScalarFieldEnum)[keyof typeof TourDateScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    tourId: 'tourId'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const TourRouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    latLngs: 'latLngs',
    elevationProfile: 'elevationProfile',
    tourId: 'tourId'
  };

  export type TourRouteScalarFieldEnum = (typeof TourRouteScalarFieldEnum)[keyof typeof TourRouteScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    tourId: 'tourId',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TourType'
   */
  export type EnumTourTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TourType'>
    


  /**
   * Reference to a field of type 'TourType[]'
   */
  export type ListEnumTourTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TourType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    contact?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hikingExperience?: StringNullableFilter<"User"> | string | null
    joinedTours?: UserTourListRelationFilter
    myTours?: TourListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    contact?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hikingExperience?: SortOrderInput | SortOrder
    joinedTours?: UserTourOrderByRelationAggregateInput
    myTours?: TourOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    contact?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hikingExperience?: StringNullableFilter<"User"> | string | null
    joinedTours?: UserTourListRelationFilter
    myTours?: TourListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    contact?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hikingExperience?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    contact?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    hikingExperience?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: StringFilter<"Tour"> | string
    title?: StringFilter<"Tour"> | string
    location?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    price?: IntFilter<"Tour"> | number
    rating?: FloatFilter<"Tour"> | number
    noOfUsersRated?: IntFilter<"Tour"> | number
    difficulty?: EnumDifficultyFilter<"Tour"> | $Enums.Difficulty
    distanceInKm?: FloatFilter<"Tour"> | number
    durationInHrs?: FloatFilter<"Tour"> | number
    altitude?: StringFilter<"Tour"> | string
    season?: StringFilter<"Tour"> | string
    minGroupSize?: IntFilter<"Tour"> | number
    maxGroupSize?: IntFilter<"Tour"> | number
    startingLat?: FloatFilter<"Tour"> | number
    startingLng?: FloatFilter<"Tour"> | number
    endingLat?: FloatNullableFilter<"Tour"> | number | null
    endingLng?: FloatNullableFilter<"Tour"> | number | null
    route?: StringFilter<"Tour"> | string
    highlights?: JsonFilter<"Tour">
    itinerary?: JsonFilter<"Tour">
    feeIncluded?: JsonFilter<"Tour">
    feeNotIncluded?: JsonFilter<"Tour">
    hikingEssentials?: JsonFilter<"Tour">
    cancellationPolicy?: StringNullableFilter<"Tour"> | string | null
    meetingPoint?: StringNullableFilter<"Tour"> | string | null
    meetingPointUrl?: StringNullableFilter<"Tour"> | string | null
    meetingTime?: StringNullableFilter<"Tour"> | string | null
    contactDetails?: JsonNullableFilter<"Tour">
    scheduledDate?: DateTimeNullableFilter<"Tour"> | Date | string | null
    thumbnailUrl?: StringFilter<"Tour"> | string
    tags?: JsonFilter<"Tour">
    isActive?: BoolFilter<"Tour"> | boolean
    tourType?: EnumTourTypeFilter<"Tour"> | $Enums.TourType
    guideId?: StringFilter<"Tour"> | string
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    guide?: XOR<UserScalarRelationFilter, UserWhereInput>
    joinedUsers?: UserTourListRelationFilter
    gallery?: GalleryListRelationFilter
    reviews?: ReviewListRelationFilter
    dates?: TourDateListRelationFilter
    routes?: TourRouteListRelationFilter
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    difficulty?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    altitude?: SortOrder
    season?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrderInput | SortOrder
    endingLng?: SortOrderInput | SortOrder
    route?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    feeIncluded?: SortOrder
    feeNotIncluded?: SortOrder
    hikingEssentials?: SortOrder
    cancellationPolicy?: SortOrderInput | SortOrder
    meetingPoint?: SortOrderInput | SortOrder
    meetingPointUrl?: SortOrderInput | SortOrder
    meetingTime?: SortOrderInput | SortOrder
    contactDetails?: SortOrderInput | SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrder
    tags?: SortOrder
    isActive?: SortOrder
    tourType?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guide?: UserOrderByWithRelationInput
    joinedUsers?: UserTourOrderByRelationAggregateInput
    gallery?: GalleryOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    dates?: TourDateOrderByRelationAggregateInput
    routes?: TourRouteOrderByRelationAggregateInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    title?: StringFilter<"Tour"> | string
    location?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    price?: IntFilter<"Tour"> | number
    rating?: FloatFilter<"Tour"> | number
    noOfUsersRated?: IntFilter<"Tour"> | number
    difficulty?: EnumDifficultyFilter<"Tour"> | $Enums.Difficulty
    distanceInKm?: FloatFilter<"Tour"> | number
    durationInHrs?: FloatFilter<"Tour"> | number
    altitude?: StringFilter<"Tour"> | string
    season?: StringFilter<"Tour"> | string
    minGroupSize?: IntFilter<"Tour"> | number
    maxGroupSize?: IntFilter<"Tour"> | number
    startingLat?: FloatFilter<"Tour"> | number
    startingLng?: FloatFilter<"Tour"> | number
    endingLat?: FloatNullableFilter<"Tour"> | number | null
    endingLng?: FloatNullableFilter<"Tour"> | number | null
    route?: StringFilter<"Tour"> | string
    highlights?: JsonFilter<"Tour">
    itinerary?: JsonFilter<"Tour">
    feeIncluded?: JsonFilter<"Tour">
    feeNotIncluded?: JsonFilter<"Tour">
    hikingEssentials?: JsonFilter<"Tour">
    cancellationPolicy?: StringNullableFilter<"Tour"> | string | null
    meetingPoint?: StringNullableFilter<"Tour"> | string | null
    meetingPointUrl?: StringNullableFilter<"Tour"> | string | null
    meetingTime?: StringNullableFilter<"Tour"> | string | null
    contactDetails?: JsonNullableFilter<"Tour">
    scheduledDate?: DateTimeNullableFilter<"Tour"> | Date | string | null
    thumbnailUrl?: StringFilter<"Tour"> | string
    tags?: JsonFilter<"Tour">
    isActive?: BoolFilter<"Tour"> | boolean
    tourType?: EnumTourTypeFilter<"Tour"> | $Enums.TourType
    guideId?: StringFilter<"Tour"> | string
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    guide?: XOR<UserScalarRelationFilter, UserWhereInput>
    joinedUsers?: UserTourListRelationFilter
    gallery?: GalleryListRelationFilter
    reviews?: ReviewListRelationFilter
    dates?: TourDateListRelationFilter
    routes?: TourRouteListRelationFilter
  }, "id">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    difficulty?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    altitude?: SortOrder
    season?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrderInput | SortOrder
    endingLng?: SortOrderInput | SortOrder
    route?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    feeIncluded?: SortOrder
    feeNotIncluded?: SortOrder
    hikingEssentials?: SortOrder
    cancellationPolicy?: SortOrderInput | SortOrder
    meetingPoint?: SortOrderInput | SortOrder
    meetingPointUrl?: SortOrderInput | SortOrder
    meetingTime?: SortOrderInput | SortOrder
    contactDetails?: SortOrderInput | SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrder
    tags?: SortOrder
    isActive?: SortOrder
    tourType?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tour"> | string
    title?: StringWithAggregatesFilter<"Tour"> | string
    location?: StringWithAggregatesFilter<"Tour"> | string
    description?: StringWithAggregatesFilter<"Tour"> | string
    price?: IntWithAggregatesFilter<"Tour"> | number
    rating?: FloatWithAggregatesFilter<"Tour"> | number
    noOfUsersRated?: IntWithAggregatesFilter<"Tour"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"Tour"> | $Enums.Difficulty
    distanceInKm?: FloatWithAggregatesFilter<"Tour"> | number
    durationInHrs?: FloatWithAggregatesFilter<"Tour"> | number
    altitude?: StringWithAggregatesFilter<"Tour"> | string
    season?: StringWithAggregatesFilter<"Tour"> | string
    minGroupSize?: IntWithAggregatesFilter<"Tour"> | number
    maxGroupSize?: IntWithAggregatesFilter<"Tour"> | number
    startingLat?: FloatWithAggregatesFilter<"Tour"> | number
    startingLng?: FloatWithAggregatesFilter<"Tour"> | number
    endingLat?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    endingLng?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    route?: StringWithAggregatesFilter<"Tour"> | string
    highlights?: JsonWithAggregatesFilter<"Tour">
    itinerary?: JsonWithAggregatesFilter<"Tour">
    feeIncluded?: JsonWithAggregatesFilter<"Tour">
    feeNotIncluded?: JsonWithAggregatesFilter<"Tour">
    hikingEssentials?: JsonWithAggregatesFilter<"Tour">
    cancellationPolicy?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    meetingPoint?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    meetingPointUrl?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    meetingTime?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    contactDetails?: JsonNullableWithAggregatesFilter<"Tour">
    scheduledDate?: DateTimeNullableWithAggregatesFilter<"Tour"> | Date | string | null
    thumbnailUrl?: StringWithAggregatesFilter<"Tour"> | string
    tags?: JsonWithAggregatesFilter<"Tour">
    isActive?: BoolWithAggregatesFilter<"Tour"> | boolean
    tourType?: EnumTourTypeWithAggregatesFilter<"Tour"> | $Enums.TourType
    guideId?: StringWithAggregatesFilter<"Tour"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type UserTourWhereInput = {
    AND?: UserTourWhereInput | UserTourWhereInput[]
    OR?: UserTourWhereInput[]
    NOT?: UserTourWhereInput | UserTourWhereInput[]
    userId?: StringFilter<"UserTour"> | string
    tourId?: StringFilter<"UserTour"> | string
    joinedAt?: DateTimeFilter<"UserTour"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type UserTourOrderByWithRelationInput = {
    userId?: SortOrder
    tourId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tour?: TourOrderByWithRelationInput
  }

  export type UserTourWhereUniqueInput = Prisma.AtLeast<{
    userId_tourId?: UserTourUserIdTourIdCompoundUniqueInput
    AND?: UserTourWhereInput | UserTourWhereInput[]
    OR?: UserTourWhereInput[]
    NOT?: UserTourWhereInput | UserTourWhereInput[]
    userId?: StringFilter<"UserTour"> | string
    tourId?: StringFilter<"UserTour"> | string
    joinedAt?: DateTimeFilter<"UserTour"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "userId_tourId">

  export type UserTourOrderByWithAggregationInput = {
    userId?: SortOrder
    tourId?: SortOrder
    joinedAt?: SortOrder
    _count?: UserTourCountOrderByAggregateInput
    _max?: UserTourMaxOrderByAggregateInput
    _min?: UserTourMinOrderByAggregateInput
  }

  export type UserTourScalarWhereWithAggregatesInput = {
    AND?: UserTourScalarWhereWithAggregatesInput | UserTourScalarWhereWithAggregatesInput[]
    OR?: UserTourScalarWhereWithAggregatesInput[]
    NOT?: UserTourScalarWhereWithAggregatesInput | UserTourScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserTour"> | string
    tourId?: StringWithAggregatesFilter<"UserTour"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"UserTour"> | Date | string
  }

  export type TourDateWhereInput = {
    AND?: TourDateWhereInput | TourDateWhereInput[]
    OR?: TourDateWhereInput[]
    NOT?: TourDateWhereInput | TourDateWhereInput[]
    id?: StringFilter<"TourDate"> | string
    date?: DateTimeFilter<"TourDate"> | Date | string
    deadline?: DateTimeNullableFilter<"TourDate"> | Date | string | null
    tourId?: StringFilter<"TourDate"> | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourDateOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    deadline?: SortOrderInput | SortOrder
    tourId?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourDateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourDateWhereInput | TourDateWhereInput[]
    OR?: TourDateWhereInput[]
    NOT?: TourDateWhereInput | TourDateWhereInput[]
    date?: DateTimeFilter<"TourDate"> | Date | string
    deadline?: DateTimeNullableFilter<"TourDate"> | Date | string | null
    tourId?: StringFilter<"TourDate"> | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourDateOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    deadline?: SortOrderInput | SortOrder
    tourId?: SortOrder
    _count?: TourDateCountOrderByAggregateInput
    _max?: TourDateMaxOrderByAggregateInput
    _min?: TourDateMinOrderByAggregateInput
  }

  export type TourDateScalarWhereWithAggregatesInput = {
    AND?: TourDateScalarWhereWithAggregatesInput | TourDateScalarWhereWithAggregatesInput[]
    OR?: TourDateScalarWhereWithAggregatesInput[]
    NOT?: TourDateScalarWhereWithAggregatesInput | TourDateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourDate"> | string
    date?: DateTimeWithAggregatesFilter<"TourDate"> | Date | string
    deadline?: DateTimeNullableWithAggregatesFilter<"TourDate"> | Date | string | null
    tourId?: StringWithAggregatesFilter<"TourDate"> | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: StringFilter<"Gallery"> | string
    imageUrl?: StringFilter<"Gallery"> | string
    tourId?: StringFilter<"Gallery"> | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    imageUrl?: StringFilter<"Gallery"> | string
    tourId?: StringFilter<"Gallery"> | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gallery"> | string
    imageUrl?: StringWithAggregatesFilter<"Gallery"> | string
    tourId?: StringWithAggregatesFilter<"Gallery"> | string
  }

  export type TourRouteWhereInput = {
    AND?: TourRouteWhereInput | TourRouteWhereInput[]
    OR?: TourRouteWhereInput[]
    NOT?: TourRouteWhereInput | TourRouteWhereInput[]
    id?: StringFilter<"TourRoute"> | string
    name?: StringFilter<"TourRoute"> | string
    description?: StringNullableFilter<"TourRoute"> | string | null
    imageUrl?: StringNullableFilter<"TourRoute"> | string | null
    latLngs?: JsonFilter<"TourRoute">
    elevationProfile?: JsonNullableFilter<"TourRoute">
    tourId?: StringFilter<"TourRoute"> | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourRouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    latLngs?: SortOrder
    elevationProfile?: SortOrderInput | SortOrder
    tourId?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourRouteWhereInput | TourRouteWhereInput[]
    OR?: TourRouteWhereInput[]
    NOT?: TourRouteWhereInput | TourRouteWhereInput[]
    name?: StringFilter<"TourRoute"> | string
    description?: StringNullableFilter<"TourRoute"> | string | null
    imageUrl?: StringNullableFilter<"TourRoute"> | string | null
    latLngs?: JsonFilter<"TourRoute">
    elevationProfile?: JsonNullableFilter<"TourRoute">
    tourId?: StringFilter<"TourRoute"> | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourRouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    latLngs?: SortOrder
    elevationProfile?: SortOrderInput | SortOrder
    tourId?: SortOrder
    _count?: TourRouteCountOrderByAggregateInput
    _max?: TourRouteMaxOrderByAggregateInput
    _min?: TourRouteMinOrderByAggregateInput
  }

  export type TourRouteScalarWhereWithAggregatesInput = {
    AND?: TourRouteScalarWhereWithAggregatesInput | TourRouteScalarWhereWithAggregatesInput[]
    OR?: TourRouteScalarWhereWithAggregatesInput[]
    NOT?: TourRouteScalarWhereWithAggregatesInput | TourRouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourRoute"> | string
    name?: StringWithAggregatesFilter<"TourRoute"> | string
    description?: StringNullableWithAggregatesFilter<"TourRoute"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"TourRoute"> | string | null
    latLngs?: JsonWithAggregatesFilter<"TourRoute">
    elevationProfile?: JsonNullableWithAggregatesFilter<"TourRoute">
    tourId?: StringWithAggregatesFilter<"TourRoute"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringFilter<"Review"> | string
    tourId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tour?: TourOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tourId?: ReviewUserIdTourIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringFilter<"Review"> | string
    tourId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id" | "userId_tourId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userId?: StringWithAggregatesFilter<"Review"> | string
    tourId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    joinedTours?: UserTourCreateNestedManyWithoutUserInput
    myTours?: TourCreateNestedManyWithoutGuideInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    joinedTours?: UserTourUncheckedCreateNestedManyWithoutUserInput
    myTours?: TourUncheckedCreateNestedManyWithoutGuideInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    joinedTours?: UserTourUpdateManyWithoutUserNestedInput
    myTours?: TourUpdateManyWithoutGuideNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    joinedTours?: UserTourUncheckedUpdateManyWithoutUserNestedInput
    myTours?: TourUncheckedUpdateManyWithoutGuideNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TourCreateInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: UserCreateNestedOneWithoutMyToursInput
    joinedUsers?: UserTourCreateNestedManyWithoutTourInput
    gallery?: GalleryCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    routes?: TourRouteCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourUncheckedCreateNestedManyWithoutTourInput
    gallery?: GalleryUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    routes?: TourRouteUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: UserUpdateOneRequiredWithoutMyToursNestedInput
    joinedUsers?: UserTourUpdateManyWithoutTourNestedInput
    gallery?: GalleryUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    routes?: TourRouteUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUncheckedUpdateManyWithoutTourNestedInput
    gallery?: GalleryUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    routes?: TourRouteUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTourCreateInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutJoinedToursInput
    tour: TourCreateNestedOneWithoutJoinedUsersInput
  }

  export type UserTourUncheckedCreateInput = {
    userId: string
    tourId: string
    joinedAt?: Date | string
  }

  export type UserTourUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinedToursNestedInput
    tour?: TourUpdateOneRequiredWithoutJoinedUsersNestedInput
  }

  export type UserTourUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTourCreateManyInput = {
    userId: string
    tourId: string
    joinedAt?: Date | string
  }

  export type UserTourUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTourUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateCreateInput = {
    id?: string
    date: Date | string
    deadline?: Date | string | null
    tour: TourCreateNestedOneWithoutDatesInput
  }

  export type TourDateUncheckedCreateInput = {
    id?: string
    date: Date | string
    deadline?: Date | string | null
    tourId: string
  }

  export type TourDateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tour?: TourUpdateOneRequiredWithoutDatesNestedInput
  }

  export type TourDateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tourId?: StringFieldUpdateOperationsInput | string
  }

  export type TourDateCreateManyInput = {
    id?: string
    date: Date | string
    deadline?: Date | string | null
    tourId: string
  }

  export type TourDateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TourDateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tourId?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCreateInput = {
    id?: string
    imageUrl: string
    tour: TourCreateNestedOneWithoutGalleryInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: string
    imageUrl: string
    tourId: string
  }

  export type GalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tour?: TourUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCreateManyInput = {
    id?: string
    imageUrl: string
    tourId: string
  }

  export type GalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
  }

  export type TourRouteCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    latLngs: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
    tour: TourCreateNestedOneWithoutRoutesInput
  }

  export type TourRouteUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    latLngs: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
    tourId: string
  }

  export type TourRouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
    tour?: TourUpdateOneRequiredWithoutRoutesNestedInput
  }

  export type TourRouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
    tourId?: StringFieldUpdateOperationsInput | string
  }

  export type TourRouteCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    latLngs: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
    tourId: string
  }

  export type TourRouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TourRouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
    tourId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    tour: TourCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    tourId: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    tour?: TourUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    tourId: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserTourListRelationFilter = {
    every?: UserTourWhereInput
    some?: UserTourWhereInput
    none?: UserTourWhereInput
  }

  export type TourListRelationFilter = {
    every?: TourWhereInput
    some?: TourWhereInput
    none?: TourWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hikingExperience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hikingExperience?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hikingExperience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTourTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TourType | EnumTourTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTourTypeFilter<$PrismaModel> | $Enums.TourType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GalleryListRelationFilter = {
    every?: GalleryWhereInput
    some?: GalleryWhereInput
    none?: GalleryWhereInput
  }

  export type TourDateListRelationFilter = {
    every?: TourDateWhereInput
    some?: TourDateWhereInput
    none?: TourDateWhereInput
  }

  export type TourRouteListRelationFilter = {
    every?: TourRouteWhereInput
    some?: TourRouteWhereInput
    none?: TourRouteWhereInput
  }

  export type GalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourRouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    difficulty?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    altitude?: SortOrder
    season?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrder
    endingLng?: SortOrder
    route?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    feeIncluded?: SortOrder
    feeNotIncluded?: SortOrder
    hikingEssentials?: SortOrder
    cancellationPolicy?: SortOrder
    meetingPoint?: SortOrder
    meetingPointUrl?: SortOrder
    meetingTime?: SortOrder
    contactDetails?: SortOrder
    scheduledDate?: SortOrder
    thumbnailUrl?: SortOrder
    tags?: SortOrder
    isActive?: SortOrder
    tourType?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrder
    endingLng?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    difficulty?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    altitude?: SortOrder
    season?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrder
    endingLng?: SortOrder
    route?: SortOrder
    cancellationPolicy?: SortOrder
    meetingPoint?: SortOrder
    meetingPointUrl?: SortOrder
    meetingTime?: SortOrder
    scheduledDate?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    tourType?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    difficulty?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    altitude?: SortOrder
    season?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrder
    endingLng?: SortOrder
    route?: SortOrder
    cancellationPolicy?: SortOrder
    meetingPoint?: SortOrder
    meetingPointUrl?: SortOrder
    meetingTime?: SortOrder
    scheduledDate?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    tourType?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    noOfUsersRated?: SortOrder
    distanceInKm?: SortOrder
    durationInHrs?: SortOrder
    minGroupSize?: SortOrder
    maxGroupSize?: SortOrder
    startingLat?: SortOrder
    startingLng?: SortOrder
    endingLat?: SortOrder
    endingLng?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTourTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TourType | EnumTourTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTourTypeWithAggregatesFilter<$PrismaModel> | $Enums.TourType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTourTypeFilter<$PrismaModel>
    _max?: NestedEnumTourTypeFilter<$PrismaModel>
  }

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type UserTourUserIdTourIdCompoundUniqueInput = {
    userId: string
    tourId: string
  }

  export type UserTourCountOrderByAggregateInput = {
    userId?: SortOrder
    tourId?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserTourMaxOrderByAggregateInput = {
    userId?: SortOrder
    tourId?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserTourMinOrderByAggregateInput = {
    userId?: SortOrder
    tourId?: SortOrder
    joinedAt?: SortOrder
  }

  export type TourDateCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    deadline?: SortOrder
    tourId?: SortOrder
  }

  export type TourDateMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    deadline?: SortOrder
    tourId?: SortOrder
  }

  export type TourDateMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    deadline?: SortOrder
    tourId?: SortOrder
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
  }

  export type TourRouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    latLngs?: SortOrder
    elevationProfile?: SortOrder
    tourId?: SortOrder
  }

  export type TourRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
  }

  export type TourRouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    tourId?: SortOrder
  }

  export type ReviewUserIdTourIdCompoundUniqueInput = {
    userId: string
    tourId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserTourCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTourCreateWithoutUserInput, UserTourUncheckedCreateWithoutUserInput> | UserTourCreateWithoutUserInput[] | UserTourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutUserInput | UserTourCreateOrConnectWithoutUserInput[]
    createMany?: UserTourCreateManyUserInputEnvelope
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
  }

  export type TourCreateNestedManyWithoutGuideInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserTourUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTourCreateWithoutUserInput, UserTourUncheckedCreateWithoutUserInput> | UserTourCreateWithoutUserInput[] | UserTourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutUserInput | UserTourCreateOrConnectWithoutUserInput[]
    createMany?: UserTourCreateManyUserInputEnvelope
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutGuideInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTourUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTourCreateWithoutUserInput, UserTourUncheckedCreateWithoutUserInput> | UserTourCreateWithoutUserInput[] | UserTourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutUserInput | UserTourCreateOrConnectWithoutUserInput[]
    upsert?: UserTourUpsertWithWhereUniqueWithoutUserInput | UserTourUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTourCreateManyUserInputEnvelope
    set?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    disconnect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    delete?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    update?: UserTourUpdateWithWhereUniqueWithoutUserInput | UserTourUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTourUpdateManyWithWhereWithoutUserInput | UserTourUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTourScalarWhereInput | UserTourScalarWhereInput[]
  }

  export type TourUpdateManyWithoutGuideNestedInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutGuideInput | TourUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutGuideInput | TourUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: TourUpdateManyWithWhereWithoutGuideInput | TourUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserTourUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTourCreateWithoutUserInput, UserTourUncheckedCreateWithoutUserInput> | UserTourCreateWithoutUserInput[] | UserTourUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutUserInput | UserTourCreateOrConnectWithoutUserInput[]
    upsert?: UserTourUpsertWithWhereUniqueWithoutUserInput | UserTourUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTourCreateManyUserInputEnvelope
    set?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    disconnect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    delete?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    update?: UserTourUpdateWithWhereUniqueWithoutUserInput | UserTourUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTourUpdateManyWithWhereWithoutUserInput | UserTourUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTourScalarWhereInput | UserTourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutGuideNestedInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutGuideInput | TourUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutGuideInput | TourUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: TourUpdateManyWithWhereWithoutGuideInput | TourUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMyToursInput = {
    create?: XOR<UserCreateWithoutMyToursInput, UserUncheckedCreateWithoutMyToursInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyToursInput
    connect?: UserWhereUniqueInput
  }

  export type UserTourCreateNestedManyWithoutTourInput = {
    create?: XOR<UserTourCreateWithoutTourInput, UserTourUncheckedCreateWithoutTourInput> | UserTourCreateWithoutTourInput[] | UserTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutTourInput | UserTourCreateOrConnectWithoutTourInput[]
    createMany?: UserTourCreateManyTourInputEnvelope
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
  }

  export type GalleryCreateNestedManyWithoutTourInput = {
    create?: XOR<GalleryCreateWithoutTourInput, GalleryUncheckedCreateWithoutTourInput> | GalleryCreateWithoutTourInput[] | GalleryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutTourInput | GalleryCreateOrConnectWithoutTourInput[]
    createMany?: GalleryCreateManyTourInputEnvelope
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTourInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TourDateCreateNestedManyWithoutTourInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
  }

  export type TourRouteCreateNestedManyWithoutTourInput = {
    create?: XOR<TourRouteCreateWithoutTourInput, TourRouteUncheckedCreateWithoutTourInput> | TourRouteCreateWithoutTourInput[] | TourRouteUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourRouteCreateOrConnectWithoutTourInput | TourRouteCreateOrConnectWithoutTourInput[]
    createMany?: TourRouteCreateManyTourInputEnvelope
    connect?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
  }

  export type UserTourUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<UserTourCreateWithoutTourInput, UserTourUncheckedCreateWithoutTourInput> | UserTourCreateWithoutTourInput[] | UserTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutTourInput | UserTourCreateOrConnectWithoutTourInput[]
    createMany?: UserTourCreateManyTourInputEnvelope
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
  }

  export type GalleryUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<GalleryCreateWithoutTourInput, GalleryUncheckedCreateWithoutTourInput> | GalleryCreateWithoutTourInput[] | GalleryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutTourInput | GalleryCreateOrConnectWithoutTourInput[]
    createMany?: GalleryCreateManyTourInputEnvelope
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TourDateUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
  }

  export type TourRouteUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourRouteCreateWithoutTourInput, TourRouteUncheckedCreateWithoutTourInput> | TourRouteCreateWithoutTourInput[] | TourRouteUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourRouteCreateOrConnectWithoutTourInput | TourRouteCreateOrConnectWithoutTourInput[]
    createMany?: TourRouteCreateManyTourInputEnvelope
    connect?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTourTypeFieldUpdateOperationsInput = {
    set?: $Enums.TourType
  }

  export type UserUpdateOneRequiredWithoutMyToursNestedInput = {
    create?: XOR<UserCreateWithoutMyToursInput, UserUncheckedCreateWithoutMyToursInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyToursInput
    upsert?: UserUpsertWithoutMyToursInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyToursInput, UserUpdateWithoutMyToursInput>, UserUncheckedUpdateWithoutMyToursInput>
  }

  export type UserTourUpdateManyWithoutTourNestedInput = {
    create?: XOR<UserTourCreateWithoutTourInput, UserTourUncheckedCreateWithoutTourInput> | UserTourCreateWithoutTourInput[] | UserTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutTourInput | UserTourCreateOrConnectWithoutTourInput[]
    upsert?: UserTourUpsertWithWhereUniqueWithoutTourInput | UserTourUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: UserTourCreateManyTourInputEnvelope
    set?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    disconnect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    delete?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    update?: UserTourUpdateWithWhereUniqueWithoutTourInput | UserTourUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: UserTourUpdateManyWithWhereWithoutTourInput | UserTourUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: UserTourScalarWhereInput | UserTourScalarWhereInput[]
  }

  export type GalleryUpdateManyWithoutTourNestedInput = {
    create?: XOR<GalleryCreateWithoutTourInput, GalleryUncheckedCreateWithoutTourInput> | GalleryCreateWithoutTourInput[] | GalleryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutTourInput | GalleryCreateOrConnectWithoutTourInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutTourInput | GalleryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: GalleryCreateManyTourInputEnvelope
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutTourInput | GalleryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutTourInput | GalleryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTourNestedInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTourInput | ReviewUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTourInput | ReviewUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTourInput | ReviewUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TourDateUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    upsert?: TourDateUpsertWithWhereUniqueWithoutTourInput | TourDateUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    set?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    disconnect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    delete?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    update?: TourDateUpdateWithWhereUniqueWithoutTourInput | TourDateUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourDateUpdateManyWithWhereWithoutTourInput | TourDateUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
  }

  export type TourRouteUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourRouteCreateWithoutTourInput, TourRouteUncheckedCreateWithoutTourInput> | TourRouteCreateWithoutTourInput[] | TourRouteUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourRouteCreateOrConnectWithoutTourInput | TourRouteCreateOrConnectWithoutTourInput[]
    upsert?: TourRouteUpsertWithWhereUniqueWithoutTourInput | TourRouteUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourRouteCreateManyTourInputEnvelope
    set?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    disconnect?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    delete?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    connect?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    update?: TourRouteUpdateWithWhereUniqueWithoutTourInput | TourRouteUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourRouteUpdateManyWithWhereWithoutTourInput | TourRouteUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourRouteScalarWhereInput | TourRouteScalarWhereInput[]
  }

  export type UserTourUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<UserTourCreateWithoutTourInput, UserTourUncheckedCreateWithoutTourInput> | UserTourCreateWithoutTourInput[] | UserTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: UserTourCreateOrConnectWithoutTourInput | UserTourCreateOrConnectWithoutTourInput[]
    upsert?: UserTourUpsertWithWhereUniqueWithoutTourInput | UserTourUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: UserTourCreateManyTourInputEnvelope
    set?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    disconnect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    delete?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    connect?: UserTourWhereUniqueInput | UserTourWhereUniqueInput[]
    update?: UserTourUpdateWithWhereUniqueWithoutTourInput | UserTourUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: UserTourUpdateManyWithWhereWithoutTourInput | UserTourUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: UserTourScalarWhereInput | UserTourScalarWhereInput[]
  }

  export type GalleryUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<GalleryCreateWithoutTourInput, GalleryUncheckedCreateWithoutTourInput> | GalleryCreateWithoutTourInput[] | GalleryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutTourInput | GalleryCreateOrConnectWithoutTourInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutTourInput | GalleryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: GalleryCreateManyTourInputEnvelope
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutTourInput | GalleryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutTourInput | GalleryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTourInput | ReviewUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTourInput | ReviewUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTourInput | ReviewUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TourDateUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    upsert?: TourDateUpsertWithWhereUniqueWithoutTourInput | TourDateUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    set?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    disconnect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    delete?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    update?: TourDateUpdateWithWhereUniqueWithoutTourInput | TourDateUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourDateUpdateManyWithWhereWithoutTourInput | TourDateUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
  }

  export type TourRouteUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourRouteCreateWithoutTourInput, TourRouteUncheckedCreateWithoutTourInput> | TourRouteCreateWithoutTourInput[] | TourRouteUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourRouteCreateOrConnectWithoutTourInput | TourRouteCreateOrConnectWithoutTourInput[]
    upsert?: TourRouteUpsertWithWhereUniqueWithoutTourInput | TourRouteUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourRouteCreateManyTourInputEnvelope
    set?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    disconnect?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    delete?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    connect?: TourRouteWhereUniqueInput | TourRouteWhereUniqueInput[]
    update?: TourRouteUpdateWithWhereUniqueWithoutTourInput | TourRouteUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourRouteUpdateManyWithWhereWithoutTourInput | TourRouteUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourRouteScalarWhereInput | TourRouteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJoinedToursInput = {
    create?: XOR<UserCreateWithoutJoinedToursInput, UserUncheckedCreateWithoutJoinedToursInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedToursInput
    connect?: UserWhereUniqueInput
  }

  export type TourCreateNestedOneWithoutJoinedUsersInput = {
    create?: XOR<TourCreateWithoutJoinedUsersInput, TourUncheckedCreateWithoutJoinedUsersInput>
    connectOrCreate?: TourCreateOrConnectWithoutJoinedUsersInput
    connect?: TourWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJoinedToursNestedInput = {
    create?: XOR<UserCreateWithoutJoinedToursInput, UserUncheckedCreateWithoutJoinedToursInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedToursInput
    upsert?: UserUpsertWithoutJoinedToursInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinedToursInput, UserUpdateWithoutJoinedToursInput>, UserUncheckedUpdateWithoutJoinedToursInput>
  }

  export type TourUpdateOneRequiredWithoutJoinedUsersNestedInput = {
    create?: XOR<TourCreateWithoutJoinedUsersInput, TourUncheckedCreateWithoutJoinedUsersInput>
    connectOrCreate?: TourCreateOrConnectWithoutJoinedUsersInput
    upsert?: TourUpsertWithoutJoinedUsersInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutJoinedUsersInput, TourUpdateWithoutJoinedUsersInput>, TourUncheckedUpdateWithoutJoinedUsersInput>
  }

  export type TourCreateNestedOneWithoutDatesInput = {
    create?: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
    connectOrCreate?: TourCreateOrConnectWithoutDatesInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutDatesNestedInput = {
    create?: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
    connectOrCreate?: TourCreateOrConnectWithoutDatesInput
    upsert?: TourUpsertWithoutDatesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutDatesInput, TourUpdateWithoutDatesInput>, TourUncheckedUpdateWithoutDatesInput>
  }

  export type TourCreateNestedOneWithoutGalleryInput = {
    create?: XOR<TourCreateWithoutGalleryInput, TourUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: TourCreateOrConnectWithoutGalleryInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<TourCreateWithoutGalleryInput, TourUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: TourCreateOrConnectWithoutGalleryInput
    upsert?: TourUpsertWithoutGalleryInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutGalleryInput, TourUpdateWithoutGalleryInput>, TourUncheckedUpdateWithoutGalleryInput>
  }

  export type TourCreateNestedOneWithoutRoutesInput = {
    create?: XOR<TourCreateWithoutRoutesInput, TourUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: TourCreateOrConnectWithoutRoutesInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<TourCreateWithoutRoutesInput, TourUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: TourCreateOrConnectWithoutRoutesInput
    upsert?: TourUpsertWithoutRoutesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutRoutesInput, TourUpdateWithoutRoutesInput>, TourUncheckedUpdateWithoutRoutesInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TourCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TourCreateOrConnectWithoutReviewsInput
    connect?: TourWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TourUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TourCreateOrConnectWithoutReviewsInput
    upsert?: TourUpsertWithoutReviewsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutReviewsInput, TourUpdateWithoutReviewsInput>, TourUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTourTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TourType | EnumTourTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTourTypeFilter<$PrismaModel> | $Enums.TourType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTourTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TourType | EnumTourTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourType[] | ListEnumTourTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTourTypeWithAggregatesFilter<$PrismaModel> | $Enums.TourType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTourTypeFilter<$PrismaModel>
    _max?: NestedEnumTourTypeFilter<$PrismaModel>
  }

  export type UserTourCreateWithoutUserInput = {
    joinedAt?: Date | string
    tour: TourCreateNestedOneWithoutJoinedUsersInput
  }

  export type UserTourUncheckedCreateWithoutUserInput = {
    tourId: string
    joinedAt?: Date | string
  }

  export type UserTourCreateOrConnectWithoutUserInput = {
    where: UserTourWhereUniqueInput
    create: XOR<UserTourCreateWithoutUserInput, UserTourUncheckedCreateWithoutUserInput>
  }

  export type UserTourCreateManyUserInputEnvelope = {
    data: UserTourCreateManyUserInput | UserTourCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TourCreateWithoutGuideInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourCreateNestedManyWithoutTourInput
    gallery?: GalleryCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    routes?: TourRouteCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutGuideInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourUncheckedCreateNestedManyWithoutTourInput
    gallery?: GalleryUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    routes?: TourRouteUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutGuideInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput>
  }

  export type TourCreateManyGuideInputEnvelope = {
    data: TourCreateManyGuideInput | TourCreateManyGuideInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    tour: TourCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    tourId: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTourUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTourWhereUniqueInput
    update: XOR<UserTourUpdateWithoutUserInput, UserTourUncheckedUpdateWithoutUserInput>
    create: XOR<UserTourCreateWithoutUserInput, UserTourUncheckedCreateWithoutUserInput>
  }

  export type UserTourUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTourWhereUniqueInput
    data: XOR<UserTourUpdateWithoutUserInput, UserTourUncheckedUpdateWithoutUserInput>
  }

  export type UserTourUpdateManyWithWhereWithoutUserInput = {
    where: UserTourScalarWhereInput
    data: XOR<UserTourUpdateManyMutationInput, UserTourUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTourScalarWhereInput = {
    AND?: UserTourScalarWhereInput | UserTourScalarWhereInput[]
    OR?: UserTourScalarWhereInput[]
    NOT?: UserTourScalarWhereInput | UserTourScalarWhereInput[]
    userId?: StringFilter<"UserTour"> | string
    tourId?: StringFilter<"UserTour"> | string
    joinedAt?: DateTimeFilter<"UserTour"> | Date | string
  }

  export type TourUpsertWithWhereUniqueWithoutGuideInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutGuideInput, TourUncheckedUpdateWithoutGuideInput>
    create: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput>
  }

  export type TourUpdateWithWhereUniqueWithoutGuideInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutGuideInput, TourUncheckedUpdateWithoutGuideInput>
  }

  export type TourUpdateManyWithWhereWithoutGuideInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutGuideInput>
  }

  export type TourScalarWhereInput = {
    AND?: TourScalarWhereInput | TourScalarWhereInput[]
    OR?: TourScalarWhereInput[]
    NOT?: TourScalarWhereInput | TourScalarWhereInput[]
    id?: StringFilter<"Tour"> | string
    title?: StringFilter<"Tour"> | string
    location?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    price?: IntFilter<"Tour"> | number
    rating?: FloatFilter<"Tour"> | number
    noOfUsersRated?: IntFilter<"Tour"> | number
    difficulty?: EnumDifficultyFilter<"Tour"> | $Enums.Difficulty
    distanceInKm?: FloatFilter<"Tour"> | number
    durationInHrs?: FloatFilter<"Tour"> | number
    altitude?: StringFilter<"Tour"> | string
    season?: StringFilter<"Tour"> | string
    minGroupSize?: IntFilter<"Tour"> | number
    maxGroupSize?: IntFilter<"Tour"> | number
    startingLat?: FloatFilter<"Tour"> | number
    startingLng?: FloatFilter<"Tour"> | number
    endingLat?: FloatNullableFilter<"Tour"> | number | null
    endingLng?: FloatNullableFilter<"Tour"> | number | null
    route?: StringFilter<"Tour"> | string
    highlights?: JsonFilter<"Tour">
    itinerary?: JsonFilter<"Tour">
    feeIncluded?: JsonFilter<"Tour">
    feeNotIncluded?: JsonFilter<"Tour">
    hikingEssentials?: JsonFilter<"Tour">
    cancellationPolicy?: StringNullableFilter<"Tour"> | string | null
    meetingPoint?: StringNullableFilter<"Tour"> | string | null
    meetingPointUrl?: StringNullableFilter<"Tour"> | string | null
    meetingTime?: StringNullableFilter<"Tour"> | string | null
    contactDetails?: JsonNullableFilter<"Tour">
    scheduledDate?: DateTimeNullableFilter<"Tour"> | Date | string | null
    thumbnailUrl?: StringFilter<"Tour"> | string
    tags?: JsonFilter<"Tour">
    isActive?: BoolFilter<"Tour"> | boolean
    tourType?: EnumTourTypeFilter<"Tour"> | $Enums.TourType
    guideId?: StringFilter<"Tour"> | string
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringFilter<"Review"> | string
    tourId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutMyToursInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    joinedTours?: UserTourCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMyToursInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    joinedTours?: UserTourUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMyToursInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyToursInput, UserUncheckedCreateWithoutMyToursInput>
  }

  export type UserTourCreateWithoutTourInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutJoinedToursInput
  }

  export type UserTourUncheckedCreateWithoutTourInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type UserTourCreateOrConnectWithoutTourInput = {
    where: UserTourWhereUniqueInput
    create: XOR<UserTourCreateWithoutTourInput, UserTourUncheckedCreateWithoutTourInput>
  }

  export type UserTourCreateManyTourInputEnvelope = {
    data: UserTourCreateManyTourInput | UserTourCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type GalleryCreateWithoutTourInput = {
    id?: string
    imageUrl: string
  }

  export type GalleryUncheckedCreateWithoutTourInput = {
    id?: string
    imageUrl: string
  }

  export type GalleryCreateOrConnectWithoutTourInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutTourInput, GalleryUncheckedCreateWithoutTourInput>
  }

  export type GalleryCreateManyTourInputEnvelope = {
    data: GalleryCreateManyTourInput | GalleryCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTourInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTourInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTourInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput>
  }

  export type ReviewCreateManyTourInputEnvelope = {
    data: ReviewCreateManyTourInput | ReviewCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourDateCreateWithoutTourInput = {
    id?: string
    date: Date | string
    deadline?: Date | string | null
  }

  export type TourDateUncheckedCreateWithoutTourInput = {
    id?: string
    date: Date | string
    deadline?: Date | string | null
  }

  export type TourDateCreateOrConnectWithoutTourInput = {
    where: TourDateWhereUniqueInput
    create: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput>
  }

  export type TourDateCreateManyTourInputEnvelope = {
    data: TourDateCreateManyTourInput | TourDateCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourRouteCreateWithoutTourInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    latLngs: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TourRouteUncheckedCreateWithoutTourInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    latLngs: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TourRouteCreateOrConnectWithoutTourInput = {
    where: TourRouteWhereUniqueInput
    create: XOR<TourRouteCreateWithoutTourInput, TourRouteUncheckedCreateWithoutTourInput>
  }

  export type TourRouteCreateManyTourInputEnvelope = {
    data: TourRouteCreateManyTourInput | TourRouteCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMyToursInput = {
    update: XOR<UserUpdateWithoutMyToursInput, UserUncheckedUpdateWithoutMyToursInput>
    create: XOR<UserCreateWithoutMyToursInput, UserUncheckedCreateWithoutMyToursInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyToursInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyToursInput, UserUncheckedUpdateWithoutMyToursInput>
  }

  export type UserUpdateWithoutMyToursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    joinedTours?: UserTourUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMyToursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    joinedTours?: UserTourUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTourUpsertWithWhereUniqueWithoutTourInput = {
    where: UserTourWhereUniqueInput
    update: XOR<UserTourUpdateWithoutTourInput, UserTourUncheckedUpdateWithoutTourInput>
    create: XOR<UserTourCreateWithoutTourInput, UserTourUncheckedCreateWithoutTourInput>
  }

  export type UserTourUpdateWithWhereUniqueWithoutTourInput = {
    where: UserTourWhereUniqueInput
    data: XOR<UserTourUpdateWithoutTourInput, UserTourUncheckedUpdateWithoutTourInput>
  }

  export type UserTourUpdateManyWithWhereWithoutTourInput = {
    where: UserTourScalarWhereInput
    data: XOR<UserTourUpdateManyMutationInput, UserTourUncheckedUpdateManyWithoutTourInput>
  }

  export type GalleryUpsertWithWhereUniqueWithoutTourInput = {
    where: GalleryWhereUniqueInput
    update: XOR<GalleryUpdateWithoutTourInput, GalleryUncheckedUpdateWithoutTourInput>
    create: XOR<GalleryCreateWithoutTourInput, GalleryUncheckedCreateWithoutTourInput>
  }

  export type GalleryUpdateWithWhereUniqueWithoutTourInput = {
    where: GalleryWhereUniqueInput
    data: XOR<GalleryUpdateWithoutTourInput, GalleryUncheckedUpdateWithoutTourInput>
  }

  export type GalleryUpdateManyWithWhereWithoutTourInput = {
    where: GalleryScalarWhereInput
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyWithoutTourInput>
  }

  export type GalleryScalarWhereInput = {
    AND?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    OR?: GalleryScalarWhereInput[]
    NOT?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    id?: StringFilter<"Gallery"> | string
    imageUrl?: StringFilter<"Gallery"> | string
    tourId?: StringFilter<"Gallery"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutTourInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTourInput, ReviewUncheckedUpdateWithoutTourInput>
    create: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTourInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTourInput, ReviewUncheckedUpdateWithoutTourInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTourInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTourInput>
  }

  export type TourDateUpsertWithWhereUniqueWithoutTourInput = {
    where: TourDateWhereUniqueInput
    update: XOR<TourDateUpdateWithoutTourInput, TourDateUncheckedUpdateWithoutTourInput>
    create: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput>
  }

  export type TourDateUpdateWithWhereUniqueWithoutTourInput = {
    where: TourDateWhereUniqueInput
    data: XOR<TourDateUpdateWithoutTourInput, TourDateUncheckedUpdateWithoutTourInput>
  }

  export type TourDateUpdateManyWithWhereWithoutTourInput = {
    where: TourDateScalarWhereInput
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyWithoutTourInput>
  }

  export type TourDateScalarWhereInput = {
    AND?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
    OR?: TourDateScalarWhereInput[]
    NOT?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
    id?: StringFilter<"TourDate"> | string
    date?: DateTimeFilter<"TourDate"> | Date | string
    deadline?: DateTimeNullableFilter<"TourDate"> | Date | string | null
    tourId?: StringFilter<"TourDate"> | string
  }

  export type TourRouteUpsertWithWhereUniqueWithoutTourInput = {
    where: TourRouteWhereUniqueInput
    update: XOR<TourRouteUpdateWithoutTourInput, TourRouteUncheckedUpdateWithoutTourInput>
    create: XOR<TourRouteCreateWithoutTourInput, TourRouteUncheckedCreateWithoutTourInput>
  }

  export type TourRouteUpdateWithWhereUniqueWithoutTourInput = {
    where: TourRouteWhereUniqueInput
    data: XOR<TourRouteUpdateWithoutTourInput, TourRouteUncheckedUpdateWithoutTourInput>
  }

  export type TourRouteUpdateManyWithWhereWithoutTourInput = {
    where: TourRouteScalarWhereInput
    data: XOR<TourRouteUpdateManyMutationInput, TourRouteUncheckedUpdateManyWithoutTourInput>
  }

  export type TourRouteScalarWhereInput = {
    AND?: TourRouteScalarWhereInput | TourRouteScalarWhereInput[]
    OR?: TourRouteScalarWhereInput[]
    NOT?: TourRouteScalarWhereInput | TourRouteScalarWhereInput[]
    id?: StringFilter<"TourRoute"> | string
    name?: StringFilter<"TourRoute"> | string
    description?: StringNullableFilter<"TourRoute"> | string | null
    imageUrl?: StringNullableFilter<"TourRoute"> | string | null
    latLngs?: JsonFilter<"TourRoute">
    elevationProfile?: JsonNullableFilter<"TourRoute">
    tourId?: StringFilter<"TourRoute"> | string
  }

  export type UserCreateWithoutJoinedToursInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    myTours?: TourCreateNestedManyWithoutGuideInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinedToursInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    myTours?: TourUncheckedCreateNestedManyWithoutGuideInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinedToursInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedToursInput, UserUncheckedCreateWithoutJoinedToursInput>
  }

  export type TourCreateWithoutJoinedUsersInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: UserCreateNestedOneWithoutMyToursInput
    gallery?: GalleryCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    routes?: TourRouteCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutJoinedUsersInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: GalleryUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    routes?: TourRouteUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutJoinedUsersInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutJoinedUsersInput, TourUncheckedCreateWithoutJoinedUsersInput>
  }

  export type UserUpsertWithoutJoinedToursInput = {
    update: XOR<UserUpdateWithoutJoinedToursInput, UserUncheckedUpdateWithoutJoinedToursInput>
    create: XOR<UserCreateWithoutJoinedToursInput, UserUncheckedCreateWithoutJoinedToursInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinedToursInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinedToursInput, UserUncheckedUpdateWithoutJoinedToursInput>
  }

  export type UserUpdateWithoutJoinedToursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    myTours?: TourUpdateManyWithoutGuideNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinedToursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    myTours?: TourUncheckedUpdateManyWithoutGuideNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TourUpsertWithoutJoinedUsersInput = {
    update: XOR<TourUpdateWithoutJoinedUsersInput, TourUncheckedUpdateWithoutJoinedUsersInput>
    create: XOR<TourCreateWithoutJoinedUsersInput, TourUncheckedCreateWithoutJoinedUsersInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutJoinedUsersInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutJoinedUsersInput, TourUncheckedUpdateWithoutJoinedUsersInput>
  }

  export type TourUpdateWithoutJoinedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: UserUpdateOneRequiredWithoutMyToursNestedInput
    gallery?: GalleryUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    routes?: TourRouteUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutJoinedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: GalleryUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    routes?: TourRouteUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutDatesInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: UserCreateNestedOneWithoutMyToursInput
    joinedUsers?: UserTourCreateNestedManyWithoutTourInput
    gallery?: GalleryCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    routes?: TourRouteCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutDatesInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourUncheckedCreateNestedManyWithoutTourInput
    gallery?: GalleryUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    routes?: TourRouteUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutDatesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
  }

  export type TourUpsertWithoutDatesInput = {
    update: XOR<TourUpdateWithoutDatesInput, TourUncheckedUpdateWithoutDatesInput>
    create: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutDatesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutDatesInput, TourUncheckedUpdateWithoutDatesInput>
  }

  export type TourUpdateWithoutDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: UserUpdateOneRequiredWithoutMyToursNestedInput
    joinedUsers?: UserTourUpdateManyWithoutTourNestedInput
    gallery?: GalleryUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    routes?: TourRouteUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUncheckedUpdateManyWithoutTourNestedInput
    gallery?: GalleryUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    routes?: TourRouteUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutGalleryInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: UserCreateNestedOneWithoutMyToursInput
    joinedUsers?: UserTourCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    routes?: TourRouteCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutGalleryInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    routes?: TourRouteUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutGalleryInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutGalleryInput, TourUncheckedCreateWithoutGalleryInput>
  }

  export type TourUpsertWithoutGalleryInput = {
    update: XOR<TourUpdateWithoutGalleryInput, TourUncheckedUpdateWithoutGalleryInput>
    create: XOR<TourCreateWithoutGalleryInput, TourUncheckedCreateWithoutGalleryInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutGalleryInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutGalleryInput, TourUncheckedUpdateWithoutGalleryInput>
  }

  export type TourUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: UserUpdateOneRequiredWithoutMyToursNestedInput
    joinedUsers?: UserTourUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    routes?: TourRouteUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    routes?: TourRouteUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutRoutesInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: UserCreateNestedOneWithoutMyToursInput
    joinedUsers?: UserTourCreateNestedManyWithoutTourInput
    gallery?: GalleryCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    dates?: TourDateCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutRoutesInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourUncheckedCreateNestedManyWithoutTourInput
    gallery?: GalleryUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutRoutesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutRoutesInput, TourUncheckedCreateWithoutRoutesInput>
  }

  export type TourUpsertWithoutRoutesInput = {
    update: XOR<TourUpdateWithoutRoutesInput, TourUncheckedUpdateWithoutRoutesInput>
    create: XOR<TourCreateWithoutRoutesInput, TourUncheckedCreateWithoutRoutesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutRoutesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutRoutesInput, TourUncheckedUpdateWithoutRoutesInput>
  }

  export type TourUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: UserUpdateOneRequiredWithoutMyToursNestedInput
    joinedUsers?: UserTourUpdateManyWithoutTourNestedInput
    gallery?: GalleryUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUncheckedUpdateManyWithoutTourNestedInput
    gallery?: GalleryUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    joinedTours?: UserTourCreateNestedManyWithoutUserInput
    myTours?: TourCreateNestedManyWithoutGuideInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    contact?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hikingExperience?: string | null
    joinedTours?: UserTourUncheckedCreateNestedManyWithoutUserInput
    myTours?: TourUncheckedCreateNestedManyWithoutGuideInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TourCreateWithoutReviewsInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: UserCreateNestedOneWithoutMyToursInput
    joinedUsers?: UserTourCreateNestedManyWithoutTourInput
    gallery?: GalleryCreateNestedManyWithoutTourInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    routes?: TourRouteCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    guideId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedUsers?: UserTourUncheckedCreateNestedManyWithoutTourInput
    gallery?: GalleryUncheckedCreateNestedManyWithoutTourInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    routes?: TourRouteUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutReviewsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    joinedTours?: UserTourUpdateManyWithoutUserNestedInput
    myTours?: TourUpdateManyWithoutGuideNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hikingExperience?: NullableStringFieldUpdateOperationsInput | string | null
    joinedTours?: UserTourUncheckedUpdateManyWithoutUserNestedInput
    myTours?: TourUncheckedUpdateManyWithoutGuideNestedInput
  }

  export type TourUpsertWithoutReviewsInput = {
    update: XOR<TourUpdateWithoutReviewsInput, TourUncheckedUpdateWithoutReviewsInput>
    create: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutReviewsInput, TourUncheckedUpdateWithoutReviewsInput>
  }

  export type TourUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: UserUpdateOneRequiredWithoutMyToursNestedInput
    joinedUsers?: UserTourUpdateManyWithoutTourNestedInput
    gallery?: GalleryUpdateManyWithoutTourNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    routes?: TourRouteUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    guideId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUncheckedUpdateManyWithoutTourNestedInput
    gallery?: GalleryUncheckedUpdateManyWithoutTourNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    routes?: TourRouteUncheckedUpdateManyWithoutTourNestedInput
  }

  export type UserTourCreateManyUserInput = {
    tourId: string
    joinedAt?: Date | string
  }

  export type TourCreateManyGuideInput = {
    id?: string
    title: string
    location: string
    description: string
    price: number
    rating?: number
    noOfUsersRated?: number
    difficulty?: $Enums.Difficulty
    distanceInKm: number
    durationInHrs: number
    altitude: string
    season: string
    minGroupSize: number
    maxGroupSize: number
    startingLat: number
    startingLng: number
    endingLat?: number | null
    endingLng?: number | null
    route: string
    highlights: JsonNullValueInput | InputJsonValue
    itinerary: JsonNullValueInput | InputJsonValue
    feeIncluded: JsonNullValueInput | InputJsonValue
    feeNotIncluded: JsonNullValueInput | InputJsonValue
    hikingEssentials: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: string | null
    meetingPoint?: string | null
    meetingPointUrl?: string | null
    meetingTime?: string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: Date | string | null
    thumbnailUrl: string
    tags: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    tourType: $Enums.TourType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating: number
    comment?: string | null
    tourId: string
    createdAt?: Date | string
  }

  export type UserTourUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutJoinedUsersNestedInput
  }

  export type UserTourUncheckedUpdateWithoutUserInput = {
    tourId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTourUncheckedUpdateManyWithoutUserInput = {
    tourId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUpdateWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUpdateManyWithoutTourNestedInput
    gallery?: GalleryUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    routes?: TourRouteUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedUsers?: UserTourUncheckedUpdateManyWithoutTourNestedInput
    gallery?: GalleryUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    routes?: TourRouteUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    noOfUsersRated?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    distanceInKm?: FloatFieldUpdateOperationsInput | number
    durationInHrs?: FloatFieldUpdateOperationsInput | number
    altitude?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    minGroupSize?: IntFieldUpdateOperationsInput | number
    maxGroupSize?: IntFieldUpdateOperationsInput | number
    startingLat?: FloatFieldUpdateOperationsInput | number
    startingLng?: FloatFieldUpdateOperationsInput | number
    endingLat?: NullableFloatFieldUpdateOperationsInput | number | null
    endingLng?: NullableFloatFieldUpdateOperationsInput | number | null
    route?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    itinerary?: JsonNullValueInput | InputJsonValue
    feeIncluded?: JsonNullValueInput | InputJsonValue
    feeNotIncluded?: JsonNullValueInput | InputJsonValue
    hikingEssentials?: JsonNullValueInput | InputJsonValue
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPointUrl?: NullableStringFieldUpdateOperationsInput | string | null
    meetingTime?: NullableStringFieldUpdateOperationsInput | string | null
    contactDetails?: NullableJsonNullValueInput | InputJsonValue
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tourType?: EnumTourTypeFieldUpdateOperationsInput | $Enums.TourType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tourId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tourId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTourCreateManyTourInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type GalleryCreateManyTourInput = {
    id?: string
    imageUrl: string
  }

  export type ReviewCreateManyTourInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type TourDateCreateManyTourInput = {
    id?: string
    date: Date | string
    deadline?: Date | string | null
  }

  export type TourRouteCreateManyTourInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    latLngs: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserTourUpdateWithoutTourInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinedToursNestedInput
  }

  export type UserTourUncheckedUpdateWithoutTourInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTourUncheckedUpdateManyWithoutTourInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TourDateUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TourDateUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TourRouteUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TourRouteUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TourRouteUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latLngs?: JsonNullValueInput | InputJsonValue
    elevationProfile?: NullableJsonNullValueInput | InputJsonValue
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