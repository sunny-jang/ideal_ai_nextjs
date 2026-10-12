export const SITE_URL = 'https://ideal-ai.co.kr'
export const SITE_NAME = 'Ideal AI'

/** 카카오톡·슬랙·페이스북 등이 읽어가는 기본 공유 썸네일. scripts/generate_og_image.py 로 생성. */
export const OG_IMAGE = {
  url: '/assets/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Ideal AI',
  type: 'image/png',
}

/**
 * 페이지 metadata 를 만든다.
 *
 * Next 는 page 의 openGraph / twitter 객체를 layout 의 것과 깊게 병합하지 않고 통째로
 * 덮어쓴다. 그래서 페이지마다 images 를 다시 넣어주지 않으면 og:image 자체가 사라지고,
 * 카카오톡 링크에 썸네일이 뜨지 않는다. 이 헬퍼가 그 기본값을 채워준다.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  ogTitle,
  ogDescription,
  images,
  type = 'website',
  openGraph: ogExtra,
  ...rest
}) {
  const url = `${SITE_URL}${path}`
  const ogImages = images?.length ? images : [OG_IMAGE]
  const sharedTitle = ogTitle ?? title
  const sharedDescription = ogDescription ?? description

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'ko_KR',
      siteName: SITE_NAME,
      url,
      title: sharedTitle,
      description: sharedDescription,
      images: ogImages,
      ...ogExtra,
    },
    twitter: {
      card: 'summary_large_image',
      title: sharedTitle,
      description: sharedDescription,
      images: ogImages.map(image => (typeof image === 'string' ? image : image.url)),
    },
    ...rest,
  }
}
