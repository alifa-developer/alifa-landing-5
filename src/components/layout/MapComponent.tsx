"use client";

const defaultCenter = {
    lat: 39.912497254542274,
    lng: 116.45825740861099,
};

const MapComponent = () => {
    const src = `https://www.google.com/maps?q=${defaultCenter.lat},${defaultCenter.lng}&z=15&output=embed`;

    return (
        <div className="w-full h-[360px] md:h-[436px] lg:h-[700px]">
            <iframe
                title="Alifa office location"
                src={src}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export { MapComponent };