const path = require('path')
const fs = require('fs')
const codeDir = path.join(process.cwd(), '/code')
const testDir = path.join(process.cwd(), '/test')

const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    consoole.log(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        console.log(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

console.log('请输入文件名 目录/文件名')

process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()
  const [dir, name] = inputName.split('/')
  // console.log(path.join(codeDir, dir))
  fs.exists(path.join(codeDir, dir), async (boo) => {
    if (!boo) {
      fs.mkdirSync(path.join(codeDir, dir))
      fs.mkdirSync(path.join(testDir, dir))
    }

    await generateFile(path.join(codeDir, dir, `/${name}.ts`), '')
    await generateFile(path.join(testDir, dir, `/${name}.test.ts`), '')
    console.log('文件创建成功!')
    process.stdin.emit('end')
  })
})
process.stdin.on('end', () => {
  process.exit()
})
