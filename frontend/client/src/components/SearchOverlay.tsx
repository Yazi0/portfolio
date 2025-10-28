import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchableContent = [
  {
    type: "Project",
    title: "Travelling Web Application",
    description: "HTML, CSS, JavaScript - Login/Register, Travelling places",
    tags: ["HTML", "CSS", "JavaScript", "Travel"],
  },
  {
    type: "Project",
    title: "Food Ordering Web Application",
    description: "React, MySQL - Customer Login, Find shops, Order food",
    tags: ["React", "MySQL", "Food", "Admin"],
  },
  {
    type: "Skill",
    title: "React",
    description: "JavaScript library for building user interfaces",
    tags: ["Frontend", "JavaScript"],
  },
  {
    type: "Skill",
    title: "Node.js",
    description: "JavaScript runtime for backend development",
    tags: ["Backend", "JavaScript"],
  },
  {
    type: "Education",
    title: "HND in Information Technology",
    description: "SLIATE - Current",
    tags: ["Education", "IT"],
  },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchableContent);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults(searchableContent);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(searchableContent);
    } else {
      const filtered = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      );
      setResults(filtered);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-3xl space-y-4">
        <div className="bg-background border rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects, skills, education..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 text-lg"
              autoFocus
              data-testid="input-search"
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              data-testid="button-close-search"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="bg-background border rounded-lg p-4 shadow-lg max-h-[60vh] overflow-y-auto space-y-3">
            {results.map((item, idx) => (
              <Card
                key={idx}
                className="p-4 hover-elevate transition-all cursor-pointer"
                onClick={onClose}
                data-testid={`search-result-${idx}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIdx) => (
                      <Badge
                        key={tagIdx}
                        variant="outline"
                        className="text-xs font-mono"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {results.length === 0 && query && (
          <div className="bg-background border rounded-lg p-8 shadow-lg text-center">
            <p className="text-muted-foreground">
              No results found for "{query}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
