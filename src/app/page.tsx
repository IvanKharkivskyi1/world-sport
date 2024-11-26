// pages/index.js
// import SportsList from '@/app/components/SportsList';
import SportsAltList from '@/app/components/SportsAltList';

export default function Home() {
  // console.log('sport', <SportsList />);
  return (
    <div>
      <h1>Hello World from Next.js and Redux</h1>
      {/* <SportsList /> */}
      <SportsAltList />
    </div>
  );
}
