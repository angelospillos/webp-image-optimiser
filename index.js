const express = require('express');
const multer = require('multer');
const sharp = require('sharp');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), async (req, res) => {
    const filePath = req.file.path;
    const outputFilePath = `optimized/optimized-${req.file.originalname.split('.')[0]}.webp`;

    try {
        await sharp(filePath)
            .resize(800)
            .toFormat('webp', { quality: 60 })
            .toFile(outputFilePath);

        res.send(`Image optimized and saved as ${outputFilePath}`);
    } catch (error) {
        res.status(500).send(`Error processing image: ${error}`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
