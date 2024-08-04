import React, { useEffect, useState } from "react";
import { TypeWriterProps } from "./types";

import styles from "./typewriter.module.css";

function Typewriter({
  text,
  delay = 100,
  typingSpeed = 100,
  loop = false,
  delayOnRestart = 100,
  cursor = false,
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState<string | string[]>("");
  const [index, setIndex] = useState(0);
  const [currentDelay, setCurrentDelay] = useState(delay);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setCurrentDelay(typingSpeed);
        setCurrentText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, currentDelay);
    } else if (loop) {
      timeout = setTimeout(() => {
        setCurrentText("");
        setIndex(0);
      }, delayOnRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, currentDelay, text]);

  return <span className={cursor ? styles.typewriter : ""}>{currentText}</span>;
}

export default Typewriter;
