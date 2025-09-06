"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelatedCanvasComp() {
  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
        src="/image.png"
        width={400}
        height={500}
        cellSize={1}
        dotScale={0.3}
        shape="circle"
backgroundColor="transparent"
        dropoutStrength={0.4}
        interactive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
     
      />
    </div>
  );
}
