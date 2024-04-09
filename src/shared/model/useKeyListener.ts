import { useEffect } from "react";

function useKeyListener(key: string, onKeyDown: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        onKeyDown();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, onKeyDown]);
}

export default useKeyListener;
