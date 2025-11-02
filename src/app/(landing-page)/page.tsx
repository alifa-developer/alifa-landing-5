
import Hero from './components/hero/Hero'
import VideoSectionMobile from './components/hero/VideoSectionMobile'
import TrustBadges from './components/TrustBadges/TrustBadges'
import { LandingPageResponse, SEO } from './types'
import { get } from '@/api/ApiClient'
import OurServices from './components/ourServices/OurServices'
import SuccessStories from './components/SuccessStories/SuccessStories'
import OurProcess from './components/ourProcess/OurProcess'
import LocationSection from '@/components/layout/LocationSection'
import ExpertTeam from './components/expertTeam/ExpertTeam'
import TrustedContent from './components/hero/TrustedContent'
import { Metadata } from "next";
import config from '@/types/Config'

export async function generateMetadata(): Promise<Metadata> {
  const domain = config.domain;
  const seo = await get<SEO>(`/api/v1/content/landing-page-seo/clone?domain=${domain}`);

  return {
    title: seo?.title||"",
    description: seo?.description||"",
    alternates: {
      canonical: seo?.canonical||"",
    },
    robots: seo?.indexable ? "index, follow" : "noindex, nofollow",
    openGraph: {
      title: seo?.title||"",
      description: seo?.description||"",
      url: seo?.canonical||"",
    },
  };
}

const Page = async() => {
    const seo = await get<SEO>(`/api/v1/content/landing-page-seo/clone?domain=${config.domain}`);
  const data = await get<LandingPageResponse>("/api/v1/content/landing-page");
  return (
     <>
      {seo?.schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo?.schema || {}),
          }}
        />
      ) : null}
      <Hero hero={data.hero} chinaSchoolGuideUrl={data.links.chinaSchoolGuideUrl} url={data.links.whoWeAreYoutube} />
      <VideoSectionMobile url={data.links.whoWeAreYoutube} />
      <TrustedContent />
      <TrustBadges trustBadges={data.trustBadges} />
      <OurServices />
      <SuccessStories successStories={data.successStories} />
      <OurProcess />
      <ExpertTeam experts = {data.experts}/>
      <LocationSection />
    </>
  )
}

export default Page
