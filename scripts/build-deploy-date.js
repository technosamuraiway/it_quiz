import fs from 'fs'
import path from 'path'

const now = new Date()
const year = now.getFullYear().toString().slice(2)
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = now.getDate().toString().padStart(2, '0')

const dateStr = `${year}${month}${day}`

const filePath = path.join(path.resolve(), 'src', 'shared', 'build-deploy-date', 'index.ts')

const fileContent = `export const buildDeployDate = '${dateStr}';\n`

// Создаем директорию, если она не существует
fs.mkdirSync(path.dirname(filePath), { recursive: true })

// Записываем дату в файл
fs.writeFileSync(filePath, fileContent, 'utf8')

console.log(`=> Build deploy date updated to: ${dateStr}`)
