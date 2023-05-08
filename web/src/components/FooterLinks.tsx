import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode; hyperlink: string };

export default function Link(props: Props): ReactElement {
  return (
    <div>
      <span>
        <a className="hyperlinks" href={props.hyperlink}>
          {props.children}
        </a>
      </span>
    </div>
  );
}
