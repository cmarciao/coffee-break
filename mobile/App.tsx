import { StatusBar } from 'expo-status-bar';
import { Main } from '@components/main';

export default function App() {
  return (
    <>
      <Main />

      <StatusBar
        style="light"
        backgroundColor='#252528'
      />
    </>
  );
}