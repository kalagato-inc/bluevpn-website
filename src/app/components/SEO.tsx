import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEO({
  title,
  description,
  keywords = [],
  author,
  image = 'https://vpn-blue.info/og-image.jpg', // Default OG image
  url = 'https://vpn-blue.info',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps) {
  const siteTitle = 'Blue VPN';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Fast, secure, and private VPN service. Protect your online privacy and access content worldwide.';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Article specific tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}

interface BlogPostSEOProps {
  post: {
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    category: string;
    mainImage: string;
    slug: { current: string } | string;
    metaDescription?: string;
    metaKeywords?: string[];
  };
}

export function BlogPostSEO({ post }: BlogPostSEOProps) {
  const slug = typeof post.slug === 'string' ? post.slug : post.slug.current;
  const url = `https://vpn-blue.info/blog/${slug}`;
  const publishedTime = new Date(post.publishedAt).toISOString();

  // Generate JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.mainImage,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blue VPN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vpn-blue.info/logo.png',
      },
    },
    datePublished: publishedTime,
    description: post.metaDescription || post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.metaKeywords}
        author={post.author}
        image={post.mainImage}
        url={url}
        type="article"
        publishedTime={publishedTime}
        section={post.category}
        tags={post.metaKeywords}
      />
      {/* Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    </>
  );
}
