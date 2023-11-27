
# Express Sharp Image Optimizer: Supercharge Your WebP Images

## 🚀 Introduction
Elevate your web presence with our Express Sharp Image Optimizer, the ultimate tool for converting images to WebP format. Designed for Node.js and Express applications, this optimizer harnesses the power of Sharp and libvips to deliver high-quality, lightweight WebP images, boosting your website's speed and SEO performance.

## 🌟 Key Features
- **Optimized for SEO**: Converts images to WebP, the preferred format for fast, SEO-friendly web pages.
- **Efficient Image Processing**: Leverages Sharp and libvips for quick and memory-efficient conversions.
- **Easy Integration**: Seamlessly integrates with Express applications for hassle-free image optimization.

## 🛠 Installation
```bash
npm install
```

## ⚡️ Quick Start
Run your server:
```bash
node index.js
```

Optimize an image to WebP:
```bash
curl -X POST -F "image=@images/bigimage-1.jpg" http://localhost:3000/upload
```

## 📖 API Guide
- **POST /upload**: Upload and convert an image to WebP.
  - Parameters: `image` (image file)
  - Response: Path of the optimized WebP image

## 🔄 WebP Conversion
Images are automatically resized and converted to WebP format with a balance of quality and compression, perfect for web use.

## 📈 Enhancing SEO with WebP
WebP images significantly reduce page load times, a critical factor in SEO rankings and user experience. 

## 🤝 Contributing
Join us in enhancing this tool! Contributions, bug reports, and feature requests are more than welcome.

## 📜 License
[Licensed under the Apache License](LICENSE).
