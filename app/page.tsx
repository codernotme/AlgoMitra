import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="mt-8">
        <Card>
          <CardBody>
            <h1 className="text-3xl font-bold">Welcome !</h1>
            <Image
              alt="Algomitra logo"
              height={200}
              src="/logo.png"
              width={200}
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
