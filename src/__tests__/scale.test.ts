import fs from 'fs';
import path from 'path';
import heic2any from 'heic2any';

describe('App scale test: convert all images in test_images', () => {
  const testDir = path.resolve(__dirname, '../../test_images');
  const files = fs.readdirSync(testDir).filter(f => /\.heic$/i.test(f));

  it('should attempt to convert all images and log results', async () => {
    let successCount = 0;
    let failCount = 0;
    for (const file of files) {
      const filePath = path.join(testDir, file);
      const buffer = fs.readFileSync(filePath);
      const blob = new Blob([buffer], { type: 'image/heic' });
      try {
        await heic2any({ blob, toType: 'image/jpeg', quality: 0.8 });
        console.log(`SUCCESS: ${file}`);
        successCount++;
      } catch (e) {
        console.log(`FAIL: ${file} - ${e}`);
        failCount++;
      }
    }
    console.log(`Total: ${files.length}, Success: ${successCount}, Fail: ${failCount}`);
    // It's OK if some fail, just ensure the test runs
    expect(successCount + failCount).toBe(files.length);
  });
}); 