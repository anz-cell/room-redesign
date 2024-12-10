import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Link href={'/dashboard'}>
        <Button className='mt-5'>Get Started</Button>
      </Link>
    </div>
  );
}
