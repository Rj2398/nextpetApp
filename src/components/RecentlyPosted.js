import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
function RecentlyPosted() {
  return ( 
    <>
        <div className="between-bannershead-wrap">
            <Image src="/images/Nextpet-imgs/recently-posted-imgs/side1.png" alt="img" width={120} height={160} />
            <h1>Recently Posted</h1>
            <Image src="/images/Nextpet-imgs/recently-posted-imgs/side2.png" alt="img" width={120} height={160}/>
        </div>

    </>
  );
}
export default RecentlyPosted;
