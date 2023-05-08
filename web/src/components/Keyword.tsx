import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Keyword(props: Props): ReactElement {
  return <span className="keyword">{props.children}</span>;
}
