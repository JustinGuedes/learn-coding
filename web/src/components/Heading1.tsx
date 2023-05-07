import { ReactElement, ReactNode } from "react";

type Props1 = {
  children: ReactNode;
};

export default function Heading1(props: Props1): ReactElement {
  return (
    <div>
      <h1 className="heading1">{props.children}</h1>
      <hr className="ruling-line" />
    </div>
  );
}
