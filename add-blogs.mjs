import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'c2x83nrr',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN || '', // Will be provided
});

const blogs = [
  {
    _type: 'post',
    title: 'Top 10 VPN Security Tips for 2026',
    slug: {
      _type: 'slug',
      current: 'top-10-vpn-security-tips-2026'
    },
    author: 'Sarah Mitchell',
    category: 'Security',
    themeColor: 'blue',
    publishedAt: new Date('2026-01-15T10:00:00Z').toISOString(),
    readTime: '7 min read',
    excerpt: 'Discover the essential security practices every VPN user should know in 2026. From choosing strong protocols to avoiding common pitfalls.',
    metaDescription: 'Learn the top 10 VPN security tips for 2026. Protect your privacy with expert advice on protocols, encryption, and best practices.',
    metaKeywords: ['VPN security', 'online privacy', 'encryption', 'cybersecurity', 'VPN tips'],
    body: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span1', text: 'In 2026, online privacy has never been more critical. With increasing cyber threats and surveillance, using a VPN is essential—but only if you\'re doing it right. Here are the top 10 security tips every VPN user should follow.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block2',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span2', text: '1. Choose a No-Logs VPN Provider', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block3',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span3', text: 'Always select a VPN provider with a strict no-logs policy. This means they don\'t store any information about your online activities, ensuring your privacy even if they\'re legally compelled to share data.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block4',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span4', text: '2. Use Strong Encryption Protocols', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block5',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span5', text: 'Opt for VPNs that use AES-256 encryption, the gold standard in the industry. Protocols like WireGuard and OpenVPN offer excellent security and performance.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block6',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span6', text: '3. Enable the Kill Switch Feature', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block7',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span7', text: 'A kill switch automatically disconnects your internet if the VPN connection drops, preventing your data from being exposed. This is crucial for maintaining privacy.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block8',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span8', text: 'Conclusion', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'block9',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span9', text: 'Following these security tips will help you maximize the protection your VPN offers. Stay safe, stay private, and enjoy the internet without compromising your security.', marks: [] }],
        markDefs: []
      }
    ]
  },
  {
    _type: 'post',
    title: 'How to Stream Netflix with a VPN: Complete Guide',
    slug: {
      _type: 'slug',
      current: 'stream-netflix-with-vpn-guide'
    },
    author: 'Michael Chen',
    category: 'Streaming',
    themeColor: 'purple',
    publishedAt: new Date('2026-01-18T10:00:00Z').toISOString(),
    readTime: '6 min read',
    excerpt: 'Unlock global Netflix libraries and stream your favorite shows from anywhere. Learn how to bypass geo-restrictions and enjoy unlimited content.',
    metaDescription: 'Complete guide to streaming Netflix with a VPN. Access global content libraries, bypass geo-blocks, and watch shows from any country.',
    metaKeywords: ['Netflix VPN', 'streaming', 'geo-restrictions', 'unblock Netflix', 'VPN streaming'],
    body: [
      {
        _type: 'block',
        _key: 'netflix1',
        style: 'normal',
        children: [{ _type: 'span', _key: 'nspan1', text: 'Did you know that Netflix has different content libraries for different countries? With Blue VPN, you can access shows and movies from anywhere in the world. Here\'s how to do it.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix2',
        style: 'h2',
        children: [{ _type: 'span', _key: 'nspan2', text: 'Why Netflix Content Varies by Country', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix3',
        style: 'normal',
        children: [{ _type: 'span', _key: 'nspan3', text: 'Netflix licenses content differently for each region due to copyright agreements. A show available in the US might not be in the UK, and vice versa. This is where a VPN becomes invaluable.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix4',
        style: 'h2',
        children: [{ _type: 'span', _key: 'nspan4', text: 'Step-by-Step: Streaming Netflix with Blue VPN', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix5',
        style: 'h3',
        children: [{ _type: 'span', _key: 'nspan5', text: 'Step 1: Connect to a VPN Server', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix6',
        style: 'normal',
        children: [{ _type: 'span', _key: 'nspan6', text: 'Open Blue VPN and connect to a server in the country whose Netflix library you want to access. For example, connect to a US server for American Netflix.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix7',
        style: 'h3',
        children: [{ _type: 'span', _key: 'nspan7', text: 'Step 2: Clear Your Browser Cache', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix8',
        style: 'normal',
        children: [{ _type: 'span', _key: 'nspan8', text: 'Before accessing Netflix, clear your browser cookies and cache. This ensures Netflix recognizes your new location correctly.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix9',
        style: 'h2',
        children: [{ _type: 'span', _key: 'nspan9', text: 'Best Regions for Netflix Content', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'netflix10',
        style: 'normal',
        children: [{ _type: 'span', _key: 'nspan10', text: 'The US Netflix has the largest library, followed by Canada and the UK. Japan offers excellent anime selections. Experiment with different regions to find your favorites!', marks: [] }],
        markDefs: []
      }
    ]
  },
  {
    _type: 'post',
    title: 'Gaming with a VPN: Lower Ping and DDoS Protection',
    slug: {
      _type: 'slug',
      current: 'gaming-with-vpn-lower-ping-ddos-protection'
    },
    author: 'Alex Rodriguez',
    category: 'Gaming',
    themeColor: 'emerald',
    publishedAt: new Date('2026-01-20T10:00:00Z').toISOString(),
    readTime: '8 min read',
    excerpt: 'Level up your gaming experience with a VPN. Reduce lag, protect against DDoS attacks, and access region-locked games with these expert tips.',
    metaDescription: 'Learn how a VPN can improve your gaming experience. Lower ping, prevent DDoS attacks, access geo-locked games, and play safely online.',
    metaKeywords: ['gaming VPN', 'reduce lag', 'DDoS protection', 'gaming security', 'lower ping'],
    body: [
      {
        _type: 'block',
        _key: 'gaming1',
        style: 'normal',
        children: [{ _type: 'span', _key: 'gspan1', text: 'Gamers often overlook VPNs, thinking they only slow down connections. But with the right VPN, you can actually improve your gaming experience while staying protected from threats.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming2',
        style: 'h2',
        children: [{ _type: 'span', _key: 'gspan2', text: 'How a VPN Can Improve Gaming Performance', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming3',
        style: 'normal',
        children: [{ _type: 'span', _key: 'gspan3', text: 'A quality gaming VPN routes your traffic through optimized servers, potentially reducing ping and packet loss. Blue VPN\'s dedicated gaming servers are strategically located near major game servers for minimal latency.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming4',
        style: 'h2',
        children: [{ _type: 'span', _key: 'gspan4', text: 'DDoS Protection for Competitive Players', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming5',
        style: 'normal',
        children: [{ _type: 'span', _key: 'gspan5', text: 'DDoS attacks are a real threat in competitive gaming. A VPN hides your real IP address, making it nearly impossible for attackers to target you. This is crucial for streamers and esports players.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming6',
        style: 'h2',
        children: [{ _type: 'span', _key: 'gspan6', text: 'Access Region-Locked Games and Early Releases', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming7',
        style: 'normal',
        children: [{ _type: 'span', _key: 'gspan7', text: 'Many games launch earlier in certain regions. Connect to a VPN server in that country to play games before they\'re available in your area. This also unlocks region-exclusive content and servers.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming8',
        style: 'h2',
        children: [{ _type: 'span', _key: 'gspan8', text: 'Conclusion', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'gaming9',
        style: 'normal',
        children: [{ _type: 'span', _key: 'gspan9', text: 'A gaming VPN is no longer optional for serious players. Protect yourself from DDoS attacks, reduce lag, and unlock global gaming content with Blue VPN. Game on!', marks: [] }],
        markDefs: []
      }
    ]
  },
  {
    _type: 'post',
    title: 'Remote Work Security: Essential VPN Guide for 2026',
    slug: {
      _type: 'slug',
      current: 'remote-work-security-vpn-guide-2026'
    },
    author: 'Jennifer Park',
    category: 'Remote Work',
    themeColor: 'blue',
    publishedAt: new Date('2026-01-22T10:00:00Z').toISOString(),
    readTime: '9 min read',
    excerpt: 'Secure your remote work setup with enterprise-grade VPN protection. Learn best practices for protecting sensitive data while working from home.',
    metaDescription: 'Complete guide to VPN security for remote workers. Protect company data, secure public WiFi, and maintain compliance while working remotely.',
    metaKeywords: ['remote work VPN', 'work from home security', 'business VPN', 'remote security', 'enterprise VPN'],
    body: [
      {
        _type: 'block',
        _key: 'remote1',
        style: 'normal',
        children: [{ _type: 'span', _key: 'rspan1', text: 'Remote work is here to stay, but it comes with significant security challenges. Whether you\'re a freelancer or part of a distributed team, a VPN is essential for protecting sensitive business data.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote2',
        style: 'h2',
        children: [{ _type: 'span', _key: 'rspan2', text: 'Why Remote Workers Need a VPN', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote3',
        style: 'normal',
        children: [{ _type: 'span', _key: 'rspan3', text: 'When working remotely, you\'re often connecting to company resources over unsecured networks. A VPN encrypts your connection, ensuring that client data, proprietary information, and communications remain private.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote4',
        style: 'h2',
        children: [{ _type: 'span', _key: 'rspan4', text: 'The Dangers of Public WiFi', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote5',
        style: 'normal',
        children: [{ _type: 'span', _key: 'rspan5', text: 'Coffee shops, airports, and hotels offer convenient WiFi, but they\'re prime targets for hackers. Without a VPN, your passwords, emails, and files can be intercepted through man-in-the-middle attacks.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote6',
        style: 'h2',
        children: [{ _type: 'span', _key: 'rspan6', text: 'Compliance and Data Protection', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote7',
        style: 'normal',
        children: [{ _type: 'span', _key: 'rspan7', text: 'Many industries require strict data protection measures (GDPR, HIPAA, SOC 2). Blue VPN\'s enterprise-grade encryption helps you meet compliance standards, even when working from home.', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote8',
        style: 'h2',
        children: [{ _type: 'span', _key: 'rspan8', text: 'Conclusion', marks: [] }],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'remote9',
        style: 'normal',
        children: [{ _type: 'span', _key: 'rspan9', text: 'Remote work offers flexibility, but security cannot be an afterthought. With Blue VPN, you get enterprise-level protection that keeps your work secure no matter where you are. Work smarter, work safer.', marks: [] }],
        markDefs: []
      }
    ]
  }
];

async function createBlogs() {
  console.log('🚀 Creating 4 sample blog posts for Blue VPN...\n');

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    console.log(`📝 [${i + 1}/4] Creating: "${blog.title}"...`);

    try {
      const result = await client.create(blog);
      console.log(`✅ Success! Blog ID: ${result._id}\n`);
    } catch (error) {
      console.error(`❌ Error creating "${blog.title}":`, error.message, '\n');
    }
  }

  console.log('🎉 Blog creation complete!');
  console.log('\n📌 Next steps:');
  console.log('1. Go to http://localhost:3333 to see blogs in Sanity Studio');
  console.log('2. Go to http://localhost:5173/blog to see them on your website');
}

createBlogs();
