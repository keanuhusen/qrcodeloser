// import Image from "next/image";
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('remote-address');
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  // const res = await fetch(`http://ip-api.com/json/104.49.117.202`);
  const ipInfo = await res.json();
  const region = ipInfo?.regionName ? ipInfo.regionName : 'Unknown';
  const city = ipInfo?.city ? ipInfo.city : 'Unknown';
  // console.log(ip);
  // console.log(ipInfo);

  return (
    <div className="block">
      <main className="py-8 px-4">
        <div className="max-w-5xl m-auto">
          <h1 className="text-5xl font-display text-[#E94B3C] underline md:text-7xl">Hi, I&apos;m QR Code Loser.</h1>
          <div className="mt-4 text-lg text-[#007E80] text-pretty md:text-xl">
            <p>I&apos;m currently based in Birmingham, AL.</p>
            <p>If you are seeing this, it&apos;s probably because you scanned a random QR code on the side of the street.</p>
            <br />
            <p>Your IP address: {ip}</p>
            <p>Your State: {region}</p>
            <p>Your City: {city}</p>
          </div>
        </div>
      </main>
    </div>
  );
}