// import Image from "next/image";
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || headersList.get('remote-address') || 'Unknown';
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const ipInfo = await res.json();
  const region = ipInfo?.regionName ? ipInfo.regionName : 'Unknown';
  const city = ipInfo?.city ? ipInfo.city : 'Unknown';

  return (
    <div className="block">
      <main className="py-8 px-4">
        <div className="max-w-5xl m-auto">
          <h1 className="text-5xl font-display text-[#E94B3C] underline md:text-7xl">Hi, you&apos;re the QR Code loser</h1>
          <div className="mt-8 text-lg text-[#007E80] text-pretty md:text-xl">
            <p>You&apos;re currently based in {city}, {region}.</p>
            <br />
            <p>If you are seeing this, it&apos;s probably because you scanned a random QR code on the side of the street.</p>
            <br />
            <p>Interested in advancing our mission?</p>
            <a href="/gotcha" className="inline-block mt-4 px-8 py-2 text-white bg-[#E94B3C] border-2 rounded-lg border-[#E94B3C] cursor-pointer">Fill out the survey!</a>
            {/* <br />
            <p>Your IP address: {ip}</p>
            <p>Your State: {region}</p>
            <p>Your City: {city}</p> */}
          </div>
        </div>
      </main>
    </div>
  );
}