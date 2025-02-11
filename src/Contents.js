// Comen Images
import underLine from "../public/assets/images/headingLineImage.png";

// Feature Images
import BussinessIllustration from "../public/assets/images/BussinessIllustration.png";
import icons from "../public/assets/images/iconsImage.png";
import bussinessGrowthIcon from "../public/assets/images/businessGrowthIcon.png";
import dataSolutionIcon from "../public/assets/images/dataSolutionIcon.png";
import productDesignIcon from "../public/assets/images/productDesignIcon.png";
import researchIcon from "../public/assets/images/researchIcon.png";

// Services Images
import servicesLogo from "../public/assets/images/servicesLogo.png";
import graphicsDesignImage from "../public/assets/images/graphicsDesignLogo.png";
import IdeationImage from "../public/assets/images/ideaImage.png";
import BrandImage from "../public/assets/images/brandAndIdentityImage.png";
import customeAndServiceImage from "../public/assets/images/customeAndService.png";
import webStartergyImage from "../public/assets/images/webStartergyImage.png";

export const contents = {
  home: {},
  feature: {
    mainImage: BussinessIllustration,
    iconsImage: icons,
    bussinessGrowthIcon: bussinessGrowthIcon,
    dataSolutionIcon: dataSolutionIcon,
    productDesignIcon: productDesignIcon,
    researchIcon: researchIcon,
    headingLineImage: underLine,
  },
  services: {
    backgroundHeading: "SERVICES",
    heading: `Great Features To Do Your Buisness
    Growth & Development`,
    logo: servicesLogo,
    underLineImage: underLine,
    servicesList: {
      graphicsDesign:{
        title: "Graphics Design",
        image: graphicsDesignImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      ideationAndEvaluation:{
        title: "Ideation & Evaluation",
        image: IdeationImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      brandIdentity:{
        title: "Brand Identity",
        image: BrandImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      customerService:{
        title: "Customer Service",
        image: customeAndServiceImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
      webStrategy:{
        title: "Web Strategy",
        image: webStartergyImage,
        description: "Sed perspiciatis unde omnis natus error voluptatem.",
      },
    },
  },
  who :{
    
  }
};
