import Heading1 from "@component/components/Heading1";
import Heading2 from "@component/components/Heading2";
import Link from "next/link";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div>
      <Heading1>Learning Code</Heading1>
      <p>
        Learn to code in Swift and any other language. This will constantly be
        updated and acts as a repository for my source material. Lessons will be
        added constantly as I continue teaching some learners.
      </p>
      <br />
      <Heading2>Quick Recap</Heading2>
      <br />
      <p>I assume you know the following:</p>
      <br />
      <div>
        <ul>
          <li>Git</li>
        </ul>
      </div>

      <br />
      <h2>What is coding?</h2>
      <hr className="ruling-lines" />
      <br />
      <div className="container">     
        <div className="items">
        <p>Get Started</p>
        </div>
        <div className="items">
        <h3>Summary</h3>
          <ul>
          <li>What is a program?</li>
          <li>Overview of a real world program</li>
          <li>What it takes to become a developer</li>
        </ul>
        </div>
      <br />
      </div>
      <br />
      <h2>Lesson 1 - Fundamentals</h2>
      <hr className="ruling-lines" />
      <br />
      <div className="container">
        <div className="items">
        <p>Get Started</p>
        </div>
        <div className="items">
        <h3>Summary</h3>
        <ul>
          <li><Link href="/lesson1/types">Types</Link></li>
          <li><Link href="/lesson1/variables">Variables</Link></li>
          <li><Link href="/lesson1/scope">Scope</Link></li>
          <li>Logic</li>
        </ul>
          </div>
          </div>
          <div>
          </div>
      <br />
      </div>
    
  );
}
