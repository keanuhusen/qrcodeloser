import { headers } from 'next/headers';

export default async function Page() {
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || headersList.get('remote-address') || 'Unknown';
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const ipInfo = await res.json();
  const region = ipInfo?.regionName ? ipInfo.regionName : 'Unknown';
  const city = ipInfo?.city ? ipInfo.city : 'Unknown';

  return (
    <div className="block">
      <main className="py-8 px-4">
        IP address: {ip}
        <br />
        regin: {region}
        <br />
        city: {city}
        <br />
      </main>
    </div>
  );
}
