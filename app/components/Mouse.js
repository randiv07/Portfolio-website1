'use client';

import React from 'react';
import MouseScript from '@/app/components/MouseScript';

function Mouse() {
  MouseScript();
  return (
    <div className="Mouse bg-[#03011e] h-screen w-screen overflow-hidden relative">
      <canvas id="canvas" className="absolute top-0 left-0 h-full w-full" />
      <div className="container flex items-center justify-center h-full w-full overflow-hidden">
        <p className="text-center text-white text-[50px] md:text-[100px] lg:text-[150px] font-medium tracking-widest z-10">
          UNREAL PIX
        </p>
      </div>
    </div>
  );
}

export default Mouse;

