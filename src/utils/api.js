// src/utils/api.js

export const validateYouTubeUrl = (url) => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=)|youtu\.be\/).+$/;
    return regex.test(url);
  };
  