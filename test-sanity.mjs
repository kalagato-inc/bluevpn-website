import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'c2x83nrr',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  "mainImage": mainImage.asset->url,
  category,
  themeColor,
  publishedAt,
  readTime,
  excerpt
}`;

console.log('🔍 Testing Sanity connection...\n');
console.log('Project ID:', 'c2x83nrr');
console.log('Dataset:', 'production');
console.log('\n📡 Fetching blog posts...\n');

try {
  const posts = await client.fetch(query);

  if (posts.length === 0) {
    console.log('❌ No published blog posts found!');
    console.log('\n💡 Make sure you clicked "Publish" in Sanity Studio (http://localhost:3333)');
  } else {
    console.log(`✅ Found ${posts.length} published blog post(s):\n`);

    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Author: ${post.author}`);
      console.log(`   Category: ${post.category}`);
      console.log(`   Slug: ${post.slug.current}`);
      console.log(`   Published: ${new Date(post.publishedAt).toLocaleDateString()}`);
      console.log(`   Has Image: ${post.mainImage ? '✅ Yes' : '❌ No'}`);
      console.log('');
    });
  }

  console.log('🎉 Sanity API connection is working!');
  console.log('\nIf blogs still don\'t show on website:');
  console.log('1. Make sure website is running: npm run dev');
  console.log('2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)');
  console.log('3. Check browser console for errors (F12)');

} catch (error) {
  console.error('❌ Error fetching from Sanity:', error.message);
  console.log('\n🔧 Troubleshooting:');
  console.log('1. Make sure Sanity Studio is running: cd sanity && sanity dev');
  console.log('2. Check that project ID is correct in .env file');
  console.log('3. Verify dataset name is "production"');
}
