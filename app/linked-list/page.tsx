import { Card, CardBody } from "@nextui-org/card";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <Card className="w-[600px] h-[400px] mx-auto">
            <CardBody className="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M8 12h8M12 16h8M8 8h8" />
                <circle cx="4" cy="12" r="2" />
                <circle cx="20" cy="8" r="2" />
                <circle cx="20" cy="16" r="2" />
              </svg>
              &nbsp;
              <p className="text-lg font-semibold text-center">Linked-List</p>
            </CardBody>
          </Card>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t backdrop-blur-sm bg-background/30">
        <p className="text-xs text-muted-foreground">
          © 2024 AlgoMitra. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <div className="flex items-center gap-4">
            <Link
              className="text-muted-foreground hover:text-foreground transition-colors"
              href="https://github.com/codernotme/AlgoMitra"
            >
              <GithubIcon className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
