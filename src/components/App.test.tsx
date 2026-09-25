import { render } from '@testing-library/react';
import App from './App';

jest.mock('./Skills', () => () => <div data-testid="skills-mock" />);

test('renders without crashing', () => {
  render(<App />);
});