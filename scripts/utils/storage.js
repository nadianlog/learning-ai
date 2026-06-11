/* =====================================
   STORAGE MANAGER - LOCAL STORAGE WRAPPER
   ===================================== */

const StorageManager = (() => {
  const PREFIX = 'learning_ai_';

  const setItem = (key, value) => {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  };

  const getItem = (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Storage error:', error);
      return defaultValue;
    }
  };

  const removeItem = (key) => {
    try {
      localStorage.removeItem(PREFIX + key);
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  };

  const clear = () => {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
})();
