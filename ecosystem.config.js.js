module.exports = {
  apps: [
    {
      name: "NFA App",
      script: "./server.js",
      cwd: "/root/nfa-website",
      instances: "max", // Use all available CPU cores
      exec_mode: "cluster", // Enable cluster mode
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
