import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import gc_logo from "@/public/images/GC.png"
import bounce_logo from "@/public/images/bounce.png"
import mce_logo from "@/public/images/mce.png"

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.red.200),theme(colors.gray.50),theme(colors.red.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
            We are proudly supported by
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
              <span className="relative inline-flex items-center sm:mb-0 sm:w-auto">
                <Image
                  className="max-w-none"
                  src={gc_logo}
                  width={200}
                  height={200}
                  alt="Genesis Center"
                />
                </span>
              </div>
              
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <span className="relative inline-flex items-center sm:mb-0 sm:w-auto">
                    <Image
                      className="max-w-none"
                      src={mce_logo}
                      width={200}
                      height={200}
                      alt="MCE"
                    />
                  </span>
                </div>
              </div>
                
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              
                <div data-aos="fade-up" data-aos-delay={400}>
                  <span className="relative inline-flex items-center sm:mb-0 sm:w-auto">

                  <Image
                    className="max-w-none"
                    src={bounce_logo}
                    width={200}
                    height={200}
                    alt="Bounce Center"
                  />
                  </span>
                </div>
                </div>

              {/* <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Schedule Demo
                </a>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
