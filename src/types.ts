import React from "react";

export interface TypeWriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  delay?: number;
  typingSpeed?: number;
  loop?: boolean;
  delayOnRestart?: number;
  cursor?: boolean;
}
