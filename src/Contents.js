// Comen Images
import underLine from "./assets/images/headingLineImage.png";

// Feature Images
import BussinessIllustration from "./assets/images/BussinessIllustration.png";
import icons from "./assets/images/iconsImage.png";
import bussinessGrowthIcon from "./assets/images/businessGrowthIcon.png";
import dataSolutionIcon from "./assets/images/dataSolutionIcon.png";
import productDesignIcon from "./assets/images/productDesignIcon.png";
import researchIcon from "./assets/images/researchIcon.png";

// Services Images
import servicesLogo from "./assets/images/servicesLogo.png";
import graphicsDesignImage from "./assets/images/graphicsDesignLogo.png";
import IdeationImage from "./assets/images/ideaImage.png";
import BrandImage from "./assets/images/brandAndIdentityImage.png";
import customeAndServiceImage from "./assets/images/customeAndService.png";
import webStartergyImage from "./assets/images/webStartergyImage.png";

export const contents = {
  home: {},
  feature: {
    backgroundHeading: "FEATURE",
    mainImage: BussinessIllustration,
    iconsImage: icons,
    bussinessGrowthIcon: bussinessGrowthIcon,
    dataSolutionIcon: dataSolutionIcon,
    productDesignIcon: productDesignIcon,
    researchIcon: researchIcon,
    headingLineImage: underLine,
    heading: "Explore Our Professional Business Solutions",
    featuresList: [
      {
        title: "Business Growth",
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
        icon: bussinessGrowthIcon,
      },
      {
        title: "User Research",
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
        icon: researchIcon,
      },
      {
        title: "Big Data Solution",
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
        icon: dataSolutionIcon,
      },
      {
        title: "Product Design",
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
        icon: productDesignIcon,
      },
    ],
  },
  who: {},
  services: {
    backgroundHeading: "SERVICES",
    heading: `Great Features To Do Your Buisness
    Growth & Development`,
    logo: servicesLogo,
    underLineImage: underLine,
    servicesList: {
      graphicsDesign: {
        title: "Graphics Design",
        image: graphicsDesignImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      ideationAndEvaluation: {
        title: "Ideation & Evaluation",
        image: IdeationImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      brandIdentity: {
        title: "Brand Identity",
        image: BrandImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      customerService: {
        title: "Customer Service",
        image: customeAndServiceImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      webStrategy: {
        title: "Web Strategy",
        image: webStartergyImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
    },
  },
  Projects:{
    backgroundHeading:'PROJECTS',
    underLineImage:underLine,
    heading:`Checkout our Recently
    Completed Projects`,
  }
 

};
