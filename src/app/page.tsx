import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" font-Poppins w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="maa-md:hidden" />
        <span className="orange_gradient text-center">This Is An Amazing Project</span>
      </h1>
      <button className="w-36 mt-1 bg-gradient-to-r from-[#3F034C] to-[#9A4380] hover:bg-opacity-40 transition duration-500 rounded-3xl p-3 font-semibold">
        <Link href="/auth/login">Sign In</Link>
      </button>
      <p className="desc text-center">
        Alconnect Pro is a dating platform connecting thousands of users to find thier ideal partnerr
        from all over the world, that have the same ambitions as thier partner, so that they can be together, it might be forever.
      </p>
    </section>
  );
}
