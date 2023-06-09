/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cryptologos.cc', 'ethereum.org', 'www.bitdegree.org', 'upload.wikimedia.org', 'assets.coingecko.com'],
	  },
}

module.exports = nextConfig
