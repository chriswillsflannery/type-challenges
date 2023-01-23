/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

// exlcude from T the types which are assignable to U
// or
// extract from T the types which are not assignable to U
type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type A1 = MyExclude<'a' | 'b' | 'c', 'a'>
type B1 = 'b' | 'c'
type C1 = Expect<Equal<A1, B1>>

type A2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
type B2 = 'c'
type C2 = Expect<Equal<A2, B2>>

type A3 = MyExclude<string | number | (() => void), Function>
type B3 = string | number
type C3 = Expect<Equal<A3, B3>>

// type cases = [
//   Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
//   Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
//   Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
