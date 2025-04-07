const { exec } = require("child_process");

// PM2를 사용하여 Next.js 애플리케이션 실행
exec("npx pm2 start ecosystem.config.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
  console.log(`애플리케이션이 성공적으로 시작되었습니다!`);
  console.log(`PM2 출력: ${stdout}`);
});
