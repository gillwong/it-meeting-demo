import { H1, H2, H3, H4 } from "@/components/typography";

import Link from "next/link";
import Image from "next/image";

import birdImage from "@/assets/bird.jpg";
import smallBirdImage from "@/assets/bird.webp";

import ShapeOriginal from "@/assets/shape.svg";
import ShapeTight from "@/assets/shape-tight.svg";
import ShapeModified from "@/assets/shape-modified.svg";
import shapeModifiedUrl from "@/assets/shape-modified.svg?url";
import Shape from "@/components/shape";

import FrameOriginal from "@/assets/frame.svg";
import Frame from "@/components/frame";

export default function Home() {
  return (
    <main>
      <H1 className="text-center mt-6">IT Meeting Demo</H1>

      <section className="p-8">
        <H2>Images</H2>

        <section>
          <H3>Local Images - automatic width & height</H3>
          <Image src={smallBirdImage} alt="A bird" />
        </section>

        <section>
          <H3>Local Images - adjusting width & height</H3>
          <Image
            src={birdImage}
            width={320} // smaller file size
            alt="A bird"
          // className="w-80" // larger file size
          />
        </section>

        <section>
          <H3>Local Images - fill prop</H3>
          <div className="relative w-1/2 aspect-square">
            <Image
              src="/pattern.webp"
              alt="Square pattern"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </section>

        <section>
          <H3>Local Images - sizes prop</H3>
          <div className="relative w-3/5 sm:w-1/2 aspect-square">
            <Image
              src={birdImage}
              alt="A bird"
              fill
              sizes="(max-width: 639px) 60vw, 50vw"
              className="object-cover object-[center_25%] rounded-full"
            />
          </div>
        </section>

        <section>
          <H3>Compressing Images</H3>
          <div className="flex">
            <section className="w-1/2">
              <H4 className="text-center">Original Image</H4>
              <Image
                src={birdImage} // large file size inside repo (15 MB)
                alt="A bird"
                unoptimized
              />
            </section>
            <section className="w-1/2">
              <H4 className="text-center">Compressed Image</H4>
              <Image
                src={smallBirdImage} // small file size inside repo (0.6 MB)
                alt="A bird"
                unoptimized
              />
            </section>
          </div>
        </section>
      </section>

      <section className="p-8">
        <H2>Scalable Vector Graphics (SVG)</H2>

        <section>
          <H3>Inline SVG - import .svg as React component</H3>
          <section>
            <H4>Original Figma export</H4>
            <div className="border-2 border-black mb-2">
              <ShapeOriginal />
            </div>
          </section>
          <section>
            <H4>Removed shadows & clipped content in Figma</H4>
            <div className="border-2 border-black mb-2">
              <ShapeTight />
            </div>
          </section>
          <section>
            <H4>Modified .svg file (removed width & height attributes)</H4>
            <div className="border-2 border-black mb-2">
              <ShapeModified className="drop-shadow-lg" />
            </div>
          </section>
        </section>

        <section>
          <H3>SVG as Image</H3>
          <Image
            src={shapeModifiedUrl}
            alt="A shape"
            className="drop-shadow-lg"
          />
        </section>

        <section>
          <H3>
            Inline SVG - manual convertion to React component using{" "}
            <Link
              href="https://react-svgr.com/playground/?typescript=true"
              target="_blank"
              className="text-blue-500 underline underline-offset-2 hover:underline-offset-4"
            >
              SVGR Playground
            </Link>
          </H3>
          <p>Prefix the ids with the component name to prevent id collision.</p>
          <Shape />
          <p>Convert data URI href in image to file using{" "}
            <Link href="https://www.site24x7.com/tools/datauri-to-image.html" target="_blank" className="text-blue-500 underline underline-offset-2 hover:underline-offset-4">Data URI to Image Converter</Link>:
          </p>
          <Frame className="drop-shadow-lg"/>
          <p>Original Figma export:</p>
          <FrameOriginal className="drop-shadow-lg" />
        </section>
      </section>
    </main>
  );
}
