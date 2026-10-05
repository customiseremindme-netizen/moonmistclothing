import Overline from "@/components/ui/Overline";
import MediaFrame from "@/components/ui/MediaFrame";
import { capabilities } from "@/data/content";

/** Six capabilities as alternating editorial rows — not identical cards. */
export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-nav-theme="dark"
      aria-labelledby="capabilities-title"
      className="relative bg-deep py-24 text-ivory sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Overline tone="dark">{capabilities.overline}</Overline>
            <h2 id="capabilities-title" data-reveal="lines" className="heading-lg mt-6">
              {capabilities.heading}
            </h2>
          </div>
          <p data-reveal="fade" className="max-w-sm self-end text-base leading-relaxed text-mist lg:col-span-4 lg:col-start-9">
            {capabilities.intro}
          </p>
        </div>

        <ol className="mt-20 space-y-20 sm:mt-28 sm:space-y-28 lg:space-y-36">
          {capabilities.items.map((item, i) => {
            const flip = i % 2 === 1;
            const number = String(i + 1).padStart(2, "0");
            return (
              <li key={item.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                  {item.images.length === 1 ? (
                    <MediaFrame
                      image={item.images[0]}
                      parallax={7}
                      hover
                      sizes="(min-width: 1024px) 45vw, 92vw"
                      className="aspect-[4/3] rounded-sm bg-ink"
                    />
                  ) : (
                    <div className="grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4">
                      <MediaFrame
                        image={item.images[0]}
                        hover
                        sizes="(min-width: 1024px) 27vw, 55vw"
                        className="col-span-3 row-span-2 aspect-[3/4] rounded-sm bg-ink sm:aspect-auto"
                      />
                      {item.images.slice(1).map((img) => (
                        <MediaFrame
                          key={img.src}
                          image={img}
                          hover
                          sizes="(min-width: 1024px) 18vw, 38vw"
                          className="col-span-2 aspect-square rounded-sm bg-ink sm:aspect-auto sm:min-h-[180px]"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div
                  data-reveal="stagger"
                  className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}
                >
                  <span className="block font-serif text-5xl italic leading-none text-bronze sm:text-6xl">{number}</span>
                  <h3 className="heading-md mt-6">{item.title}</h3>
                  <span className="mt-6 block h-px w-full bg-ivory/15" aria-hidden="true" />
                  <p className="mt-6 max-w-md text-base leading-relaxed text-mist sm:text-[17px]">{item.copy}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
