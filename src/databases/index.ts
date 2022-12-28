import { DB_CLOUD_URL } from '@config';

export const dbConnection = {
  url: DB_CLOUD_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
