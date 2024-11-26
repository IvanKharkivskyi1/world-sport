// // components/SportsList.js
// 'use client'; // Директива для позначення компоненту як клієнтського

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSports } from '@/app/store/actions';

// const SportsList = () => {
//   const dispatch = useDispatch();
//   const sports = useSelector((state) => state.sports);

//   useEffect(() => {
//     dispatch(fetchSports());
//   }, [dispatch]);

//   if (sports.length === 0) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Sports Teams</h2>
//       <ul>
//         {sports.map((team) => (
//           <li key={team.TeamId}>{team.Name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SportsList;
