import { ReactElement, ReactNode } from "react";

type prop = { children: ReactNode };

export default function Heading4(props: Props): ReactElement {
  return (
    <div>
      <h4>{props.children}</h4>
    </div>
  );
}
