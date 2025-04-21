// rename-index.js
import { renameSync, existsSync } from 'fs'
import { join } from 'path'

const distDir = 'dist'
const oldPath = join(distDir, 'Index.html')
const newPath = join(distDir, 'index.html')

if (existsSync(oldPath)) {
  renameSync(oldPath, newPath)
  console.log('✅ Index.html переименован в index.html')
} else {
  console.log('ℹ️ Index.html не найден, ничего не делаем')
}
