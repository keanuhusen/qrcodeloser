import { headers } from 'next/headers';
import Image from "next/image";
import Survey from "@/components/survey";
// import Test from "@/components/test";

export default async function Page() {
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('remote-address') || 'Unknown';
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const ipInfo = await res.json();
  const region = ipInfo?.regionName ? ipInfo.regionName : 'Unknown';
  const city = ipInfo?.city ? ipInfo.city : 'Unknown';

  return (
    <div className="block">
      <main className="py-8 px-4">
        <div className="flex flex-row flex-wrap items-center gap-8 max-w-5xl m-auto md:flex-nowrap">
          <div className="basis-full grow-0 shrink-0 md:basis-1/2">
            <Image
              className="block m-auto"
              src="/images/gotcha-black.png"
              alt="Gotcha! Also... how did you manage to scan the QR code? You know, being blind and all."
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="basis-full grow-0 shrink-0 md:basis-1/2">
            <h1 className="text-5xl font-display text-[#E94B3C] underline md:text-7xl">gotcha !!</h1>
            <div className="mt-4 text-lg text-[#007E80] md:text-xl">
              <p>You have officially been got !!!</p>
              <p>HEHEHEH loser.</p>
            </div>
          </div>
        </div>
        <div className="block pt-8 max-w-3xl m-auto">
          <div className="basis-1/2 grow-0 shrink-0 text-pretty">
            <h1 className="text-2xl font-display text-[#E94B3C] md:text-4xl">What can be done with such an atrocity?!</h1>
            <div className="mt-4 text-lg text-[#007E80] md:text-xl">
              <p>Not much! Your time has been wasted. Yet here you are still reading this paragraph as if to miraculously bring about redemption for your lost time. Unfortunately, reading this will not... but there is something you can do to redeem your ego and pride.</p>
              <br />
              <p className="font-display text-[#E94B3C]">You can fill out the survey below!</p>
              <br />
              <p>All joking aside, this QR code was carefully placed for a specific purpose. You have so graciously scanned and, therefore, been led to the primary objective of this website, which is scientific research and not development. So please be honest when answering the survey; keep in mind that this is for posterity.</p>
              <br />
              <Survey ip={ip} region={region} city={city} />
              {/* <br />
              <Test /> */}
            </div>
          </div>
        </div>
      </main>
      <div className="border-t-8 border-[#E94B3C]" />
    </div>
  );
}
