import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode };

export default function Heading4(props: Props): ReactElement {
  return (
    <div>
      <h4 className="heading4">{props.children}</h4>
    </div>
  );
}
