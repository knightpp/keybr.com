import {
  type CSSProperties,
  memo,
  type ReactNode,
  type RefObject,
  useImperativeHandle,
  useRef,
} from "react";
import { InputHandler, type Listeners } from "./inputhandler.ts";
import { type Focusable } from "./types.ts";

export const TextEvents = memo(function TextEvents({
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onInput,
  focusRef,
}: Listeners & {
  readonly focusRef?: RefObject<Focusable>;
}): ReactNode {
  const handler = useInputHandler();
  useImperativeHandle(focusRef, () => handler);
  handler.setListeners({ onFocus, onBlur, onKeyDown, onKeyUp, onInput });
  return (
    <div style={divStyle}>
      <input
        ref={handler.setInput}
        type="text"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        style={inputStyle}
      />
    </div>
  );
});

function useInputHandler(): InputHandler {
  const handlerRef = useRef<InputHandler | null>(null);
  let handler = handlerRef.current;
  if (handler == null) {
    handlerRef.current = handler = new InputHandler();
  }
  return handler;
}

const divStyle: CSSProperties = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "0px",
  height: "0px",
  overflow: "hidden",
};

const inputStyle: CSSProperties = {
  display: "block",
  margin: "0px",
  padding: "0px",
  width: "1em",
  height: "1em",
  border: "none",
  outline: "none",
};
