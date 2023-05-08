import Heading1 from "@component/components/Heading1";
import Heading2 from "@component/components/Heading2";
import Heading3 from "@component/components/Heading3";
import Heading4 from "@component/components/Heading4";
import Keyword from "@component/components/Keyword";
import Syntax from "@component/components/SyntaxHighlight";
// import { link } from "fs";
import { ReactElement } from "react";

export default function Variables(): ReactElement {
  return (
    <div>
      <header className="header">
        <section className="repoContainerHeader"></section>
      </header>

      <div className="content">
        <div className="mainContent">
          <div className="beta"> </div>
          <div className="branch"></div>
          <div className="user"></div>
          <div className="contributors"></div>
          <section className="content">
            <div className="sticky">
              <div className="contentHeaderLeft">
                <span>71 lines (47 sloc) | 1.46 KB</span>
              </div>
              <div className="contentHeaderRight">
                <div id="sourceBlob">
                  <button type="button">
                    <a href="https://github.com/JustinGuedes/learn-coding/blob/main/lesson1/variables.md?plain=1">
                      &#60; &#62;
                    </a>
                  </button>
                </div>
                <div id=""></div>
                <div id=""></div>
                <div id=""></div>
                <div id=""></div>
                <div id=""></div>
                <div id=""></div>
                <div id=""></div>
              </div>
            </div>
            <Heading1>Variables</Heading1>
            <section className="Mutability">
              <p>Container or placeholder of a type/value.</p>
              <Heading2>Immutable (Constant) vs Mutable ('Variable`)</Heading2>
              <Heading3>Immutable (Constant)</Heading3>
              <p>
                Constants are variables that do not change over its lifespan.
                Always default to a immutable (constant) until you are required
                to change the value, then change it to a mutable ('variable')
                variable.
              </p>

              <Heading4>Swift</Heading4>
              <pre>
                <p>
                  <Syntax color="red">let</Syntax> pi{" "}
                  <Syntax color="red">=</Syntax>{" "}
                  <Syntax color="blue">3.14</Syntax>
                </p>
                <p id="lighter">
                  // pi = 32 - Cannot assign to value 'y' is a 'let' constant
                </p>
              </pre>
              <Heading4>Typescript</Heading4>
              <pre>
                <Syntax color="red">const</Syntax> pi{" "}
                <Syntax color="blue">=</Syntax>{" "}
                <Syntax color="blue">3.14</Syntax>
              </pre>
            </section>
            <Heading3>Mutable('Variable')</Heading3>
            <p>'Variable' variable can change over its lifespan.</p>
            <Heading4>Swift</Heading4>
            <pre>
              <p>
                <Syntax color="red">var</Syntax> counter{" "}
                <Syntax color="red">=</Syntax> <Syntax color="blue">0 </Syntax>
              </p>
              <p>
                counter
                <Syntax color="red"> =</Syntax> counter{" "}
                <Syntax color="red">+</Syntax> <Syntax color="blue">1</Syntax>
              </p>
            </pre>
            <Heading4>Typescript</Heading4>
            <pre>
              <p>
                <Syntax color="red">let</Syntax> counter{" "}
                <Syntax color="red">=</Syntax> <Syntax color="blue">0</Syntax>
              </p>
              <p>
                counter <Syntax color="red">=</Syntax> counter
                <Syntax color="blue">+</Syntax> <Syntax color="blue">1</Syntax>
              </p>
            </pre>
            <section className="Naming">
              <div>
                <Heading2>Naming</Heading2>
                <div>
                  <ul>
                    <li>
                      Unique and descriptive to be able to identifier the
                      purpose of the variable easily.
                    </li>
                    <li>
                      Most languages have their own naming convention, and most
                      use lowerCamelCase and snakeCase.
                    </li>
                    <li>
                      Keep variable names within a good length, which could be
                      anywhere between 3 to 20 letters.
                    </li>
                    <li>Try not use any abbreviations when naming things.</li>
                    <li>Names should not start with a symbol or number</li>
                    <li>
                      Names should not contain symbols unless for special
                      uses/cases.
                    </li>
                  </ul>
                  <blockquote>
                    <p>
                      Note: Make sure you don't name variables after
                      <Keyword>keywords</Keyword> from languages. Examples like:
                      <Keyword>for</Keyword>, <Keyword>if</Keyword>,
                      <Keyword>in</Keyword>, <Keyword>let</Keyword>
                    </p>
                  </blockquote>
                </div>
                <Heading3>
                  Good Examples in <code>swift</code>:
                </Heading3>
                <pre>
                  <p>
                    <Syntax color="red">let</Syntax> pi{" "}
                    <Syntax color="red">=</Syntax>{" "}
                    <Syntax color="blue">3.14</Syntax>{" "}
                  </p>
                  <p>
                    <Syntax color="red">let</Syntax> letterLowercase{" "}
                    <Syntax color="red">=</Syntax> "h"{" "}
                  </p>
                  <p>
                    <Syntax color="red">let</Syntax> dollarRandRate{" "}
                    <Syntax color="red">=</Syntax>{" "}
                    <Syntax color="blue">18.09</Syntax>
                  </p>
                </pre>
                <Heading3>
                  Good Examples in <code>swift</code>:
                </Heading3>
                <div>
                  <pre>
                    <p>
                      <Syntax color="red">let</Syntax> g{" "}
                      <Syntax color="red">=</Syntax> "h"
                    </p>
                    <p>
                      <Syntax color="red">let</Syntax> D
                      <Syntax color="blue">$2</Syntax>{" "}
                      <Syntax color="red">=</Syntax>{" "}
                      <Syntax color="blue">324</Syntax>{" "}
                    </p>
                    <p>
                      <Syntax color="red">let</Syntax> 🤣{" "}
                      <Syntax color="red">=</Syntax>{" "}
                      <Syntax color="blue">2.31</Syntax>
                    </p>
                    <p>
                      <Syntax color="red">let</Syntax> dollarrandrate{" "}
                      <Syntax color="red">=</Syntax>{" "}
                      <Syntax color="blue">18.09</Syntax>
                    </p>
                  </pre>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="feedback">
          <p>
            <a href="">Give feedback</a>
          </p>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
