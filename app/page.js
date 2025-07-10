import Image from "next/image";
import { Nokora } from 'next/font/google';
import Link from "next/link";

const nokora = Nokora({
  subsets: ['latin'],
  weight: ['400', '900'],
});

export default function Home() {
  return (
    <main className="bg-emerald-50">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh]">
        <div className={`${nokora.className} text-emerald-800 flex flex-col justify-center items-start p-6 sm:p-8 md:p-10`}>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            ShortLinks : Your Instant URL Shortener
          </p>
          <div className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl mb-6 space-y-3">
            <p>Shrink your links in seconds.</p>
            <p>No sign-ups, no fuss — just paste your URL and get a short, shareable link instantly.</p>
            <p>Perfect for everything from casual sharing to pro use.</p>
            <p className="font-bold">Try it now 👇</p>
            <div className="flex items-center justify-start mt-6">
              <Link href="/shorten">
                <button className="bg-emerald-800 text-emerald-50 shadow-lg px-4 py-2 rounded-lg font-bold cursor-pointer">
                  Shorten
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-full">
          <Image alt="Vector illustration" src="/OfficeVector.jpg" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>
    </main>
  );
}
