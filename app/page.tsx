import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { GithubIcon } from "@/components/icons";
import "../styles/home.css";
import GraphCard from "@/components/GraphCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl logo font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
                    Visualize Algorithms,
                    <br />
                    Master Complexity!
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Interactive algorithm visualizations to help you understand
                    and master computer science concepts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/home" color="foreground">
                    <Button
                      className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white"
                      size="lg"
                    >
                      Start Visualizing
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    className="border-[#87CEEB] text-[#87CEEB] hover:bg-[#87CEEB]/10"
                    size="lg"
                    variant="bordered"
                  >
                    View Demos
                  </Button>
                </div>
              </div>
              <GraphCard />
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="card">
                <div className="content p-6 space-y-2 ">
                  <div className="para">
                    <div className="p-2 w-12 h-12 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center mb-4">
                      <svg
                        className=" w-6 h-6 text-[#87CEEB]"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 16v4" />
                        <path d="M12 8v4" />
                        <path d="M12 4v0" />
                        <circle cx="12" cy="12" r="1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">
                      Interactive Visualizations
                    </h3>
                    <p className="text-muted-foreground">
                      Step-by-step algorithm animations with adjustable speed
                      and custom inputs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content p-6 space-y-2">
                  <div className="para">
                    <div className="p-2 w-12 h-12 rounded-lg bg-[#FF6B6B]/20 flex items-center justify-center mb-4">
                      <svg
                        className=" w-6 h-6 text-[#FF6B6B]"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">
                      Comprehensive Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Detailed explanations, time complexity analysis, and
                      real-world applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content p-6 space-y-2">
                  <div className="para">
                    <div className="p-2 w-12 h-12 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center mb-4">
                      <svg
                        className=" w-6 h-6 text-[#87CEEB]"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Practice Mode</h3>
                    <p className="text-muted-foreground">
                      Test your understanding with interactive exercises and
                      quizzes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
                  Join Our Community
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Subscribe to our newsletter for the latest algorithm
                  visualizations and learning resources.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1  backdrop-blur-sm"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-primary transition-colors"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
        </section>
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
