import { contents } from "../contents";

const Feature = () => {
  const { feature } = contents;
  return (
    <section className="relative bg-[#000A1F] text-white py-12 px-6 md:px-12 overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Left Side - Illustration */}
        <div className="relative w-full md:w-3/7 flex justify-center">
          <img
            src={feature.iconsImage}
            alt="icons"
            className="absolute top-10 left-8 w-20"
          />
          <img
            src={feature.mainImage}
            alt="Business Illustration"
            className="w-60"
          />
          {/* <img src="/images/play.png" alt="Play" className="absolute bottom-10 left-6 w-8 animate-bounce delay-100" /> */}
          {/* <img src="/images/cactus.png" alt="Cactus" className="absolute bottom-0 right-10 w-10" /> */}
        </div>

        {/* Right Side - Text & Features */}
        <div className="w-full md:w-1/2">
          {/* Background Text */}

          <div className="absolute right-17 top-16 font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-[0] tracking-tight uppercase text-transparent stroke-white">
            FEATURES
          </div>

          <div className="">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <img src={feature.headingLineImage} alt="" />
              Explore Our Professional <br /> Business Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Growth */}
              <div className="flex items-center space-x-4">
                <img
                  src={feature.bussinessGrowthIcon}
                  alt="Business Growth"
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-medium">Business Growth</h3>
                  <p className="text-gray-400 text-sm">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </p>
                </div>
              </div>

              {/* User Research */}
              <div className="flex items-center space-x-4">
                <img
                  src={feature.researchIcon}
                  alt="User Research"
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-medium">User Research</h3>
                  <p className="text-gray-400 text-sm">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </p>
                </div>
              </div>

              {/* Big Data Solution */}
              <div className="flex items-center space-x-4">
                <img
                  src={feature.dataSolutionIcon}
                  alt="Big Data Solution"
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-medium">Big Data Solution</h3>
                  <p className="text-gray-400 text-sm">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </p>
                </div>
              </div>

              {/* Product Design */}
              <div className="flex items-center space-x-4">
                <img
                  src={feature.productDesignIcon}
                  alt="Product Design"
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-medium">Product Design</h3>
                  <p className="text-gray-400 text-sm">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
