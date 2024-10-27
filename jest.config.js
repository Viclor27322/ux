module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Si estás usando CSS
      '\\.(png|jpg|jpeg|gif|svg)$': 'jest-transform-stub', // Mockear imágenes
    }
  };
  