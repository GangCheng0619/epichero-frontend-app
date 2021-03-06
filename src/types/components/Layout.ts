import { ReactNode } from "react";

// types
import { InitialProps } from "./Common";

export interface FlexLayoutProps extends InitialProps {
  children?: ReactNode;
}
export interface LayoutColProps extends FlexLayoutProps {
  flex?: string;
  item?: number;
  mWidth?: number;
}
export interface LayoutRowProps extends FlexLayoutProps {
  display?: "grid" | "flex" | "block";
  gap?: string | number;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "nowrap" | "wrap";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "initial"
    | "space-around"
    | "space-between"
    | "stretch";
  alignItems?: "center" | "flex-start" | "flex-end" | "initial" | "stretch";
  templateCol?: string;
  templateRow?: string;
}

export interface ResponsivedLayoutRowProps extends LayoutRowProps {
  responsive?: { [key: number]: LayoutRowProps };
}
export interface ResponsivedLayoutColProps extends LayoutColProps {
  responsive?: { [key: number]: LayoutColProps };
}
