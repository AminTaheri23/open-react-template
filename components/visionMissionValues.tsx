import React from 'react';
import Image from 'next/image';
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

const VisionMissionValues = () => {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
  <div
    className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20"
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <div
      className="mx-auto max-w-3xl pb-4 text-center md:pb-12"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <div
        className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-red-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-red-200/50"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <span className="inline-flex bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
          Our Vision, Mission, and Values
        </span>
      </div>
      <h2
        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.red.200),theme(colors.gray.50),theme(colors.red.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        Enhancing Mobility, Empowering Lives
      </h2>
      <p
        className="text-lg text-red-200/65"
        data-aos="fade-up"
        data-aos-delay={500}
      >
        At Stride, we are dedicated to transforming rehabilitation through engaging and innovative exercise games.
      </p>
    </div>
    <div
      className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3"
      data-aos="fade-up"
      data-aos-delay={600}
    >
      <article data-aos="fade-up" data-aos-delay={700}>
        <h3
          className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200"
        >
          Vision
        </h3>
        <p className="text-red-200/65">
          To be the global leader in revolutionizing mobility and rehabilitation experiences through fun, interactive, and effective exercise solutions.
        </p>
      </article>
      <article data-aos="fade-up" data-aos-delay={800}>
        <h3
          className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200"
        >
          Mission
        </h3>
        <p className="text-red-200/65">
          To empower individuals on their journey to better mobility and wellness by offering innovative exercise games that make rehabilitation engaging and effective.
        </p>
      </article>
      <article data-aos="fade-up" data-aos-delay={900}>
        <h3
          className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200"
        >
          Values
        </h3>
        <ul className="list-disc list-inside text-red-200/65">
          <li>Empathy: We prioritize the needs of individuals in their recovery journey.</li>
          <li>Innovation: We embrace cutting-edge technology to deliver engaging solutions.</li>
          <li>Inclusion: We design experiences accessible to everyone, regardless of ability.</li>
          <li>Collaboration: We work with experts and users to continuously improve.</li>
          <li>Impact: We aim to make a meaningful difference in people’s lives.</li>
        </ul>
      </article>
    </div>
  </div>
</div>


    </section>
  );
};

export default VisionMissionValues;