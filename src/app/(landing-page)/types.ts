// types.ts

export interface Hero {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
}

export interface Links {
  chinaSchoolGuideUrl: string;
  whoWeAreYoutube: string;
}

export interface TrustBadge {
  title: string;
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface SuccessStoryImage {
  bg: string;
  main: string;
}

export interface SuccessStoryImages {
  desktop: SuccessStoryImage;
  tablet: SuccessStoryImage;
  mobile: SuccessStoryImage;
}

export interface SuccessStory {
  name: string;
  title: string;
  outcome: string;
  timeline: string;
  description: string;
  youtube: string;
  images: SuccessStoryImages;
}

export interface Expert {
  name: string;
  designation: string;
  photo: string;
  experiences: string[];
}

export interface LandingPageResponse {
  id: string;
  hero: Hero;
  links: Links;
  trustBadges: TrustBadge[];
  successStories: SuccessStory[];
  experts: TeamMember[];
}
export interface TeamMember {
  name: string;
  title: string;
  shortDescription: string;
  countryFlag: string;
  designation: string;
  experiences: string[];
  photo: string;
}

export interface SEO {
  id: string;
  title: string;
  description: string;
  canonical: string;
  indexable: boolean;
  schema: {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    [key: string]: any; 
  };
  createdAt: string | null;
  updatedAt: string | null;
}

