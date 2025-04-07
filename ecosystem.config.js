module.exports = {
  apps: [
    {
      name: "zipda-client",
      script: "npm",
      args: "run start",
      error_file: "./logs/zipda_client.err",
      log_date_format: "YYYY-MM-DD HH:mm:ss SSS",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
