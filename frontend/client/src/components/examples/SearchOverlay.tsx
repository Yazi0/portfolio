import SearchOverlay from "../SearchOverlay";
import { ThemeProvider } from "../ThemeProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SearchOverlayExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProvider>
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Open Search</Button>
        <SearchOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
