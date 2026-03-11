import { render } from '@testing-library/react';

// Mock react-leaflet (uses browser-specific APIs unavailable in jsdom)
jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => children,
  TileLayer: () => null,
  Marker: () => null,
  Popup: () => null,
  Circle: () => null,
  useMap: () => ({}),
}));

// Mock axios instances to prevent real HTTP calls
jest.mock('./axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('./axiosWiki', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

import App from './App';

test('app renders without crashing', () => {
  render(<App />);
});
