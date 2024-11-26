export const fetchSports = () => async (dispatch) => {
    try {
      const res = await fetch('https://v3.football.api-sports.io', {
        headers: {
          'Ocp-Apim-Subscription-Key': '614b11604f57221e5cbb76d1b5e9f733',
        },
      });
      const data = await res.json();
      dispatch({
        type: 'SET_SPORTS',
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching sports data:', error);
    }
  };
  