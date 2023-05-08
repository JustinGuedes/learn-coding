import { ReactElement, ReactNode } from "react";

// To create a component, we must first create a type that we call "Props" and if we want anything between the html tags we must give the type children: ReactNode
// <h1> 'children' </h1>
// the children of a react element would be anything inside the elements' tags and NOTE that 'children: ReactNode' is a must for tags that will contain something between them

type Props = {
  children: ReactNode;
};

export default function Heading3(props: Props): ReactElement {
  return (
    <div>
      <h1 className="heading3">{props.children}</h1>
      {/* <hr className="ruling-line" /> */}
    </div>
  );
}
