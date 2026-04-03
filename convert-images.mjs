import sharp from "sharp"
import { readdirSync, existsSync } from "fs"
import { join, basename, extname } from "path"

const dirs = [
  "public/images/products",
  "public/images/performance",
]

let converted = 0
let skipped = 0

for (const dir of dirs) {
  if (!existsSync(dir)) continue
  const files = readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f))

  for (const file of files) {
    const input = join(dir, file)
    const outName = basename(file, extname(file)) + ".webp"
    const output = join(dir, outName)

    if (existsSync(output)) { skipped++; continue }

    try {
      await sharp(input)
        .webp({ quality: 85 })
        .toFile(output)
      console.log(`✓ ${file} → ${outName}`)
      converted++
    } catch (e) {
      console.error(`✗ ${file}: ${e.message}`)
    }
  }
}

console.log(`\n완료: ${converted}장 변환, ${skipped}장 스킵`)
