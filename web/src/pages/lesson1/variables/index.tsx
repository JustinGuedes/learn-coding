import Heading1 from "@component/components/Heading1";
import Heading2 from "@component/components/Heading2";
import Heading3 from "@component/components/Heading3";
import Heading4 from "@component/components/Heading4";
import { link } from "fs";
import { ReactElement } from "react";

export default function Variables(): ReactElement {
  return (
    <div>
      <Heading1>Variables</Heading1>
      <section className="Mutability">
        <p>Container or placeholder of a type/value.</p>
        <Heading2>Immutable (Constant) vs Mutable ('Variable`)</Heading2>
        <Heading3>Immutable (Constant)</Heading3>
        <p>
          Constants are variables that do not change over its lifespan. Always
          default to a immutable (constant) until you are required to change the
          value, then change it to a mutable ('variable') variable.
        </p>

        <Heading4>Swift</Heading4>
        {/* <pre> */}
        <code>
          let pi = 3.14 // pi = 32 - Cannot assign to value 'y' is a 'let'
          constant
        </code>
        {/* </pre> */}

        <Heading4>Typescript</Heading4>
        {/* <pre> */}
        <code>const pi = 3.14</code>
        {/* </pre> */}
      </section>

      <Heading3>Mutable('Variable')</Heading3>
      <p>'Variable' variable can change over its lifespan.</p>

      <Heading4>Swift</Heading4>
      {/* <pre> */}
      <code>var counter = 0 counter = counter + 1</code>
      {/* </pre> */}

      <Heading4>Typescript</Heading4>
      {/* <pre> */}
      <code>let counter = 0 counter = counter + 1</code>
      {/* </pre> */}
      <section className="Naming">
        <div>
          <Heading2>Naming</Heading2>

          <div>
            <ul>
              <li>
                Unique and descriptive to be able to identifier the purpose of
                the variable easily.
              </li>
              <li>
                Most languages have their own naming convention, and most use
                lowerCamelCase and snakeCase.
              </li>
              <li>
                Keep variable names within a good length, which could be
                anywhere between 3 to 20 letters.
              </li>
              <li>Try not use any abbreviations when naming things.</li>
              <li>Names should not start with a symbol or number</li>
              <li>
                Names should not contain symbols unless for special uses/cases.
              </li>
              <p>
                Note: Make sure you don't name variables after keywords from
                languages. Examples like: for, in, if, let
              </p>
            </ul>
          </div>
          <Heading3>Good Examples in swift:</Heading3>
        </div>
      </section>
    </div>
  );
}
