import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Heading2(props: Props): ReactElement {
  return (
    <div>
      <h2>{props.children}</h2>
      <hr className="ruling-line" />
    </div>
  );
}
