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
  typingBackspaceAnimation = false,
  typingBackspaceSpeed = 100,
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState<string | string[]>("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentDelay, setCurrentDelay] = useState(delay);
  const [hasLooped, setHasLooped] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setCurrentDelay(typingSpeed);
        setCurrentText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, currentDelay);
    } else if (
      typingBackspaceAnimation &&
      !isDeleting &&
      index === text.length
    ) {
      setIsDeleting(true);
      setCurrentDelay(delayOnRestart);
    } else if (
      typingBackspaceAnimation &&
      isDeleting &&
      index > 0 &&
      !hasLooped
    ) {
      timeout = setTimeout(() => {
        setCurrentDelay(typingBackspaceSpeed);
        setCurrentText((prevText) => prevText.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);
      }, currentDelay);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setCurrentDelay(delayOnRestart);
      if (!loop) {
        setHasLooped(true);
      }
    } else if (loop) {
      timeout = setTimeout(() => {
        setCurrentText("");
        setIndex(0);
      }, delayOnRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, currentDelay, isDeleting, text, loop, hasLooped]);

  return <span className={cursor ? styles.typewriter : ""}>{currentText}</span>;
}

export default Typewriter;
