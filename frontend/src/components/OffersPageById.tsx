import { sampleOfferByIdResponse } from "@/model/sampleOfferByIdResponse";
import { Button } from "./ui/button";

export const OffersPageById = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-screen-md min-h-screen flex flex-col justify-start items-center shadow bg-white">
      <div className="flex flex-col items-center justify-start space-y-4 w-full">
        <img
          src={sampleOfferByIdResponse.image}
          className="rounded-lg object-cover"
          width={400}
          height={400}
        />
        <div className="w-full px-6">
          {/* Header */}
          <div className="flex gap-2 items-center">
            <div className="text-2xl text-start font-black uppercase">
              {sampleOfferByIdResponse.rewardDisplayName}
            </div>
            <span className="line-through text-slate-500">
              ${sampleOfferByIdResponse.price}
            </span>
          </div>

          {/* Product and Brand Name */}
          <div className="text-lg text-start font-semibold">
            {sampleOfferByIdResponse.brandName}{" "}
            {sampleOfferByIdResponse.productName}
          </div>
        </div>

        {/* Share Button */}
        <div className="w-full flex items-center justify-center">
          <Button variant={"outline"} className="min-w-64 rounded-full">
            Share
          </Button>
        </div>

        {/* Available Near You */}
        <section className="w-full px-6">
          <h3 className="font-bold text-lg">Available Near You</h3>
          <div className="flex w-full overflow-x-scroll no-scrollbar shadow rounded-3xl border border-slate-200">
            {sampleOfferByIdResponse.retailLocations.map((retailer) => (
              <div
                key={retailer.id}
                className="flex-none w-48 h-48 bg-white p-4 relative"
              >
                <h3 className="mt-2 text-lg font-semibold leading-tight">
                  {retailer.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {retailer.formattedAddress}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Product description */}
        <section className="pt-48 w-full px-6">
          <h3 className="font-bold text-lg">
            About {sampleOfferByIdResponse.productName}
          </h3>
          <p>{sampleOfferByIdResponse.productDescription}</p>
        </section>

        {/* Brand description */}
        <section className="pt-6 w-full px-6">
          <h3 className="font-bold text-lg">
            About {sampleOfferByIdResponse.brandName}
          </h3>
          <p>{sampleOfferByIdResponse.brandDescription}</p>
        </section>
      </div>
    </div>
  </div>
);
