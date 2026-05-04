import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'c2x83nrr',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN, // You'll need to provide this
});

const sampleBlogs = [
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
    publishedAt: new Date('2026-01-15').toISOString(),
    readTime: '7 min read',
    excerpt: 'Discover the essential security practices every VPN user should know in 2026. From choosing strong protocols to avoiding common pitfalls.',
    metaDescription: 'Learn the top 10 VPN security tips for 2026. Protect your privacy with expert advice on protocols, encryption, and best practices.',
    metaKeywords: ['VPN security', 'online privacy', 'encryption', 'cybersecurity', 'VPN tips'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'In 2026, online privacy has never been more critical. With increasing cyber threats and surveillance, using a VPN is essential—but only if you\'re doing it right. Here are the top 10 security tips every VPN user should follow.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Choose a No-Logs VPN Provider' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Always select a VPN provider with a strict no-logs policy. This means they don\'t store any information about your online activities, ensuring your privacy even if they\'re legally compelled to share data.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Use Strong Encryption Protocols' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Opt for VPNs that use AES-256 encryption, the gold standard in the industry. Protocols like WireGuard and OpenVPN offer excellent security and performance.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Enable the Kill Switch Feature' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A kill switch automatically disconnects your internet if the VPN connection drops, preventing your data from being exposed. This is crucial for maintaining privacy.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '4. Avoid Free VPNs' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Free VPN services often compromise your privacy by selling your data to third parties. Invest in a reputable paid service for genuine protection.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Conclusion' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Following these security tips will help you maximize the protection your VPN offers. Stay safe, stay private, and enjoy the internet without compromising your security.' }]
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
    publishedAt: new Date('2026-01-18').toISOString(),
    readTime: '6 min read',
    excerpt: 'Unlock global Netflix libraries and stream your favorite shows from anywhere. Learn how to bypass geo-restrictions and enjoy unlimited content.',
    metaDescription: 'Complete guide to streaming Netflix with a VPN. Access global content libraries, bypass geo-blocks, and watch shows from any country.',
    metaKeywords: ['Netflix VPN', 'streaming', 'geo-restrictions', 'unblock Netflix', 'VPN streaming'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Did you know that Netflix has different content libraries for different countries? With Blue VPN, you can access shows and movies from anywhere in the world. Here\'s how to do it.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Why Netflix Content Varies by Country' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Netflix licenses content differently for each region due to copyright agreements. A show available in the US might not be in the UK, and vice versa. This is where a VPN becomes invaluable.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Step-by-Step: Streaming Netflix with Blue VPN' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Step 1: Connect to a VPN Server' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Open Blue VPN and connect to a server in the country whose Netflix library you want to access. For example, connect to a US server for American Netflix.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Step 2: Clear Your Browser Cache' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Before accessing Netflix, clear your browser cookies and cache. This ensures Netflix recognizes your new location correctly.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Step 3: Open Netflix and Enjoy' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Navigate to Netflix, log in, and you\'ll see the content library for your selected region. Start streaming!' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Best Regions for Netflix Content' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The US Netflix has the largest library, followed by Canada and the UK. Japan offers excellent anime selections. Experiment with different regions to find your favorites!' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Troubleshooting Tips' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'If Netflix detects your VPN, try switching to a different server, clearing your cache again, or contacting Blue VPN support for optimized streaming servers.' }]
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
    publishedAt: new Date('2026-01-20').toISOString(),
    readTime: '8 min read',
    excerpt: 'Level up your gaming experience with a VPN. Reduce lag, protect against DDoS attacks, and access region-locked games with these expert tips.',
    metaDescription: 'Learn how a VPN can improve your gaming experience. Lower ping, prevent DDoS attacks, access geo-locked games, and play safely online.',
    metaKeywords: ['gaming VPN', 'reduce lag', 'DDoS protection', 'gaming security', 'lower ping'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Gamers often overlook VPNs, thinking they only slow down connections. But with the right VPN, you can actually improve your gaming experience while staying protected from threats.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'How a VPN Can Improve Gaming Performance' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A quality gaming VPN routes your traffic through optimized servers, potentially reducing ping and packet loss. Blue VPN\'s dedicated gaming servers are strategically located near major game servers for minimal latency.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'DDoS Protection for Competitive Players' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'DDoS attacks are a real threat in competitive gaming. A VPN hides your real IP address, making it nearly impossible for attackers to target you. This is crucial for streamers and esports players.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Access Region-Locked Games and Early Releases' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Many games launch earlier in certain regions. Connect to a VPN server in that country to play games before they\'re available in your area. This also unlocks region-exclusive content and servers.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Bypass ISP Throttling' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Some ISPs throttle gaming traffic during peak hours. A VPN encrypts your data, preventing your ISP from detecting and slowing down your gaming sessions.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Best Practices for Gaming with a VPN' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Always choose servers closest to the game servers you\'re connecting to. Use the WireGuard protocol for the best balance of speed and security. Blue VPN automatically suggests the optimal server for your game.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Conclusion' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A gaming VPN is no longer optional for serious players. Protect yourself from DDoS attacks, reduce lag, and unlock global gaming content with Blue VPN. Game on!' }]
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
    publishedAt: new Date('2026-01-22').toISOString(),
    readTime: '9 min read',
    excerpt: 'Secure your remote work setup with enterprise-grade VPN protection. Learn best practices for protecting sensitive data while working from home.',
    metaDescription: 'Complete guide to VPN security for remote workers. Protect company data, secure public WiFi, and maintain compliance while working remotely.',
    metaKeywords: ['remote work VPN', 'work from home security', 'business VPN', 'remote security', 'enterprise VPN'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Remote work is here to stay, but it comes with significant security challenges. Whether you\'re a freelancer or part of a distributed team, a VPN is essential for protecting sensitive business data.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Why Remote Workers Need a VPN' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'When working remotely, you\'re often connecting to company resources over unsecured networks. A VPN encrypts your connection, ensuring that client data, proprietary information, and communications remain private.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Dangers of Public WiFi' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Coffee shops, airports, and hotels offer convenient WiFi, but they\'re prime targets for hackers. Without a VPN, your passwords, emails, and files can be intercepted through man-in-the-middle attacks.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Compliance and Data Protection' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Many industries require strict data protection measures (GDPR, HIPAA, SOC 2). Blue VPN\'s enterprise-grade encryption helps you meet compliance standards, even when working from home.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Accessing Company Resources Securely' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A VPN allows you to securely access company intranets, cloud services, and internal tools as if you were in the office. This is crucial for maintaining productivity without compromising security.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Best Practices for Remote Work VPN Usage' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', marks: ['strong'], text: 'Always connect before working:' }, { _type: 'span', text: ' Make it a habit to activate your VPN before starting your workday.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', marks: ['strong'], text: 'Use the kill switch:' }, { _type: 'span', text: ' Enable this feature to prevent data leaks if your VPN disconnects unexpectedly.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', marks: ['strong'], text: 'Secure all devices:' }, { _type: 'span', text: ' Install Blue VPN on your laptop, tablet, and phone for comprehensive protection.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Conclusion' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Remote work offers flexibility, but security cannot be an afterthought. With Blue VPN, you get enterprise-level protection that keeps your work secure no matter where you are. Work smarter, work safer.' }]
      }
    ]
  }
];

async function createBlogs() {
  console.log('🚀 Starting to create sample blog posts...\n');

  try {
    for (const blog of sampleBlogs) {
      console.log(`📝 Creating: "${blog.title}"...`);
      const result = await client.create(blog);
      console.log(`✅ Created successfully! ID: ${result._id}\n`);
    }

    console.log('🎉 All blog posts created successfully!');
    console.log('\n📌 Next steps:');
    console.log('1. Go to http://localhost:3333 to see your blogs in Sanity Studio');
    console.log('2. Go to http://localhost:5173/blog to see them on your website');
    console.log('3. Edit or publish them as needed!');

  } catch (error) {
    console.error('❌ Error creating blogs:', error.message);
    console.log('\nℹ️  You may need to create an auth token in Sanity:');
    console.log('1. Go to https://www.sanity.io/manage/personal/tokens');
    console.log('2. Create a new token with Editor permissions');
    console.log('3. Set it as: export SANITY_AUTH_TOKEN="your-token-here"');
    console.log('4. Run this script again');
  }
}

createBlogs();
