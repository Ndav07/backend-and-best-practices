export default {
  secret_token: String(process.env.SECRET_TOKEN),
  expires_in_token: String(process.env.EXPIRES_IN_TOKEN),
  refresh_secret_token: String(process.env.REFRESH_SECRET_TOKEN),
  refresh_expires_in_token: String(process.env.REFRESH_EXPIRES_IN_TOKEN),
};
