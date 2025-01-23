import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link to="/starter-guide">
        <Button variant="ghost">Starter Guide</Button>
      </Link>
      <Link to="/quiz">
        <Button variant="ghost">Quiz</Button>
      </Link>
      <Link to="/register">
        <Button variant="ghost">Sign Up</Button>
      </Link>
    </nav>
  );
};