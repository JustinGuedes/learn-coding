import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode; color: string };

export default function Syntax(props: Props): ReactElement {
  switch (props.color) {
    case "red":
      return <span className="redSyntax">{props.children}</span>;
    case "blue":
      return <span className="blueSyntax">{props.children}</span>;
    default:
      return <span>{props.children}</span>;
  }
}
