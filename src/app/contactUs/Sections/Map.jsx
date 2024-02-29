import React from "react";

const Map = () => {
  return (
    <section>
      <div className="relative text-right h-[500px] w-full mb-12">
        <div className="truncate bg-none h-[500px] w-full">
          <iframe
            src="https://maps.google.com/maps?q=J-3%20SHAHABDI%20ENCLAVE%20NOIDA%20UTTAR%20PRADESH%20201301&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="0"
            className="w-full h-[500px] scrolling rounded-sm"
          ></iframe>
          <a href="https://www.embedgooglemap.net"></a>
          <br />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
        </div>
      </div>
    </section>
  );
};

export default Map;
