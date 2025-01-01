export const PersonStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mustafa Ahmad',
  jobTitle: 'Full-Stack Developer',
  description: 'Expert Full-Stack Developer specializing in ERPNext and AI integration',
  image: 'https://your-domain.com/DP.jpg',
  email: 'mustafak.direct@gmail.com',
  telephone: '+96879818196',
  url: 'https://your-domain.com',
  sameAs: [
    'https://linkedin.com/in/khan777',
    // Add other social profiles
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Muscat',
    addressCountry: 'Oman'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Al Ansari Group LLC'
  }
}
