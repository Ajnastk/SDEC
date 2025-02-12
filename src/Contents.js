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

//Project Images

import project1Image from "./assets/images/project-1.png";
import project2Image from "./assets/images/project-2.png";
import project3Image from "./assets/images/project-3.png";


// Seo
import speakerImage from "./assets/images/seoImage.svg";

// Say's
import iconsimage1 from "./assets/images/saysIconImage-1.svg";
import iconsimage2 from "./assets/images/saysIconImage-2.svg";
import commentImage from "./assets/images/commentImage.svg";
import doubleCodes from "./assets/images/doubleCodes.svg";


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
  seo: {
    backgroundHeading: "SEO",
    underLine: underLine,
    seoImage: speakerImage,
    titile: `Manage Business SEO
     Optimization Easily`,
    description:
      "Optimize your website with the best SEO strategies for higher rankings and better visibility.",
    questions: [
      {
        question: " Why SEO Growth Business Strategy?",
        answer: `On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralised by the charms of
              pleasure of the moment, blinded.`,
      },
      {
        question: " Why SEO Growth Business Strategy?",
        answer: `On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralised by the charms of
              pleasure of the moment, blinded.`,
      },
      {
        question: " Why SEO Growth Business Strategy?",
        answer: `On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralised by the charms of
              pleasure of the moment, blinded.`,
      },
    ],
  },
  Projects: {
    backgroundHeading: "PROJECTS",
    underLineImage: underLine,
    heading: `Checkout our Recently
    Completed Projects`,
    ourProjects :[
      {
        id:1,
        category:'Marketing',
        title:'Tech website Solution',
        image:project1Image
      },
      {
        id:2,
        category:'Technology',
        title:'App platform Integration',
        image:project2Image
      },{
        id:3,
        category:'Software',
        title:'Software Tools Development',
        image:project3Image
      },{
        id:4,
        category:'demo',
        title:'just checking',
        image:icons
      }
    ]
    
  },
  says: {
    underLine: underLine,
    backgroundHeading: "SAY'S",
    iconsimage1: iconsimage1,
    iconsimage2: iconsimage2,
    title: "People's Say About Our Support & Services",
    testimonials: [
      {
        text: `"Sed ut perspiciatis unde natus error sit voluptatem accusantium laudant totames."`,
        name: "Richard S. Brooks",
        image: commentImage,
        doubleCodes: doubleCodes,
        roll:"CEO"
      },
      {
        text: `"Sed ut perspiciatis unde natus error sit voluptatem accusantium laudant totames."`,
        name: "Another Person",
        image: commentImage,
        doubleCodes: doubleCodes,
        roll:"FOUNDER"
      },
      {
        text: `"Sed ut perspiciatis unde natus error sit voluptatem accusantium laudant totames."`,
        name: "Richard S. Brooks",
        image: commentImage,
        doubleCodes: doubleCodes,
        roll:"CEO"
      },
      {
        text: `"Sed ut perspiciatis unde natus error sit voluptatem accusantium laudant totames."`,
        name: "Another Person",
        image: commentImage,
        doubleCodes: doubleCodes,
        roll:"FOUNDER"
      },
    ],
    totalTestimonials: 66,
  },
   
  }
 


