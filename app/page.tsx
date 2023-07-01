import { ModeToggle } from "@/components/functional/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <ModeToggle />
      <Button>Click Me</Button>
    </main>
  );
}
