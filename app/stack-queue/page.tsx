import { Card, CardBody } from "@heroui/react";
import { GithubIcon } from "@/components/icons";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <Card className="w-[600px] h-[400px] mx-auto">
            <CardBody className="flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-center">Stack</p>
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
