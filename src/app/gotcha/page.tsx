import Image from "next/image";
// import ContactForm from "@/components/form";
import Survey from "@/components/survey";

export default function Page() {
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
              <p>you have officially been got !!!</p>
              <p>hehehe loser.</p>
            </div>
          </div>
        </div>
        <div className="block pt-8 max-w-3xl m-auto">
          <div className="basis-1/2 grow-0 shrink-0 text-pretty">
            <h1 className="text-2xl font-display text-[#E94B3C] md:text-4xl">What can be done with such an atrocity?!</h1>
            <div className="mt-4 text-lg text-[#007E80] md:text-xl">
              <p>Have no fear. Your time has been wasted... yes, it has indeed been wasted. Yet you are still reading this paragraph as if it will miraculously bring about redemption for your lost time. It will not... but there is something you can do to redeem your ego and... dare I say, your pride!</p>
              <br />
              <p>You can fill out the survey below!</p>
              <br />
              <p>All joking laid aside, the true intent for this QR code was science. You have so graciously scanned and been led to the primary purpose of this website which is research and not development. So please, when answering the survey, keep in mind that this is for posterity.</p>
              <br />
              <Survey />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
